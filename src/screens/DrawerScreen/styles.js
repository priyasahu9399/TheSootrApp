import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    paddingBottom: height * 0.15,
  },
  imgbackground: {
    backgroundColor: COLORS.primary,
    height: height * 0.13,
    padding: width * 0.03,
  },
  logoimg: {
    width: width * 0.16,
    height: height * 0.07,
    resizeMode: 'contain',
  },
  rowField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width * 0.03,
  },
  drawertitle: {
    fontSize: 18,
    color: COLORS.white,
    ...FONTS.sixHundred,
    marginBottom: -5,
  },
  welcome: {
    fontSize: 12,
    color: COLORS.white,
    ...FONTS.sixHundred,
    marginBottom: -5,
  },
  rowbookmark: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.gray20,
  },
  touchbtn: {
    width: width * 0.4,
    height: height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookicon: {
    width: width * 0.05,
    height: height * 0.02,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  booktext: {
    ...FONTS.fiveHundred,
    fontSize: 13,
    color: COLORS.black,
    marginLeft: width * 0.01,
  },
  borderRight: {borderRightWidth: 1, borderColor: COLORS.gray30},
  listtext: {
    ...FONTS.fourHundred,
    fontSize: 13,
    color: COLORS.black,
    paddingHorizontal: width * 0.08,
    borderBottomWidth: 1,
    borderColor: COLORS.gray20,
    paddingVertical: height * 0.015,
  },
  heading: {
    ...FONTS.sixHundred,
    fontSize: 13,
    color: COLORS.black,
    paddingLeft: width * 0.08,
    paddingTop: height * 0.01,
  },
  logoimgChange: {
    width: width * 0.1,
    height: height * 0.05,
    resizeMode: 'contain',
    marginLeft: width * 0.02,
  },
  linkText: {
    ...FONTS.fourHundred,
    fontSize: 11,
    color: COLORS.black,
    borderRightWidth: 1,
    borderColor: COLORS.gray30,
    paddingHorizontal: width * 0.02,
    marginTop: height * 0.005,
  },

  linkRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginHorizontal: width * 0.04,
    width: width * 0.65,
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
});
