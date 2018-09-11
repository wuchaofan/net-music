import React from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image
} from 'react-native'
const screenWidth = Dimensions.get('window').width
class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={{width: 300, backgroundColor: 'blue'}}>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class Swiper extends React.PureComponent {
  state = {width: 0, index: 0};
  constructor (props) {
    super(props)
    this.timeId = null
    this._scrollView = null
  }
  _keyExtractor = (item, index) => item.id;

  _onlayout = (event) => {
    this.setState({width: event.nativeEvent.layout.width})
  }
  _onScroll = (event) => {
    // console.log(event.nativeEvent.contentOffset, this.state.width)
  }
  componentDidMount () {
    this.timeId = setInterval(() => {
      const {width, index} = this.state
      const nextIndex = (index + 1) % 3
      const x = width * nextIndex
      this._scrollView.scrollTo({x, y: 0, animated: true})
      this.setState({index: nextIndex})
    }, 5000)
  }
  componentWillUnmount () {
    clearInterval(this.timeId)
  }
  render() {
    const {style} = this.props
    const {width, index} = this.state
    // const 
    return (
      <View style={{position: 'relative', overflow: 'hidden'}}>
        <ScrollView pagingEnabled={true} horizontal={true} 
          contentContainerStyle={{height: 120}}
          onScroll={this._onScroll}
          scrollEventThrottle={3}
          ref={v => this._scrollView = v}
          style={[{width: screenWidth}, style]} onLayout={this._onlayout}>
          <View style={{width, borderRadius: 6, overflow: 'hidden'}}>
            <Image source={require('../img/1.jpg')} style={{width: '100%', height: '100%'}} resizeMode="cover"/>
          </View>
          <View style={{width, borderRadius: 6, overflow: 'hidden'}}>
            <Image source={require('../img/2.jpg')} style={{width: '100%', height: '100%'}} resizeMode="cover"/>
          </View>
          <View style={{width, borderRadius: 6, overflow: 'hidden'}}>
            <Image source={require('../img/3.jpg')} style={{width: '100%', height: '100%'}} resizeMode="cover"/>
          </View>
        </ScrollView>
        <View style={styles.arrow}>
          <View style={[styles.posinter, {backgroundColor: index === 0 ? '#D84035' : 'white'}]}></View>
          <View style={[styles.posinter, {marginLeft: 6, backgroundColor: index === 1 ? '#D84035' : 'white'}]}></View>
          <View style={[styles.posinter, {marginLeft: 6, backgroundColor: index === 2 ? '#D84035' : 'white'}]}></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  arrow: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    left: -28
  },
  posinter: {
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: 'white'
  }
})