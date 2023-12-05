import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  // backicon: {
  //   width: width * 0.08,
  //   height: height * 0.02,
  //   tintColor: COLORS.white,
  //   marginLeft: width * 0.03,
  //   padding: width * 0.01,
  // },
  search: {
    width: width * 0.05,
    height: height * 0.025,
    resizeMode: 'stretch',
    tintColor: COLORS.white,
    marginRight: width * 0.07,
  },
  headerTitle: {
    ...FONTS.fiveHundred,
    color: COLORS.white,
    fontSize: 18,
  },

  logo: {
    width: width * 0.12,
    height: height * 0.06,
    resizeMode: 'contain',
  },
});
