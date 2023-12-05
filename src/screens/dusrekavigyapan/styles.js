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
  texinputBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray60,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: height * 0.03,
    width: width * 0.92,
    alignSelf: 'center',
  },
  texinput: {
    paddingHorizontal: width * 0.04,
    fontSize: 14,
    ...FONTS.fiveHundred,
    paddingVertical: height * 0.01,
    width: width * 0.82,
    color: COLORS.black,
  },
  texinputIcon: {
    width: width * 0.05,
    height: height * 0.025,
    resizeMode: 'contain',
    tintColor: COLORS.gray70,
  },
  box: {
    borderWidth: 1,
    flexDirection: 'row',
    paddingVertical: height * 0.01,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray20,
    width: width * 0.92,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: height * 0.01,
  },
  boximg: {
    width: width * 0.3,
    height: height * 0.1,
    resizeMode: 'contain',
    marginHorizontal: width * 0.02,
  },
  row: {
    flexDirection: 'row',
  },
  redBox: {
    backgroundColor: COLORS.primary,
    height: height * 0.03,
    borderTopLeftRadius: 20,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    bottom:1
  },
  redBoxtext: {
    fontSize: 11,
    paddingRight: width * 0.03,
    paddingLeft: width * 0.06,
    ...FONTS.fiveHundred,
    color: COLORS.white,
    // marginTop: 1,
  },
  rupee: {
    color: COLORS.primary,
    fontSize: 13,
    ...FONTS.sixHundred,
    marginBottom: -3,
  },
  title: {
    color: COLORS.black,
    fontSize: 13,
    ...FONTS.sevenHundred,
    marginBottom: -3,
    height: height * 0.051,
  },
  subtitle: {
    color: COLORS.black,
    fontSize: 12,
    ...FONTS.fourHundred,
    marginBottom: -3,
    height: height * 0.062,
  },
});
