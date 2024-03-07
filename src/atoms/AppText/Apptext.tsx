import {View, Text, TextProps} from 'react-native';
import React from 'react';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';

type ApptextProps = TextProps;
const Apptext = ({children, ...props}: ApptextProps) => {
  return (
    <Text
      style={[
        {
          fontFamily: fontFamily.poppinsRegular,
          fontSize: getFontSize(14),
        },
        props.style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default Apptext;
