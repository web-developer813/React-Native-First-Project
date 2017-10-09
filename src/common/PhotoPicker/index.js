import React, {
  PureComponent
} from 'react';

import {
  Animated,
  Alert,
  View,
  Modal,
  TouchableOpacity,
  Image,
  Text,
  Platform,
  ActionSheetIOS,
  InteractionManager,
  CameraRoll,
  VirtualizedList,
  PermissionsAndroid
} from 'react-native';

import PropsTypes from 'prop-types';

import Immutable from 'immutable';

import { remove, union, map, filter } from 'lodash';

import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import RNImageTools from 'react-native-image-tools';

import ActionSheet from 'react-native-android-action-sheet';

import NavBar from '../NavBar';
import PhotoRow from './PhotoRow';

import Styles from './styles';

export default class PhotoPicker extends PureComponent {

  static propTypes = {
    selectImageTitle: PropsTypes.string,
    onConfirm: PropsTypes.func,
    maxSelectedImage: PropsTypes.number
  }

  static defaultProps = {
    selectImageTitle: null,
    onConfirm: () => {},
    maxSelectedImage: 3
  }

  static numEveryRow(data, n) {
    const result = [];
    let temp = [];

    for (let i = 0, len = data.length; i < len; ++i) {
      if (i > 0 && i % n === 0) {
        result.push(temp);
        temp = [];
      }

      if (!data[i].selectToEdit) {
        data[i].selectToEdit = false;
        data[i].checked = false;
      }

      temp.push(data[i]);
    }

    if (temp.length > 0) {
      while (temp.length !== n) {
        temp.push(null);
      }

      result.push(temp);
    }

    return result;
  }

  renderResult(images: Array) {
    return (
      <View style={Styles.resultWrapper}>
          {
            images.map(uri => <TouchableOpacity key={uri} onPress={()=>this.showEditModal(uri)}><Image key={uri} source={{ uri, width: 40, height: 40 }} resizeMode="cover" style={Styles.resultImg} /></TouchableOpacity>)
          }
      </View>
    );
  }
  renderSelectImage(image)
  {
    console.log(image);
    return (
      <Image key={image} source={{ image, width: 200, height: 200 }} resizeMode="cover" style={Styles.resultImg} />
    );
  }

  static alertErrorMsg(errmsg) {
    Alert.alert(
        'Error occurs',
        errmsg,
      [
        { text: 'OK', onPress: () => {} },
      ],
        { cancelable: false }
      );
  }

