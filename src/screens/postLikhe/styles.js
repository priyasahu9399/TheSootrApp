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
    paddingBottom: height * 0.02,
  },

  texinput: {
    paddingHorizontal: width * 0.04,
    fontSize: 14,
    ...FONTS.fiveHundred,
    paddingVertical: height * 0.012,
    width: width * 0.82,
    color: COLORS.black,
    marginBottom: height * 0.01,
    width: width * 0.92,
    alignSelf: 'center',
    backgroundColor: COLORS.gray10,
    borderRadius: 6,
  },

  vigyapanlikhe: {
    fontSize: 15,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: height * 0.1,
    // marginBottom: height * 0.02,
  },
  photolagay: {
    fontSize: 13,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: height * 0.02,
  },
  aploadBox: {
    color: COLORS.black,
    width: width * 0.4,
    alignSelf: 'center',
    backgroundColor: COLORS.gray10,
    borderRadius: 6,
  },
  apload: {
    paddingHorizontal: width * 0.04,
    fontSize: 14,
    ...FONTS.fiveHundred,
    paddingVertical: height * 0.01,
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: -3,
  },
  namuna: {
    fontSize: 13,
    ...FONTS.sixHundred,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: height * 0.03,
  },
  namunaEX: {
    fontSize: 11,
    ...FONTS.fiveHundred,
    color: COLORS.gray70,
    textAlign: 'center',
    alignSelf: 'center',
  },
  imgUrl: {
    ...FONTS.fourHundred,
    fontSize: 11,
    color: COLORS.gray60,
    width: width * 0.8,
    alignSelf: 'center',
  },
});
