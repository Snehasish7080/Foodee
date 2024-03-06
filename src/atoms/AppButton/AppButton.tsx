import {
  PressableProps,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import Apptext from '../AppText/Apptext';
import {scale} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';

type AppButtonProps = PressableProps & {
  children: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
const AppButton = ({children, style, textStyle, ...props}: AppButtonProps) => {
  return (
    <Pressable
      style={[
        {
          width: scale(248),
          height: 60,
          borderRadius: 28.5,
          backgroundColor: colors.primary.main,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: 'rgba(122, 129, 190, 0.6)',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 1,
          shadowRadius: 40,
          elevation: 20,
        },
        style,
      ]}
      {...props}>
      <Apptext
        style={[
          {
            color: colors.white.main,
            fontSize: getFontSize(15),
            fontFamily: fontFamily.poppinsSemiBold,
          },
          textStyle,
        ]}>
        {children}
      </Apptext>
    </Pressable>
  );
};

export default AppButton;
