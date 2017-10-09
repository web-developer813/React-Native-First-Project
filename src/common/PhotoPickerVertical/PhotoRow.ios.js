import React, {
  PureComponent
} from 'react';

import {
  View,
  TouchableWithoutFeedback,
  Image,
  ActivityIndicator
} from 'react-native';

import PropTypes from 'prop-types';

import CheckBox from './CheckBox';

import Styles from './styles';

export default class PhotoRow extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    selectToEdit: PropTypes.func,
    onCheck: PropTypes.func,
    rowIndex: PropTypes.number
  }

  static defaultProps = {
    data: [],
    selectToEdit: null,
    onCheck: null,
    rowIndex: 0
  }

  state = {
    loading: true
  }

  onCheck(rowInd, colInd, checkBoxStatus) {
    this.props.onCheck(rowInd, colInd, checkBoxStatus);
  }

  selectToEdit(rowInd, colInd, checkBoxStatus) {
    this.props.selectToEdit(rowInd, colInd, checkBoxStatus);
  }

  render() {
    const { data, rowIndex } = this.props;
    return (
      <View style={Styles.row}>
        {
          data.map((photo, index) => {
            if (photo) {
              const { uri, selectToEdit, checked } = photo;
              return (
                  uri ?
                    <View
                      pointerEvents="box-none"
                      key={uri}
                      style={Styles.photoCell}
                    >
                      <CheckBox
                        checked={checked}
                        onCheck={
                          checkBoxStatus =>
                          this.onCheck(rowIndex, index, checkBoxStatus)
                        }
                      />
                      <TouchableWithoutFeedback onPress={() => this.selectToEdit(rowIndex, index)}>
                        <View
                          style={[Styles.frame, selectToEdit && Styles.highlight]}
                        >
                          <Image
                            onLoadEnd={() => this.setState(() => ({ loading: false }))}
                            style={Styles.cell}
                            resizeMode="cover"
                            resizeMethod="resize"
                            source={{
                              uri,
                              width: Styles.imageCellSize,
                              height: Styles.imageCellSize
                            }}
                          >
                            { this.state.loading && <ActivityIndicator /> }
                          </Image>
                        </View>
                      </TouchableWithoutFeedback>
                    </View>
                  :
                  null
              );
            }
            return null;
          })
        }
      </View>
    );
  }
}
