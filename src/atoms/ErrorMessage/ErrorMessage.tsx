import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import Apptext from '../AppText/Apptext';

type ErrorMessageProps = {
  children?: string;
  style?: StyleProp<TextStyle>;
};
const ErrorMessage: React.FC<ErrorMessageProps> = ({style, children}) => {
  return (
    <Apptext
      style={[
        {
          color: colors.error.main,
          fontSize: getFontSize(12),
        },
        style,
      ]}>
      {children}
    </Apptext>
  );
};

export default ErrorMessage;
