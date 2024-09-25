import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from 'iconsax-react-native';
import React from 'react';
import HomeScreen from '../Screens/home/HomeScreen';
import {Colors} from '../styles/Colors';
import {AppNavigationParams} from '../types/commonNavigationParams';

const Tab = createBottomTabNavigator<AppNavigationParams>();

const tabBarOptions = {
  tabBarActiveTintColor: Colors.PRIMARY_BLACK,
  tabBarInactiveTintColor: Colors.GRAY_500,
  tabBarShowLabel: true,
  tabBarStyle: {
    backgroundColor: Colors.PRIMARY_WHITE,
    borderTopWidth: 0.5,
    elevation: 0,
    shadowOpacity: 0,
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold' as 'bold',
  },
  headerShown: false,
  tabBarHideOnKeyboard: true,
  //StatusBar color
  tabBarStatusBar: 'dark-content',
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions} initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Home size={size} color={color} variant="Outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
