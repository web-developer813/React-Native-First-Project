import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableHighlight,
  StatusBar,
  ListView,
  TouchableOpacity,
  Animated,
  Dimensions

} from 'react-native';

import PropTypes from 'prop-types';

import Button from '../../common/Button';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Rating from '../../common/Rating';
import TagInput from '../../common/TagInput';


import Styles from './styles';

const windowWidth = Dimensions.get('window').width;

export default class ProviderListResult extends Component {
    constructor(props) {
        super(props);
    }
     state = {
        providers: [
          {
            background : require('./img/store1.jpg'),
            storeName: "Flourish Florist Sydney",
            tags: [
              'legal adviser', 'solicitor'
            ],
            userID : 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue lectus, mollis ut turpis et, auctor viverra justo. Proin ac felis eu diam rutrum fringilla. Integer molestie bibendum placerat.',
            avatar: require('./img/avatar1.png'),
            name: 'Aerith Gainsburrough',
            jobTitle: 'legal adviser',
            location: 'North Melbourne, VIC',
            price: '$125 - 150/hr',
            stars: 5,
            services: 5,
            percent : '85%'
          },
          {
           background : require('./img/store2.jpg'),
           storeName: 'Bloom Exquisite Fragrances',
           tags: [
             'model', 'photographer', 'dancer'
           ],
            userID : 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue lectus, mollis ut turpis et, auctor viverra justo. Proin ac felis eu diam rutrum fringilla. Integer molestie bibendum placerat.',
            avatar: require('./img/avatar2.png'),
            name: 'Serah Farron',
            jobTitle: 'model',
            location: 'North Melbourne, VIC',
            price: '$80 - 100/hr',
            stars: 3,
            services: 3,
            percent : '80%'
          },
          {
            background : require('./img/store3.jpg'),
            storeName : 'Rose Only Store',
            tags: [
              'photographer', 'designer'
            ],
            userID : 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue lectus, mollis ut turpis et, auctor viverra justo. Proin ac felis eu diam rutrum fringilla. Integer molestie bibendum placerat.',
            avatar: require('./img/avatar3.png'),
            name: 'Celes Chere',
            jobTitle: 'photographer',
            location: 'North Melbourne, VIC',
            rice: '$90 - 120/hr',
            stars: 4,
            services: 4,
            percent : '90%'
          },
          {
            background : require('./img/store4.jpg'),
            storeName : 'Bloom Exquisite Fragrances',
            tags: [
              'cosplay'
             ],
             userID : 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue lectus, mollis ut turpis et, auctor viverra justo. Proin ac felis eu diam rutrum fringilla. Integer molestie bibendum placerat.',
            avatar: require('./img/avatar4.png'),
            name: 'Marry Carrie',
            price: '$40 - 60/hr',
            jobTitle: 'student',
            location: 'North Melbourne, VIC',
            stars: 4,
            services: 4,
            percent : '75%'
          }
        ]
      }
      ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      renderProvider = data => (
          <View style={Styles.titleInputWrapper}>
             <View style={[Styles.border, {elevation: 2}]}>
                 <Animated.Image resizeMode={Image.resizeMode.cover} source={data.background} style={{width: windowWidth-28,height: 120}}/>
                 <View style={{width : windowWidth -28, position:'absolute', height :90, top:30, backgroundColor: 'rgba(0,0,0,0.5)',}}>
                   <View style= {[Styles.storeInputWrapper,{paddingVertical :5}]}>
                      <View style={{ flexDirection: 'row'}}>
                          <Text style={[Styles.fontColor,{fontSize:16,fontWeight:'bold'}]}>{data.storeName}</Text>
                      </View>
                      <View style={{flexDirection: 'row',paddingHorizontal : 10}} >
                             {this.renderTags(data.userID,data.tags)}
                       </View>
                   </View>
                   <View style= {Styles.storeInputWrapper}>
                      <View style={{flexDirection :'row'}}>
                          <Text style={Styles.fontColor} numberOfLines={2}>{data.description}</Text>
                      </View>
                   </View>
                 </View>
                 <View style={[Styles.inputWrapper,{paddingBottom: 20}]}>
                      <View style={{marginTop :10}}>
                         <Image style={Styles.avatar} source={data.avatar} />
                      </View>
                      <View style={Styles.columnWrapper}>
                         <Text style={Styles.name} numberOfLines ={1}>{data.name}</Text>
                         <Text style={Styles.profession} numberOfLines ={1}>{data.jobTitle}</Text>
                         <Text style={Styles.location} numberOfLines ={1}>{data.location}</Text>
                       </View>
                      <View style={Styles.lastColumn}>
                          <Text style={Styles.price}>{data.price}</Text>
                          <Rating
                            wrapperStyle={Styles.ratingWrapper}
                            total={5}
                            rating={data.stars}
                            size={14}
                            color={Styles.THEME_COLOR.color}
                          />
                          <Text>{data.services} | {data.percent}</Text>
                        </View>
                 </View>
             </View>
        </View>
        );


     renderTags(userID, tags){
         return  tags.map((tag, i) =>{
             return(
                <View key={userID+i}>
                <View  style={{backgroundColor:'rgba(255,255,255,0.5)', marginRight: 3, paddingVertical: 1, paddingHorizontal : 2}}>
                    <Text style={{color:'#fff'}} numberOfLines = {1}>{tag}</Text>
                </View>
                </View>
             )
         });
     }
    render(){
        const dataSource = this.ds.cloneWithRows(this.state.providers);
        const data = this.state.providers[0];
        return(
            <View style={{ flex: 1 }}>
               <View style={{backgroundColor : Styles.THEME_COLOR.boxColor}}>
                 <Text style={Styles.customHeader}>Photography</Text>
                 <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                   onPress={()=>
                       this.props.navigator.pop()
                     }>
                     <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                 </TouchableHighlight>
                 <View style={Styles.TextTopRight}>
                     <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/map.png')} />
                 </View>
               </View>
               <View style={Styles.storeInputWrapper}>
                    <Text style={{paddingTop: 10}}>127 results</Text>
               </View>
               <View style={{flex: 1}}>
                    <ListView
                          dataSource={dataSource}
                          renderRow={this.renderProvider}
                    />
               </View>
            </View>
        );
    }
}