  static async requestAndroidPermission() {
    try {
      const granted = await PermissionsAndroid.requestMultiple(
        [
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.CAMERA
        ]
      );

      const result = filter(granted,
        permission => permission !== PermissionsAndroid.RESULTS.GRANTED
      );

      if (!granted || result.length > 0) {
        PhotoPicker.alertErrorMsg('You cannot upload image');
      }
    } catch (err) {
      PhotoPicker.alertErrorMsg(err);
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      openPreviewModal: false,
      openEditModal:false,
      loading: false,
      selected: [],
      realSelected:[],
      lastCursor: null,
      loadingMore: false,
      noMore: false,
      dataSource: Immutable.List(),
      realDataSource: Immutable.List(),
      maxSelectedImage: props.maxSelectedImage,
      photoToEdit: Immutable.Map(),
      translateY: new Animated.Value(150),
      uriFromCamera: null,
      editImageUri:null
    };

    this.onCheck = this.onCheck.bind(this);
    this.pickImage = this.pickImage.bind(this);
    this.selectPhotoToEdit = this.selectPhotoToEdit.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  async componentDidMount() {
    //const hasPermission = await RNImageTools.checkImageLibraryPermission();
    const hasPermission = true;
    if (!hasPermission) {
      //await RNImageTools.requestImageLibraryPermission();
    }
    if (Platform.OS === 'ios') {
      // RNImageTools.authorize(
      //   'e7974c54967e42c1a8d9d5ef8f98ce2f', // "client-id-here",
      //   'c0e1083f-00e1-4ba0-8713-e89428818450', // "client-secret-here",
      //   'ams+cd5685d47e13cd942c8c29d1b6d304d1f4d4cbf7://adobeid/e7974c54967e42c1a8d9d5ef8f98ce2f', //"client-redirect-here"
      // );
    } else if (Platform.Version >= 23) {
      PhotoPicker.requestAndroidPermission();
    }
  }

  /**
   * Logic after take a photo from camera
   * @param  {[type]} response [description]
   * @return {[type]}          [description]
   */
  onImageSelect(response) {
    //alert("Paramter received");
    if (response && response.uri) {
      const uri = response.uri;
      const { selected } = this.state;
      const newSelected = [...selected];
      newSelected.push(uri);

      this.setState({
        selected: newSelected,
        uriFromCamera: uri,
        photoToEdit: Immutable.Map({
          uri
        })
      });

      this.setState({
        realSelected: newSelected,
        uriFromCamera: uri,
        photoToEdit: Immutable.Map({
          uri
        })
      });
      /* eslint-disable no-undef */
      requestAnimationFrame(() => {
        Animated.timing(this.state.translateY, {
          toValue: 0
        })
        .start();
      });

      this.props.onConfirm(this.state.selected);
    }

  }

  /**
   * process the edit result
   * @return void
   */
  async onEdit() {
    // photoToEdit contains coordinate, and uri
    // const { photoToEdit, selected, usingCamera } = this.state;
    //
    // if (photoToEdit.has('uri')) {
    //   const editUri = photoToEdit.get('uri');
    //   try {
    //     const uri = await RNImageTools.openEditor({
    //       imageUri: editUri,
    //       outputFormat: 'JPEG',
    //       quality: 100,
    //       preserveMetadata: false, // IOS only
    //       saveTo: 'photos'
    //     });
    //
    //     if (uri) {
    //       const newSelected = map(selected, (selectedUri) => {
    //         if (selectedUri === editUri) {
    //           return uri;
    //         }
    //         return selectedUri;
    //       });
    //
    //       const newState = {
    //         selected: newSelected
    //       };
    //
    //       if (!usingCamera) {
    //         const newDataSource = this.state.dataSource.update(photoToEdit.get('rowInd'), (photo) => {
    //           const tmp = [...photo];
    //           tmp[photoToEdit.get('colInd')].uri = uri;
    //           return tmp;
    //         });
    //
    //         newState.dataSource = newDataSource;
    //       } else {
    //         newState.uriFromCamera = uri;
    //       }
    //
    //       this.setState(newState);
    //     }
    //   } catch (e) {
    //     PhotoPicker.alertErrorMsg(e);
    //   }
    // }
  }

  showEditModal(uri)
  {
    const editImageUri = uri;
    this.setState({
      editImageUri,
      openEditModal: true
    });
  }
  onCheck(rowInd, colInd, checked) {
    const { selected, maxSelectedImage } = this.state;
    let newSelected = [];
    if (selected.length >= maxSelectedImage && checked) {
      Alert.alert(
            '',
            `You can only choose ${maxSelectedImage} images`,
        [
          { text: 'OK', onPress: () => {} },
        ],
          { cancelable: false }
        );
      return false;
    }

    const { uri } = this.state.dataSource.get(rowInd)[colInd];
    let newDataSource;
    if (checked) {
      newSelected = union(selected, [uri]);
      newDataSource = this.state.dataSource.update(rowInd, (photo) => {
        photo[colInd].checked = true;
        return [
          ...photo
        ];
      });
    } else {
      newSelected = [...selected];
      remove(newSelected, imgUri => imgUri === uri);
      newDataSource = this.state.dataSource.update(rowInd, (photo) => {
        photo[colInd].checked = false;
        return [
          ...photo
        ];
      });
    }

    this.setState({
      selected: newSelected,
      dataSource: newDataSource
    });

    return true;
  }

  onEndReached = () => {
    if (!this.state.noMore && !this.state.loadingMore) {
      this.loadPhotos();
    }
  }


  onInitStates(dataSource,realDataSource)
  {
    const result = [];
    let temp = [];
    for (let k = 0,sz = dataSource.size;k < sz;++k)
    {
      data = dataSource.get(k);
      dataReal = realDataSource.get(k);
      for (let i = 0, len = data.length; i < len; ++i) {
        if (data[i] != null)
        {
          data[i].selectToEdit = dataReal[i].selectToEdit;
          data[i].checked = dataReal[i].checked;
        }
      }
    }

  }
  photoAction(index) {
    if (index === 0 || index === 1) {
      const options = {
        title: this.props.selectImageTitle || 'Select Avatar',
        mediaType: 'photo',
        storageOptions: {
          skipBackup: true,
          path: 'images',
          waitUntilSaved: true
        }
      };

      if (index === 0) {
        if (this.state.realSelected.length < this.props.maxSelectedImage)
        {
          this.setState({
            usingCamera: true,
            openPreviewModal: false,
          });

          InteractionManager.runAfterInteractions(() =>
            ImagePicker.launchCamera(options, response => this.onImageSelect(response))
          );
        }
        else {
          Alert.alert(
                '',
                `You can only choose ${this.props.maxSelectedImage} images`,
            [
              { text: 'OK', onPress: () => {} },
            ],
              { cancelable: false }
            );
        }
      } else {
        this.setState({
          selected: this.state.realSelected
        });
        InteractionManager.runAfterInteractions(() => {
          this.setState({
            usingCamera: false,
            openPreviewModal: true,
          });
        });
      }
    }
  }

  pickImage() {
    const option = {
      options: [
        'Take Photo',
        'Choose from library',
        'Cancel',
      ],
      title: this.props.selectImageTitle || 'Select photo',
      cancelButtonIndex: 2,
      destructiveButtonIndex: 2,
    };

    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(option,
      index =>
        this.photoAction(index)
      );
    } else {
      ActionSheet.showActionSheetWithOptions(option,
      index =>
        this.photoAction(index)
      );
    }
  }

