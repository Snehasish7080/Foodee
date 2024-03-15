import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TabNavigationRouteList } from './TabNavigationTypes';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ExploreScreen from '../../screens/ExploreScreen/ExploreScreen';
import NotificationScreen from '../../screens/NotificationScreen/NotificationScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import AppBottomTabBar from '../../molecules/AppBottomTabBar/AppBottomTabBar';
import HomeIcon from '../../atoms/HomeIcon/HomeIcon';
import ExploreIcon from '../../atoms/ExploreIcon/ExploreIcon';
import NotificationIcon from '../../atoms/NotificationIcon/NotificationIcon';
import ProfileIcon from '../../atoms/ProfileIcon/ProfileIcon';

const Tab = createBottomTabNavigator<TabNavigationRouteList>();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => {
        return <AppBottomTabBar {...props} />;
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <HomeIcon isFocused={focused} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <ExploreIcon isFocused={focused} />;
          },
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return <NotificationIcon isFocused={focused} />;
          },
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ focused }) => {
            return <ProfileIcon isFocused={focused} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
