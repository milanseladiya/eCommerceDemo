import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontSize, hp, wp} from '../../../helper/constants';
import {fontFamily} from '../../../helper/utils';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(1.5),
    backgroundColor: colors.backgroundColor,
    shadowColor: colors.shadowColor,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
    elevation: 5,
  },
  backIconContainer: {
    padding: wp(4),
    position: 'absolute',
    left: 0,
  },
  backIcon: {
    height: wp(5),
    width: wp(5),
  },
  titleText: {
    fontSize: fontSize(18),
    lineHeight: fontSize(22),
    fontFamily: fontFamily.bold,
    color: colors.textColor,
  },
});
