import {Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import {UnAuthenticatedNavProps} from '../../navigations/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {styles} from './SignupScreenStyles';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AppTextInput from '../../atoms/AppTextInput/AppTextInput';
import {scale, verticalScale} from 'react-native-size-matters';
import AppButton from '../../atoms/AppButton/AppButton';
import AppText from '../../atoms/AppText/AppText';
import Animated from 'react-native-reanimated';

type signUpData = {
  fullName: string;
  email: string;
  userName: string;
  password: string;
};
const schema = yup
  .object({
    email: yup.string().email('invalid email').required('required'),
    fullName: yup.string().required('required'),
    userName: yup.string().required('required'),
    password: yup.string().required('required'),
  })
  .required();
const SignupScreen: React.FC<UnAuthenticatedNavProps<'SignupScreen'>> = ({
  navigation,
}) => {
  const {control, handleSubmit, setValue} = useForm<signUpData>({
    defaultValues: {
      fullName: '',
      email: '',
      userName: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: signUpData) => {
    console.log(data);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: scale(33),
          paddingVertical: verticalScale(20),
        }}>
        <AppText style={styles.heading}>Sign Up</AppText>
        <View>
          <AppTextInput
            name={'fullName'}
            control={control}
            lable="Full name"
            labelStyle={{
              marginTop: verticalScale(15),
            }}
            placeholder="Enter your name"
          />
          <AppTextInput
            name={'email'}
            control={control}
            lable="Email"
            labelStyle={{
              marginTop: verticalScale(20),
            }}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <AppTextInput
            name={'userName'}
            control={control}
            lable="Username"
            labelStyle={{
              marginTop: verticalScale(20),
            }}
            placeholder="Enter your username"
          />
          <AppTextInput
            name={'password'}
            control={control}
            lable="Password"
            labelStyle={{
              marginTop: verticalScale(20),
            }}
            placeholder="Enter your password"
          />
          <View style={styles.btnContainer}>
            <AppButton
              style={styles.btn}
              onPress={() => {
                navigation.navigate('VerificationScreen');
              }}>
              Continue
            </AppButton>
            <AppText style={styles.info}>
              by clicking continue, you agree to our
            </AppText>
            <View style={styles.privacyContainer}>
              <AppText style={styles.clickable}>Privacy Policy</AppText>
              <AppText style={styles.info}> and </AppText>
              <AppText style={styles.clickable}>Term and Conditions</AppText>
            </View>
            <Animated.View style={styles.loginContainer}>
              <AppText style={styles.haveAccount}>
                Already have an account?{' '}
              </AppText>
              <Pressable
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}>
                <AppText style={styles.login}>Login</AppText>
              </Pressable>
            </Animated.View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;
