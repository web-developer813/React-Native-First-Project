import React, {
   Component
} from 'react';

import PropTypes from 'prop-types';

import {
  Alert,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';

import Loading from '../../common/Loading';
import Button from '../../common/Button';

import CustomerPostRow from '../CustomerPostRow';
import CustomerTaskRow from '../CustomerTaskRow';


import Styles from './styles';

export default class PostViewScreen  extends Component {

    static propTypes = {
       publishPost: PropTypes.func,
       onTimeout: PropTypes.func,
       navigator: PropTypes.object.isRequired,
       authenticate: PropTypes.object,
       locationPath: PropTypes.string,
       location: PropTypes.shape({
        longitude: PropTypes.number,
       latitude: PropTypes.number
      }),
       budget: PropTypes.string,
       timeframe: PropTypes.string,
      updateInitialTab: PropTypes.func,
        account: PropTypes.shape({
          payload: PropTypes.shape({
           sub: PropTypes.string,
           avatar_uri_default: PropTypes.string
         })
       }),
       post: PropTypes.shape({
        currentPost: PropTypes.object,
        isFetching: PropTypes.bool,
        failed: PropTypes.bool
       })
    }

     static defaultProps = {
         publishPost: null,
         onTimeout: null,
         authenticate: null,
         locationPath: null,
         location: {
           longitude: null,
           latitude: null
         },
         budget: '0',
         timeframe: null,
         updateInitialTab: () => {},
         account: {
           payload: {
             sub: null,
             avatar_uri_default: null
           }
         },
         post: {
           currentPost: null,
           isFetching: false,
           failed: false
         }
     }

     constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.postNow = this.postNow.bind(this);
     }

     onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
         if (event.type === 'NavBarButtonPress' && event.id === 'back') { // this is the event type for button presses
           this.props.navigator.pop();
         }
     }
     postNow = () => {

     }
     render() {
       let subject = this.props.subject;
       let body = this.props.body;
       return (
          <View style={{flex: 1}}>
             <View style={Styles.fullContainer}>
                <ScrollView style={Styles.taskBodyWrapper}>
                   <CustomerPostRow
                     name="Jing tai"
                     locationPath={this.props.locationPath}
                     avatar="http://facebook.github.io/react/img/logo_og.png"
                     budget={this.props.budget}
                     subject={this.props.subject}
                     timeframe={this.props.timeframe}
                     takeOffer ={this.props.takeOffer}
                   />
                   <View style={Styles.taskContent}>
                      {
                        subject
                        ?
                          <Text style={Styles.taskSubject}>{this.props.subject}<Text style={Styles.taskTimeFrame}> | {this.props.timeframe} | {this.props.providers} Providers needed </Text></Text>
                        :
                          <Text style={Styles.taskTimeFrame}> {this.props.timeframe} | {this.props.providers} Providers needed</Text>
                      }
                   </View>
                      {
                         body
                         ?
                            <View style={Styles.taskContent}>
                              <Text style={Styles.taskTimeFrame}>{this.props.body}</Text>
                            </View>
                         :
                           null
                      }
                   <View style={[Styles.taskContent, Styles.lastItem]}>
                       <View style={Styles.tabImageContainer}>
                         <Image source={require('./img/avatar1.png')} style={Styles.stretch} />
                         <Image source={require('./img/avatar2.png')} style={Styles.stretch} />
                         <Image source={require('./img/avatar3.png')} style={Styles.stretch} />
                       </View>
                   </View>
                </ScrollView>
             </View>
             <View style={Styles.buttonPosition}>
                <Button
                   buttonStyle={Styles.themeBtn}
                   onPress={this.postNow}
                   text="Post Now"
                  />
             </View>
          </View>
       );
     }

 }