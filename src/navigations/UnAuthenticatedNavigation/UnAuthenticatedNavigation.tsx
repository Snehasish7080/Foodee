import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnAuthenticatedRouteList} from './UnAuthenticatedNavigationTypes';
import LandingScreen from '../../screens/LandingScreen/LandingScreen';

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
    </Stack.Navigator>
  );
};

export default UnAuthenticatedNavigation;
