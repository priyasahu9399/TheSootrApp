import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  marginTop: {marginTop: height * 0.02},
  innercontainer: {
    backgroundColor: COLORS.white,
    width: width * 0.94,
    alignSelf: 'center',
  },
  textInput: {
    color: COLORS.white,
    fontSize: 19,
    ...FONTS.fiveHundred,
    borderBottomWidth: 1.5,
    borderColor: COLORS.white,
    width: width * 0.62,
    paddingBottom: -3,
  },
});
