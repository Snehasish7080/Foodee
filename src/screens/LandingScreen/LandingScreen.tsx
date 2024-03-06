import {Image, View} from 'react-native';
import React from 'react';
import Apptext from '../../atoms/AppText/Apptext';
import {styles} from './LandingScreenStyles';
import AppButton from '../../atoms/AppButton/AppButton';

const LandingScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/images/landingImage.png')}
        style={styles.landingImage}
      />
      <View style={styles.contentContainer}>
        <Apptext style={styles.heading}>Welcome to</Apptext>
        <Apptext style={styles.name}>Foodee</Apptext>
        <Apptext style={styles.subHeading}>Create your food journey</Apptext>
        <View style={styles.btnContainer}>
          <AppButton>Create Account</AppButton>
          <View style={styles.infoContainer}>
            <Apptext style={styles.info}>Already have an account? </Apptext>
            <Apptext style={styles.actionInfo}>Login</Apptext>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
