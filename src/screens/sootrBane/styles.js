import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    color: COLORS.white,
    alignSelf: 'center',
    width: width * 0.9,
  },
  mainHeading: {
    color: COLORS.black,
    fontSize: 15,
    ...FONTS.sixHundred,
    marginVertical: height * 0.01,
    padding:width*.02,
    backgroundColor: COLORS.gray10,
    textAlign: 'center',
  },
  heading: {
    color: COLORS.black,
    fontSize: 16,
    ...FONTS.fiveHundred,
    marginTop: height * 0.018,
    marginLeft: width * 0.02,
  },
  uploadMainBox: {
    backgroundColor: COLORS.gray10,
    padding: width * 0.03,
  },
  uploadBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#129de3',
    height: height * 0.052,
    borderRadius: 8,
  },
  plusimg: {
    width: width * 0.03,
    resizeMode: 'contain',
    tintColor: COLORS.white,
    padding: 8,
    marginLeft: width * 0.06,
  },
  choose: {
    ...FONTS.sixHundred,
    fontSize: 15,
    color: COLORS.white,
    marginBottom: -2,
    marginLeft: width * 0.23,
  },
  imgUrl: {
    ...FONTS.fourHundred,
    fontSize: 12,
    color: COLORS.black,
    marginTop: height * 0.015,
    width: width * 0.82,
  },
});
