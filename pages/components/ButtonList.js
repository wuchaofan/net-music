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
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ButtonList extends PureComponent {
  render () {
    return (
      <View style={styles.main}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.item}>
            <Icon name="headphones" size={26} color="#fff"/>
          </View>
          <Text>私人FM</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.item}>
            <Icon name="calendar" size={26} color="#fff"/>
          </View>
          <Text>每日推荐</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.item}>
            <Icon name="list-ul" size={26} color="#fff"/>
          </View>
          <Text>歌单</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.item}>
            <Icon name="align-right" size={26} color="#fff"/>
          </View>
          <Text>排行榜</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 16
  },
  item: {
    width: 46,
    height: 46,
    borderRadius: 25,
    backgroundColor: '#D84035',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    shadowColor: '#D84035'
  }
})