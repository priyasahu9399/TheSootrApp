import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  innercontain: {
    alignItems: 'center',
    height: height * 0.07,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.black,
  },
  scrollText: {
    ...FONTS.sixHundred,
    fontSize: 14,
    marginHorizontal: width * 0.025,
    borderBottomWidth: 3,
  },
});
