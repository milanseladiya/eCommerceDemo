import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontSize, hp, wp} from '../../../helper/constants';
import {fontFamily} from '../../../helper/utils';

export const style = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    marginHorizontal: wp(2.15),
    marginTop: wp(4.25),
    marginBottom: wp(2.5),
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  brandText: {
    fontSize: fontSize(11),
    lineHeight: fontSize(11),
    fontFamily: fontFamily.regular,
    color: colors.secondaryColor,
    marginTop: hp(0.75),
  },
  titleText: {
    fontSize: fontSize(16),
    lineHeight: fontSize(16),
    fontFamily: fontFamily.medium,
    color: colors.textColor,
    marginTop: hp(0.6),
  },
  priceText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(20),
    fontFamily: fontFamily.regular,
    color: colors.textColor,
    marginTop: hp(0.3),
  },
  productImage: {
    height: hp(22.5),
    width: wp(43.5),
    borderRadius: wp(2),
    marginBottom: hp(0.75),
  },
});
