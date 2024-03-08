import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import AppText from '../AppText/AppText';

type ErrorMessageProps = {
  children?: string;
  style?: StyleProp<TextStyle>;
};
const ErrorMessage: React.FC<ErrorMessageProps> = ({style, children}) => {
  return (
    <AppText
      style={[
        {
          color: colors.error.main,
          fontSize: getFontSize(12),
        },
        style,
      ]}>
      {children}
    </AppText>
  );
};

export default ErrorMessage;
