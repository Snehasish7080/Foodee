import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnAuthenticatedRouteList} from './UnAuthenticatedNavigationTypes';
import LandingScreen from '../../screens/LandingScreen/LandingScreen';
import SignupScreen from '../../screens/SignupScreen/SignupScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import VerificationScreen from '../../screens/VerificationScreen/VerificationScreen';

const Stack = createNativeStackNavigator<UnAuthenticatedRouteList>();

const UnAuthenticatedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="LandingScreen">
      <Stack.Screen
        name="LandingScreen"
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthenticatedNavigation;
