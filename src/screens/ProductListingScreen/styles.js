import {StyleSheet} from 'react-native';

import {colors} from '../../helper/colors';
import {wp} from '../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  listContainer: {
    paddingHorizontal: wp(2.15),
  },
});
