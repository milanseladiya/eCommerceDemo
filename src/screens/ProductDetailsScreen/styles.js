import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {fontSize, hp, wp} from '../../helper/constants';
import {fontFamily} from '../../helper/utils';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  contentContainer: {
    paddingHorizontal: wp(4.25),
  },
  productImage: {
    height: hp(45),
    width: wp(91.5),
    borderRadius: wp(2.5),
    marginTop: wp(4.25),
    alignSelf: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: hp(2.5),
  },
  namingContainer: {
    flex: 1,
  },
  mainText: {
    fontSize: fontSize(24),
    lineHeight: fontSize(30),
    fontFamily: fontFamily.bold,
    color: colors.textColor,
  },
  titleText: {
    fontSize: fontSize(11),
    lineHeight: fontSize(11),
    fontFamily: fontFamily.regular,
    color: colors.secondaryColor,
    marginBottom: hp(1),
  },
  descriptionText: {
    fontSize: fontSize(14),
    lineHeight: fontSize(21),
    letterSpacing: -0.15,
    fontFamily: fontFamily.regular,
    color: colors.textColor,
    marginTop: hp(2),
  },
  otherProductsContainer: {
    marginVertical: hp(4),
  },
  subTitleText: {
    fontSize: fontSize(18),
    lineHeight: fontSize(22),
    fontFamily: fontFamily.bold,
    color: colors.textColor,
  },
});
