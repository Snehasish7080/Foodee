import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utils/theme/colors';

export const styles = ScaledSheet.create({
  mainContainer: {
    height: '50@vs',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white.main,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: '16@s',
    overflow: 'hidden',
    borderTopRightRadius: '16@s',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    height: '50@vs',
    backgroundColor: colors.white.main,
  },
  tab: {
    alignItems: 'center',
    height: 35,
    width: 35,
    justifyContent: 'center',
    borderRadius: 19,
  },
});
