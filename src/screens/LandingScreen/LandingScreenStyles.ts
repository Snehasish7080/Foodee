import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
  },
  landingImage: {
    width: '350@s',
    height: '330@vs',
    resizeMode: 'contain',
  },
  contentContainer: {
    paddingHorizontal: '27@s',
    flex: 1,
    paddingTop: '10@vs',
  },
  heading: {
    fontFamily: fontFamily.poppinsSemiBold,
    fontSize: getFontSize(40),
    lineHeight: 51.2,
  },
  name: {
    fontFamily: fontFamily.poppinsSemiBold,
    fontSize: getFontSize(40),
    color: colors.primary.main,
    lineHeight: 51.2,
  },
  subHeading: {
    color: colors.grey.subHeading,
    fontSize: getFontSize(18),
    marginTop: '20@vs',
    lineHeight: 27,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: '36@vs',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '27@vs',
  },
  info: {
    color: colors.grey.info,
    fontSize: getFontSize(14),
    fontFamily: fontFamily.poppinsMedium,
  },
  actionInfo: {
    color: colors.primary.main,
    fontSize: getFontSize(14),
    fontFamily: fontFamily.poppinsMedium,
  },
});
