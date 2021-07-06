import React from 'react';

import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';

import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingScreen';
import MyComplaintsScreen from '../screens/MyComplaintsScreen';

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppTabNavigator,
    navigationOptions: {
      drawerIcon: <Icon name="home" type="fontawesome5" />
    }
  },
  MyComplaints: {
    screen: MyComplaintsScreen,
    navigationOptions: {
      drawerIcon: <Icon name="gift" type="font-awesome" />,
      drawerLabel: "My Complaints"
    }
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      drawerIcon: <Icon name="bell" type="font-awesome" />,
      drawerLabel: "Notifications"
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      drawerIcon: <Icon name="settings" type="fontawesome5" />,
      drawerLabel: "Settings"
    }
  }
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  });