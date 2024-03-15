import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigation from '../TabNavigation/TabNavigation';
import { AuthenticatedRouteList } from './AuthenticatedNavigationTypes';

const Stack = createNativeStackNavigator<AuthenticatedRouteList>();

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreenNavigation">
      <Stack.Screen
        name="HomeScreenNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigation;
