import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  innercontainer: {
    width: width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  border: {
    borderBottomWidth: 1,
    borderColor: COLORS.gray30,
    borderStyle: 'dashed',
    paddingBottom: height * 0.02,
  },
  mainBox: {
    width: width * 0.93,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  flexDirection: {
    flexDirection: 'row',
    marginTop: height * 0.01,
    alignItems: 'center',
  },
  heading: {
    color: COLORS.black,
    fontSize: 17,
    ...FONTS.fiveHundred,
    marginVertical: height * 0.01,
  },
  downloadBtn: {borderRadius: 6, width: width * 0.3, marginRight: width * 0.03},
  bannerimage: {
    width: width * 0.93,
    height: height * 0.23,
    resizeMode: 'stretch',
    borderRadius: 0,
    marginBottom: height * 0.01,
  },
  content: {
    color: COLORS.black,
    fontSize: 14,
    ...FONTS.fourHundred,
    marginLeft: width * 0.025,
    marginBottom: -2,
  },
  headinggray: {
    color: COLORS.gray70,
    fontSize: 14,
    ...FONTS.fourHundred,
  },
});
