import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Switch,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Animated,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Loading from '../../common/Loading';

import Button from '../../common/Button';

import Styles from './styles';

import Rating from '../../common/Rating';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;


export default class OfferViewScreen extends Component {
   static propTypes = {
    publishOffer: PropTypes.func,
    onTimeout: PropTypes.func,
    navigator: PropTypes.object.isRequired,
    authenticate: PropTypes.object,

    unit: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,

    account: PropTypes.shape({
      palyload: PropTypes.shape({
        sub: PropTypes.string
      })
    }),
    offer: PropTypes.shape({
      currentOffer: PropTypes.object,
      isFetching: PropTypes.bool,
      failed: PropTypes.bool
    })
  }
  static defaultProps = {
      publishOffer: null,
      onTimeout: null,
      authenticate: null,

      unit: '',
      price: '',
      quantity: 0,

      updateInitialTab: () => {},
      account: {
        palyload: {
          sub: null
        }
      },
      offer: {
        currentOffer: null,
        isFetching: false,
        failed: false
      }
  }
  constructor(props) {
      super(props);
      this.state = {
          avatarSource: null,
          avatarCropped: {
                uri: null
          },
          openCorpModal: false,
          bottomValue : 20,
          ProfileTopHeight : new Animated.Value(150),
          resizeAnim : new Animated.Value(150),
          titleScreen : 'View Offer',
          contentHeights:[0,0],
          exampleContentHeight:0,
          nextButtonAvailable: true,
          minMomentHeight: new Animated.Value(300)
       };
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
      this.goToPrevious = this.goToPrevious.bind(this);
  }


  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
      if (event.type === 'NavBarButtonPress' && event.id === 'back') { // this is the event type for button presses
        this.props.navigator.pop();
      }
  }
  goToPrevious = () =>{
    this.props.navigator.pop();
  }
  postNow = () => {

  }
  render() {
        const price = 40 ;
        const quantity = 4;
        const total = (parseFloat(price) * quantity);

        return (
        <View style={{flex:1}}>
            <ScrollView>
                <View style={Styles.rowWrapper}>
                    <Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={Styles.circleImageView}/>
                    <View style={Styles.titleContentBody}>
                        <Text style={Styles.labelGrayBold14}>ABN 90 000 345 23</Text>
                        <Text style={Styles.labelGray12}>Photographer</Text>
                    </View>
                    <View style={{alignItems :'flex-end', justifyContent :'flex-end'}}>
                        <View style={{flexDirection: 'row'}}>
                        <Rating
                           total={5}
                           rating={4}
                           size={16}
                           color={Styles.THEME_COLOR.color}
                         />
                         </View>
                         <Text style={Styles.ratingValue}> 45 | 85%</Text>

                    </View>
                </View>
                <View style={Styles.inputGroup}>
                    <Text style={Styles.text16}>You can join my starter class over on Saturday. I will fix your problem in 4 weeks.</Text>
                </View>

                <View style={Styles.borderBottom}>
                    <View>
                        <Text style={Styles.subTitles}>Quotation</Text>
                    </View>
                    <View style={[Styles.inputGroup,Styles.marginBottom20]}>
                        <View style={Styles.quotationWidth}>
                            <Text>Weekend Beginner Dog Training Class Summer Camp. </Text>
                            <Text style={Styles.label}>central park, Melbourne</Text>
                        </View>
                        <View style={{flexDirection : 'row'}}>
                            <Text>x{quantity}</Text>
                        </View>
                        <View style={{flexDirection : 'row'}}>
                            <Text style={Styles.hourlyRateLarge}>${price}/visit</Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.inputRightGroup}>
                    <Text >(Inc. Tax) Total </Text>
                    <Text style={Styles.budget}>${total}</Text>
                 </View>
            </ScrollView>
            <View style={ Styles.textPosition}>
                <Text style={{color: Styles.THEME_COLOR.lightGrey,fontStyle: 'italic'}}>
                    (note this is only an initial quotation, a final price would be sent out on the invoice upon agreement)
                </Text>
            </View>
            <View style={Styles.buttonPosition}>
                 {
                    this.state.nextButtonAvailable
                    ?
                       <Button
                        buttonStyle={Styles.themeBtn}
                        onPress={this.postNow}
                        text="Post Now"
                       />
                    :
                        null
               }
             </View>
        </View>
        );
  }
}