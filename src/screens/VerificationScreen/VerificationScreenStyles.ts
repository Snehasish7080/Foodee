import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../utils/theme/colors';
import {fontFamily} from '../../utils/theme/fontFamily';
import {getFontSize} from '../../utils/theme/fontScale';

export const styles = ScaledSheet.create({
  mainContainer: {
    backgroundColor: colors.white.main,
    flex: 1,
    paddingVertical: '20@vs',
    paddingHorizontal: '24@s',
  },
  heading: {
    color: colors.grey.heading,
    fontSize: getFontSize(30),
    fontFamily: fontFamily.poppinsSemiBold,
    marginTop: '36@vs',
  },
  subHeading: {
    color: colors.grey.label,
    fontSize: getFontSize(14),
    marginBottom: '57@vs',
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
    alignItems: 'center',
    justifyContent: 'center',
  },

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
  header: {
    paddingVertical: '26@vs',
  },
});
