import React, {Component} from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  Dimensions
} from 'react-native'
import Swiper from './Swiper'
import ButtonList from './ButtonList'
import Icon from 'react-native-vector-icons/FontAwesome'
import Card from './Card'
export default class Tabs extends Component {
  state = {
    containerWidth: 0,
    underLineLeft: 0,
    underLineWidth: 20,
    tab1Position: null,
    tab2Position: null,
    directionScroll: 0
  }
  constructor (props) {
    super(props)
    this.tab1 = null
    this.tab2 = null
  }
  componentDidMount () {
  }
  _onChangeTab = (index) => {

  }
  _containerLayout = (event) => {
    this.setState({containerWidth: event.nativeEvent.layout.width})
  }
  _onScroll = (event) => {
    console.log(event.nativeEvent.contentOffset.x)
    const offsetX = event.nativeEvent.contentOffset.x
    const {containerWidth, underLineWidth, directionScroll} = this.state
    if (offsetX === containerWidth) {
      const {tab2Position: layout} = this.state
      this.setState({underLineWidth: 20, underLineLeft: layout.x + layout.width / 2 - 10})
    } else if (offsetX === 0){
      const {tab1Position: layout} = this.state
      this.setState({underLineWidth: 20, underLineLeft: layout.x + layout.width / 2 - 10})
    } else {
      if (offsetX - directionScroll > 0) {
        const {tab1Position: layout, tab2Position} = this.state
        let originLeft = layout.x + layout.width / 2 - underLineWidth / 2 + offsetX / containerWidth * (tab2Position.x - layout.x)
        this.setState({underLineWidth: underLineWidth, underLineLeft: originLeft})
      } else {
        const {tab1Position, tab2Position: layout} = this.state
        let originLeft = layout.x + layout.width / 2 - underLineWidth / 2 - (containerWidth - offsetX) / containerWidth * (layout.x - tab1Position.x)
        this.setState({underLineWidth: underLineWidth, underLineLeft: originLeft})
      }
    }
    this.setState({directionScroll: offsetX})
  }
  _onTab1Layout = (event) => {
    const layout = event.nativeEvent.layout
    this.setState({tab1Position: layout, underLineLeft: layout.x + layout.width / 2 - 10})
  }
  _onTab2Layout = ({nativeEvent}) => {
    this.setState({tab2Position: nativeEvent.layout})
  }
  render () {
    const {containerWidth, underLineLeft, underLineWidth} = this.state
    const underlineStyle = {
      position: 'absolute',
      height: 4,
      backgroundColor: 'white',
      width: underLineWidth,
      left: underLineLeft,
      borderRadius: 4,
      bottom: 2
    }
    const {children} = this.props
    console.log(children)
    return (<View style={{flex: 1, backgroundColor: 'white'}} onLayout={this._containerLayout}>
      <View style={styles.tab}>
        <TouchableHighlight onPress={() => this._onChangeTab(0)} onLayout={this._onTab1Layout}>
          <Text style={{color: 'white'}} >个性推荐</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this._onChangeTab(1)} onLayout={this._onTab2Layout}>
          <Text style={{color: 'white'}}>主播电台</Text>
        </TouchableHighlight>
        <View style={underlineStyle}></View>
      </View>
      <ScrollView pagingEnabled={true} horizontal={true} onScroll={this._onScroll} scrollEventThrottle={10}>
        <View style={{flex: 1, width: containerWidth, height: 800}}>
          <View style={{backgroundColor: '#D84035', height: 80}}></View>
          <View style={{alignItems: 'center', position: 'absolute', marginTop: 6, width: '100%'}}>
            <Swiper style={{width: containerWidth * 0.86, flex: 1}}/>
          </View>
          <ButtonList />
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 20, marginBottom: 14}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginRight: 4}}>推荐歌单</Text>
            <Icon name="chevron-right" size={15} color="#888" />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'stretch'}}>
            <Card source={require('../img/c1.jpg')} title="你们是我教过最差的一届学生"/>
            <Card source={require('../img/c2.jpg')} title="减压室|室长说你是这条街最有舞"/>
            <Card source={require('../img/c3.jpg')} title="【妖气弥漫】"/>
            <Card source={require('../img/c4.jpg')} title="瑟尔二人"/>
            <Card source={require('../img/c2.jpg')} title="为了让客人就哦而金额"/>
            <Card source={require('../img/c1.jpg')} title="水电费舒服无非"/>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 20, marginBottom: 14}}>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginRight: 4}}>最新音乐</Text>
            <Icon name="chevron-right" size={15} color="#888" />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignContent: 'stretch'}}>
            <Card source={require('../img/c1.jpg')} title="你们是我教过最差的一届学生"/>
            <Card source={require('../img/c2.jpg')} title="减压室|室长说你是这条街最有舞"/>
            <Card source={require('../img/c3.jpg')} title="【妖气弥漫】"/>
            <Card source={require('../img/c4.jpg')} title="瑟尔二人"/>
            <Card source={require('../img/c2.jpg')} title="为了让客人就哦而金额"/>
            <Card source={require('../img/c1.jpg')} title="水电费舒服无非"/>
          </View>
        </View>
        <View style={{flex: 1, width: containerWidth, height: 800}}>
          <Text>sdsd1</Text>
        </View>
      </ScrollView>
    </View>)
  }
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: '#D84035'
  }
})