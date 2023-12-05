import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.9,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
  },
  mainHeading: {
    ...FONTS.sixHundred,
    fontSize: 17,
    color: COLORS.black,

    borderBottomWidth: 1,
    borderColor: COLORS.gray20,
    marginBottom: height * 0.02,
  },
  label: {
    ...FONTS.fourHundred,
    fontSize: 13,
    color: COLORS.black,
    marginBottom: height * 0.01,
  },
  inputRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.gray60,
    backgroundColor: COLORS.white,
    marginBottom: height * 0.01,
    alignItems: 'center',
  },
  textinput: {
    ...FONTS.fourHundred,
    fontSize: 14,
    paddingBottom: -1,
    color: COLORS.black,
    width: width * 0.76,
  },
  arrow: {
    width: width * 0.04,
    height: height * 0.04,
    resizeMode: 'contain',
    marginBottom: -5,
    tintColor: COLORS.black,
  },
  btnStyle: {
    marginTop: height * 0.02,
    marginBottom: height * 0.03,
    alignSelf: 'center',
  },
  CustomtextInputStyles: {marginBottom: height * 0.008},
  CheckRow: {
    flexDirection: 'row',
    marginVertical: height * 0.01,
    alignItems: 'center',
  },
  checkText: {
    ...FONTS.fourHundred,
    fontSize: 13,
    color: COLORS.black,
    paddingLeft: width * 0.03,
  },
});