  appendImages(data) {
    const assets = data.edges;
    const newState = {
      loadingMore: false
    };

    if (!data.page_info.has_next_page) {
      newState.noMore = true;
    }

    if(data.page_info.end_cursor) {
      newState.lastCursor = data.page_info.end_cursor;
    }

    if (assets.length > 0) {
      const purgedData = map(assets, asset => ({
        uri: asset.node.image.uri,
        selectToEdit: asset.selectToEdit
      }));

      const purgedData1 = map(assets, asset => ({
        uri: asset.node.image.uri,
        selectToEdit: false
      }));

      const dataSource = this.state.dataSource.concat(
        Immutable.List(PhotoPicker.numEveryRow(purgedData, 3))
      );
      const realDataSource = this.state.realDataSource.concat(
        Immutable.List(PhotoPicker.numEveryRow(purgedData1, 3))
      );

      this.setState({
        ...newState,
        dataSource,
        realDataSource
      });
    }
  }

  load() {
    const fetchParams = {
      first: 21
    };

    if (this.state.lastCursor) {
      fetchParams.after = this.state.lastCursor;
    }

    if(!this.state.noMore) {
      CameraRoll.getPhotos(fetchParams)
        .then(r => this.appendImages(r));
    }

  }

  loadPhotos = () => {
    if (!this.state.loadingMore) {
      this.setState({ loadingMore: true }, () => this.load());
    }
  }
  loadSelectPhoto =() =>
  {

  }
  loadInitialPhotos = () => {
    const { dataSource, usingCamera } = this.state;
    if (dataSource.size === 0 && !usingCamera) {
      this.setState({ loadingMore: true }, () => this.load());
    }
  }

  highlightSelectedImg(rowInd, colInd) {

    const { photoToEdit } = this.state;
    let newDataSource;
    if (photoToEdit.has('rowInd') && photoToEdit.has('colInd')) {
      newDataSource = this.state.dataSource.update(photoToEdit.get('rowInd'), (photo) => {
        const index = photoToEdit.get('colInd');
        photo[index].selectToEdit = false;
        return [
          ...photo
        ];
      });

      this.onCheck(rowInd, colInd, true);
      newDataSource = newDataSource.update(rowInd, (photo) => {
        photo[colInd].selectToEdit = true;
        return [
          ...photo
        ];
      });
    } else {
      newDataSource = this.state.dataSource.update(rowInd, (photo) => {
        photo[colInd].selectToEdit = true;
        return [
          ...photo
        ];
      });
      this.onCheck(rowInd, colInd, false);
    }

    const uri = this.state.dataSource.get(rowInd)[colInd].uri;

    this.setState({
      photoToEdit: Immutable.Map({
        rowInd,
        colInd,
        uri
      }),
      dataSource: newDataSource
    });
  }

  selectPhotoToEdit(rowInd, colInd) {
    const photoToEdit = new Immutable.Map({
      rowInd,
      colInd
    });

    if (!photoToEdit.equals(this.state.photoToEdit)) {
      requestAnimationFrame(() => this.highlightSelectedImg(rowInd, colInd));
      if (!this.state.photoToEdit.has('rowInd')) {
        Animated.timing(this.state.translateY, {
          toValue: 0
        })
        .start();
      } else {
        this.highlightSelectedImg(rowInd, colInd);
      }
    }
  }

  confirm() {
    this.onInitStates(this.state.realDataSource,this.state.dataSource);
    this.setState({
      openPreviewModal: false,
      realSelected:this.state.selected
    }, () => {
      this.props.onConfirm(this.state.selected);
    });
  }

  closeModal = () => {
    this.onInitStates(this.state.dataSource,this.state.realDataSource);
    this.setState({
      dataSource:this.state.dataSource,
      openPreviewModal: false,
      selected: this.state.realSelected,
    }, () => {
      //this.props.onConfirm(this.state.selected);
    });
  }

