import React from 'react';
import { Text, View } from 'react-native';
// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation';
import FindPage from './Find'
import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: {
    screen: FindPage,
    navigationOptions: {
      title: '发现',
      tabBarIcon: ({ focused,tintColor }) => <Icon name="search" size={30} color={tintColor} />
    }
  },
  Video: {
    screen: HomeScreen,
    navigationOptions: {
      title: '视频',
      tabBarIcon: ({ focused,tintColor }) => <Icon name="play-circle-filled" size={30} color={tintColor} />
    }
  },
  Mine: {
    screen: HomeScreen,
    navigationOptions: {
      title: '我的',
      tabBarIcon: ({ focused,tintColor }) => <Icon name="queue-music" size={30} color={tintColor} />
    }
  },
  Friend: {
    screen: HomeScreen,
    navigationOptions: {
      title: '朋友',
      tabBarIcon: ({ focused,tintColor }) => <Icon name="group" size={30} color={tintColor} />
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: '账号',
      tabBarIcon: ({ focused,tintColor }) => <Icon name="person" size={30} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#D84035',
    inactiveTintColor: '#666'
  }
});