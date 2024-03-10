import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type UnAuthenticatedRouteList = {
  LandingScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  VerificationScreen: undefined;
};

export type UnAuthenticatedNavigationProp<
  T extends keyof UnAuthenticatedRouteList,
> = NativeStackScreenProps<UnAuthenticatedRouteList, T>;

export type UnAuthenticatedNavProps<T extends keyof UnAuthenticatedRouteList> =
  NativeStackScreenProps<UnAuthenticatedRouteList, T>;
