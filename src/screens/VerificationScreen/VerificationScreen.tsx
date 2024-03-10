import {Pressable, View} from 'react-native';
import React from 'react';
import {UnAuthenticatedNavProps} from '../../navigations/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {styles} from './VerificationScreenStyles';
import AppText from '../../atoms/AppText/AppText';
import OtpInput from '../../atoms/OtpInput/OtpInput';

const VerificationScreen: React.FC<
  UnAuthenticatedNavProps<'VerificationScreen'>
> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <AppText style={styles.heading}>Verification Code</AppText>
      <AppText style={styles.subHeading}>
        Please type the verification code sent to prelookstudio@gmail.com
      </AppText>

      <OtpInput />
      <View style={styles.loginContainer}>
        <AppText style={styles.haveAccount}>I don't receive a code! </AppText>
        <Pressable>
          <AppText style={styles.login}>Please resend</AppText>
        </Pressable>
      </View>
    </View>
  );
};

export default VerificationScreen;
