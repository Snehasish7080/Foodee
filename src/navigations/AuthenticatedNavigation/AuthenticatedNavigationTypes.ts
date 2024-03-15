import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthenticatedRouteList = {
  HomeScreenNavigation: undefined;
};
export type AuthenticatedNavigationProp<
  T extends keyof AuthenticatedRouteList,
> = NativeStackScreenProps<AuthenticatedRouteList, T>;

export type AuthenticatedNavProps<T extends keyof AuthenticatedRouteList> =
  NativeStackScreenProps<AuthenticatedRouteList, T>;
