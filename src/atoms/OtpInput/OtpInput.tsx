import {Pressable, ScrollView, TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../../utils/theme/colors';
import {getFontSize} from '../../utils/theme/fontScale';
import {fontFamily} from '../../utils/theme/fontFamily';
import {ScaledSheet} from 'react-native-size-matters';

const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<TextInput[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (newOtp.length === 4) {
      if (Boolean(newOtp[3])) {
        inputRefs.current[index].blur();
        setFocusedIndex(null);
      }
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={[
            styles.box,
            {
              borderColor:
                focusedIndex === index
                  ? colors.primary.main
                  : colors.grey.textInputBorder,
              borderWidth: focusedIndex === index ? 1.5 : 1,
            },
          ]}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={value => handleOtpChange(value, index)}
          value={digit}
          ref={input => {
            if (input) {
              inputRefs.current[index] = input;
            }
          }}
          onFocus={() => {
            setFocusedIndex(index);
          }}
          onKeyPress={({nativeEvent}) => {
            if (
              nativeEvent.key === 'Backspace' &&
              !Boolean(digit) &&
              index > 0
            ) {
              inputRefs.current[index - 1].focus();
            }

            if (parseInt(nativeEvent.key) || parseInt(nativeEvent.key) === 0) {
              handleOtpChange(nativeEvent.key, index);
            }
          }}
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderWidth: 1,
    borderColor: colors.grey.textInputBorder,
    width: 65,
    height: 65,
    margin: 10,
    textAlign: 'center',
    fontSize: getFontSize(20),
    borderRadius: 10,
    fontFamily: fontFamily.poppinsSemiBold,
    color: colors.primary.main,
  },
});

export default OtpInput;
