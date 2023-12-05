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
  texinputBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray80,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: height * 0.01,
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
  mainBoxStyle: {
    flexDirection: 'column',
    width: width * 0.57,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    margin: width * 0.02,
  },
  bannerimageStyle: {
    width: width * 0.53,
    height: height * 0.15,
    marginBottom: height * 0.01,
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.gray20,
    borderStyle: 'dashed',
    paddingBottom: height * 0.015,
    marginBottom: height * 0.01,
  },
  listItemBox: {
    backgroundColor:"#F5F5F5",
    borderWidth: 1,
    borderColor: COLORS.gray40,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.006,
    borderRadius: 20,
    margin: height * 0.005,
  },
  listItem: {
    fontSize: 13,
    ...FONTS.fourHundred,
    color: COLORS.black,
    marginBottom: -3,
  },
});
