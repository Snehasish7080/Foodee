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
  btnContainer: {
    alignItems: 'center',
    marginTop: '33@vs',
  },
  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clickable: {
    color: colors.primary.main,
    fontSize: getFontSize(14),
    fontFamily: fontFamily.poppinsMedium,
  },
  info: {
    fontSize: getFontSize(14),
    color: colors.grey.info,
  },
  btn: {
    marginBottom: '24@vs',
  },
  haveAccount: {
    fontSize: getFontSize(14),
    color: colors.grey.info,
    fontFamily: fontFamily.poppinsMedium,
  },
  login: {
    fontSize: getFontSize(14),
    color: colors.primary.main,
    fontFamily: fontFamily.poppinsMedium,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: '12@vs',
  },
});
