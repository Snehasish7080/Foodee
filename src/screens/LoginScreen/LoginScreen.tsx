import {Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import {UnAuthenticatedNavProps} from '../../navigations/UnAuthenticatedNavigation/UnAuthenticatedNavigationTypes';
import {styles} from './LoginScreenStyles';
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
const LoginScreen: React.FC<UnAuthenticatedNavProps<'LoginScreen'>> = ({
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
          paddingVertical: verticalScale(20),
          paddingHorizontal: scale(33),
        }}>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>Foodee</AppText>
          <AppText style={styles.subTitle}>Create your food journey</AppText>
        </View>
        <AppText style={styles.heading}>Login</AppText>
        <View>
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
            name={'password'}
            control={control}
            lable="Password"
            labelStyle={{
              marginTop: verticalScale(20),
            }}
            placeholder="Enter your password"
          />
          <Pressable style={styles.forgetPassword}>
            <AppText style={styles.login}>Forget Password</AppText>
          </Pressable>
          <View style={styles.btnContainer}>
            <AppButton style={styles.btn}>Login</AppButton>
            <Animated.View style={styles.loginContainer}>
              <AppText style={styles.haveAccount}>
                Don't have an account?{' '}
              </AppText>
              <Pressable
                onPress={() => {
                  navigation.navigate('SignupScreen');
                }}>
                <AppText style={styles.login}>Sign up</AppText>
              </Pressable>
            </Animated.View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
