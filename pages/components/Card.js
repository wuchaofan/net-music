import React, {PureComponent} from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native'

export default class Card extends PureComponent {
  render () {
    const {width} = Dimensions.get('window')
    const w = width / 3 - 10
    const {source, title} = this.props
    return (
      <View style={{width: w, marginBottom: 10}}>
        <View style={{borderRadius: 4, overflow: 'hidden', marginBottom: 4}}>
          <Image source={source} style={{width: w, height: w}}/>
        </View>
        <Text style={{color: '#777'}}>
          {title}
        </Text>
      </View>
    )
  }
}