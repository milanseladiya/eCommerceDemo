import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontSize, hp, wp} from '../../../helper/constants';
import {fontFamily} from '../../../helper/utils';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundColor,
    margin: wp(4.25),
    marginBottom: 0,
    borderRadius: wp(2),
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  titleText: {
    fontSize: fontSize(18),
    lineHeight: fontSize(22),
    fontFamily: fontFamily.medium,
    color: colors.textColor,
    textAlign: 'center',
    marginLeft: wp(6.5),
  },
  categoryImage: {
    height: hp(12.5),
    borderTopRightRadius: wp(2),
    borderBottomRightRadius: wp(2),
    width: wp(48),
  },
});
