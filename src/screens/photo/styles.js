import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignSelf: 'center',
  },
  scrollBox: {
    width: width * 0.92,
    borderWidth: 1,
    borderColor: COLORS.gray10,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: width * 0.05,
    marginBottom: height * 0.01,
    alignSelf: 'center',
  },
  scrollImage: {
    width: width * 0.92,
    alignSelf: 'center',
    justifyContent: 'center',
    height: height * 0.2,
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 13,
    padding: width * 0.02,
  },
});
