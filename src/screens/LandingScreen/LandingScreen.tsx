import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {styles} from './LandingScreenStyles';
import AppButton from '../../atoms/AppButton/AppButton';
import {UnAuthenticatedNavProps} from '../../navigations/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import AppText from '../../atoms/AppText/AppText';
import Animated from 'react-native-reanimated';

const LandingScreen: React.FC<UnAuthenticatedNavProps<'LandingScreen'>> = ({
  navigation,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/images/landingImage.png')}
        style={styles.landingImage}
      />
      <View style={styles.contentContainer}>
        <AppText style={styles.heading}>Welcome to</AppText>
        <AppText style={styles.name}>Foodee</AppText>
        <AppText style={styles.subHeading}>Create your food journey</AppText>
        <View style={styles.btnContainer}>
          <AppButton
            onPress={() => {
              navigation.navigate('SignupScreen');
            }}>
            Create Account
          </AppButton>
          <Animated.View style={styles.infoContainer}>
            <AppText style={styles.info}>Already have an account? </AppText>
            <Pressable
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}>
              <AppText style={styles.actionInfo}>Login</AppText>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
