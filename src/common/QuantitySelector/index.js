import React, { Component, PureComponent } from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'
import PropTypes from 'prop-types';

class QuantitySelector extends PureComponent {
  constructor(props) {
    super(props)
    this._onIncreaseQuantity = this._onIncreaseQuantity.bind(this);
    this._onDecreaseQuantity = this._onDecreaseQuantity.bind(this);
    this.callBack = this.callBack.bind(this);

  }
  state = {
      quantity: this.props.value
  }

  _onIncreaseQuantity = () => {
    if (this.props.maxQuantity !== undefined && this.state.quantity >= this.props.maxQuantity) {
      return
    }
    this.setState(prevState => ({
       quantity: parseInt(prevState.quantity) + 1
    }), this.callBack);
  }

  _onDecreaseQuantity = () => {
    if (this.props.minQuantity !== undefined && this.state.quantity <= this.props.minQuantity) {
      return
    }
     this.setState(prevState => ({
        quantity: parseInt(prevState.quantity) - 1
      }), this.callBack);
  }

    callBack = () => {
     if (this.props.onChange) {
       this.props.onChange(this.state.quantity);
     }
   }


  render() {
    const {quantity} = this.state;
    console.log(quantity);
    return (
      <View style={ styles.container }>
        <Icon.Button
          size={ 30 }
          backgroundColor='transparent'
          color={ this.props.baseColor }
          underlayColor='transparent'
          style={ styles.actionButton }
          iconStyle={ styles.icon }
          onPress={ this._onDecreaseQuantity }
          name='remove' />
        <View>
           <Text>Quantity</Text>
           <TextInput
             underlineColorAndroid='transparent'
             keyboardType='numeric'
             onChangeText={ this._onUpdateQuantity }
             style={[ styles.quantityInput, { color: '#f38118' }]}
             editable={ false }
             value={ quantity.toString() } />
        </View>
        <Icon.Button
          size={ 30 }
          color={ this.props.baseColor }
          backgroundColor='transparent'
          underlayColor='transparent'
          style={ styles.actionButton }
          iconStyle={ styles.icon }
          onPress={ this._onIncreaseQuantity }
          name='add' />
      </View>
    )
  }
}

QuantitySelector.defaultProps = {
  minQuantity: 0,
  baseColor: '#b2b2b2'
}

QuantitySelector.propTypes = {
  minQuantity: React.PropTypes.number,
  maxQuantity: React.PropTypes.number,
  baseColor: React.PropTypes.string
}

export default QuantitySelector
