import React, {Component} from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  TextInput,
  Dimensions
} from 'react-native'
import {Flex, SearchBar, Accordion, List, Tabs} from 'antd-mobile-rn'
import Icon from 'react-native-vector-icons/FontAwesome'
import TabsCom from '../components/Tabs'
import Swiper from '../components/Swiper'
import {observer, inject} from 'mobx-react';

const {width, height} = Dimensions.get('window')

class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <StatusBar barStyle="light-content"/>
        <Flex style={{paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, height: 38}}>
            <Icon name="microphone" size={26} color="#fff"/>
            <SearchInput />
            <Icon name="signal" size={26} color="#fff"/>
        </Flex>
      </View>
    )
  }
}

class SearchInput extends Component {
  render () {
    return (
      <Flex style={styles.SearchInput}>
        <Icon name="search" size={16} color="#999" />
        <TextInput style={styles.input} placeholder="很好听哦"/>
      </Flex>
    )
  }
}
@inject("rootStore")
@observer
class FindPage extends Component {
  static navigationOptions = {
    header: null
  }
  render () {
    console.log(this.props)
    return (
      <ScrollView style={{ flex: 1 }}>
        <Header/>
        <TabsCom />
      </ScrollView>
    )
  }
}

export default FindPage

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#D84035',
    paddingTop: 20
  },
  SearchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'stretch',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    overflow: 'hidden'
  },
  input: {
    height: '100%',
    flex: 1,
    marginLeft: 10
  }
})