  closeEditModal = () => {
    this.setState({
      openEditModal: false
    });
  }

  renderItem = ({ item, index }) =>
  (
    <PhotoRow
      rowIndex={index}
      key={item[0].uri}
      data={item}
      onCheck={this.onCheck}
      selectToEdit={this.selectPhotoToEdit}
    />
  )

  renderConfirmButton() {
    const length = this.state.selected.length;
    return (
      <View style={Styles.confirmBtn}>
        <Text style={Styles.confirmText}>Done ({ length }/{ this.props.maxSelectedImage })</Text>
      </View>
    );
  }

  renderTrash() {
    const length = this.state.selected.length;
    return (
      <View style={[Styles.confirmBtn,{backgroundColor:'transparent'}]}>
        <Image source={require('../Images/trash_dark@3x.png')} resizeMode='contain' style={{width: 24, height: 24 }} />
      </View>
    );
  }


  render() {
    const {
      openPreviewModal,
      selected,
      dataSource,
      realDataSource,
      translateY,
      usingCamera,
      uriFromCamera,
      realSelected,
      editImageUri
    } = this.state;

    console.log('=======>', editImageUri);
    return (
      <View style={Styles.wrapper}>
        {
          realSelected.length > 0
          &&
          this.renderResult(realSelected)
          //PhotoPicker.renderResult(realSelected)
        }
        <TouchableOpacity style={Styles.pickerButton} onPress={this.pickImage}>
          <View style={Styles.pickerButtonInner}>
            <Image
              source={require('../../common/Images/camera@3x.png')}
              style={[Styles.clipIcon,{width:25,height:20}]}
              resizeMode="contain"
            />
            <Text style={Styles.label}>Add a photo {realSelected.length}/{this.props.maxSelectedImage}</Text>
          </View>
        </TouchableOpacity>
        <Modal
          animationType={'none'}
          transparent={false}
          visible={openPreviewModal}
          onShow={this.loadInitialPhotos}
          onRequestClose={() => { }}
        >
          <View style={Styles.fullContainer}>
            <NavBar
              onPressLeftNavBtn={this.closeModal}
              title="Image List"
              rightButton={() => this.renderConfirmButton()}
              onPressRightNavBtn = {this.confirm}
            />
            {
              usingCamera
              ?
                <Image
                  source={{ uri: uriFromCamera }}
                  style={Styles.fullContainer}
                  resizeMode="cover"
                  resizeMethod="scale"
                />
              :
                <VirtualizedList
                  style={Styles.photoGrid}
                  enableEmptySections
                  contentContainerStyle={Styles.girdContentStyle}
                  getItemCount={items => (items && (items.size || 0))}
                  getItem={(items, key) => (items.get ? items.get(key) : items[key])}
                  removeClippedSubviews
                  onEndReached={this.onEndReached}
                  onEndReachedThreshold={100}
                  keyExtractor={item => (item[0].uri)}
                  initialNumToRender={15}
                  maxToRenderPerBatch={15}
                  updateCellsBatchingPeriod={150}
                  data={dataSource}
                  renderItem={this.renderItem}
                />
            }
            {/*
            <Animated.View style={[Styles.editorOverlayUnder, { transform: [{ translateY }] }]}>
              <View style={Styles.buttonWrapper}>
                <TouchableOpacity style={Styles.leftButton} onPress={() => this.onEdit()}>
                  <Image source={{ uri: 'magic_wand_white', width: 24, height: 24 }} />
                </TouchableOpacity>
              </View>
              <View style={Styles.buttonWrapper}>
                <TouchableOpacity style={Styles.rightButton} onPress={this.confirm}>
                  <Icon name="check" color="#fff" size={36} />
                </TouchableOpacity>
              </View>
            </Animated.View>
            */}
          </View>
        </Modal>
        <Modal
          animationType={'none'}
          transparent={false}
          visible={this.state.openEditModal}
          onShow={this.loadSelectPhoto}
          onRequestClose={() => { }}
          >
          <NavBar
            onPressLeftNavBtn={this.closeEditModal}
            title="Preview"
            rightButton={() => this.renderTrash()}
            onPressRightNavBtn = {this.confirm}
          />
          <View  style={[Styles.imgEdit,{alignItems:'center',justifyContent:'center'}]}>
             <Image source={{uri: editImageUri}} resizeMode="contain" style={[Styles.imgEditWidth, Styles.fullContainer]}/>
          </View>
          <View style={Styles.bottomBar}>

          </View>
        </Modal>
      </View>
    );
  }
}
