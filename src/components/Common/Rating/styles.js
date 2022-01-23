import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    height: wp(3.5),
    width: wp(3.5),
    marginRight: wp(1),
  },
  unfilledStarIcon: {
    tintColor: colors.secondaryColor,
  },
});
