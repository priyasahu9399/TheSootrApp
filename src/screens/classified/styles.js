import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    backgroundColor: COLORS.white,
    width: width * 0.92,
    alignSelf: 'center',
  },
  btnStyle: {
    width: width * 0.92,
    height: height * 0.06,
    borderRadius: 0,
    marginTop: height * 0.02,
  },
});
