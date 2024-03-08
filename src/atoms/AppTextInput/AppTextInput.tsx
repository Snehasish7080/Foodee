import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {verticalScale} from 'react-native-size-matters';
import {Control, Controller} from 'react-hook-form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {getFontSize} from '../../utils/theme/fontScale';
import {colors} from '../../utils/theme/colors';
import AppText from '../AppText/AppText';

type AppTextInputProps = TextInputProps & {
  name: string;
  control: Control<any, any>;
  lable?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};
const AppTextInput: React.FC<AppTextInputProps> = ({
  lable,
  style,
  labelStyle,
  name,
  control,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <Fragment>
          <AppText
            style={[
              {
                fontSize: getFontSize(16),
                color: colors.grey.label,
                marginBottom: verticalScale(6),
                lineHeight: 18,
              },
              labelStyle,
            ]}>
            {lable}
          </AppText>
          <View
            style={[
              {
                borderWidth: 1,
                height: 65,
                borderColor: Boolean(error?.message)
                  ? colors.error.main
                  : isFocused
                  ? colors.primary.main
                  : colors.grey.textInputBorder,
                borderRadius: 10,
                paddingHorizontal: 20,
              },
              style,
            ]}>
            <TextInput
              style={{
                flex: 1,
                fontSize: getFontSize(17),
                color: colors.grey.textInputColor,
              }}
              placeholderTextColor={colors.grey.placeholder}
              {...props}
              onChangeText={onChange}
              onFocus={() => {
                setIsFocused(true);
              }}
              onBlur={() => {
                onBlur;
                setIsFocused(false);
              }}
              value={value}
            />
          </View>
          {Boolean(error?.message) && (
            <ErrorMessage
              style={{
                marginTop: verticalScale(5),
              }}>
              {error?.message}
            </ErrorMessage>
          )}
        </Fragment>
      )}
    />
  );
};

export default AppTextInput;
