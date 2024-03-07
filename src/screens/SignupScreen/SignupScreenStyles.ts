import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
    paddingVertical: '20@vs',
    paddingHorizontal: '33@s',
  },
  heading: {
    color: colors.grey.heading,
    fontSize: getFontSize(36),
    fontFamily: fontFamily.poppinsSemiBold,
  },
});
