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
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  logo: {
    width: width * 0.12,
    height: height * 0.06,
    resizeMode: 'contain',
  },
  mainHeading: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 17,
    marginTop: height * 0.015,
  },
  dateTime: {
    ...FONTS.fiveHundred,
    color: COLORS.gray50,
    fontSize: 12,
  },
  logotitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 12,
    marginBottom: -4,
    marginLeft: width * 0.02,
  },
  applinkBox: {
    marginRight: width * 0.015,
    borderWidth: 1,
    borderRadius: 40,
    width: width * 0.085,
    height: height * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray30,
    borderStyle: 'dashed',
    paddingVertical: height * 0.015,
    marginVertical: height * 0.01,
  },
  listItemBox: {
    backgroundColor: '#F5F5F5',
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
  banner: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'stretch',
  },
});
