import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontSize, hp, wp} from '../../../helper/constants';
import {fontFamily} from '../../../helper/utils';

export const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    margin: wp(4.25),
    marginBottom: wp(2),
    paddingVertical: hp(3),
    borderRadius: wp(2),
  },
  titleText: {
    fontSize: fontSize(24),
    lineHeight: fontSize(30),
    fontFamily: fontFamily.bold,
    color: colors.backgroundColor,
    textAlign: 'center',
  },
  infoText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontFamily: fontFamily.regular,
    color: colors.backgroundColor,
    textAlign: 'center',
  },
});
