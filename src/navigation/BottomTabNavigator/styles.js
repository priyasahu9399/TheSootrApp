import {Dimensions, StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from './../../constants/theme';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon_set: {
    width: width * 0.06,
    height: height * 0.03,
    resizeMode: 'contain',
    marginBottom: height * -0.01,
  },
  toggle: {
    width: width * 0.08,
    height: height * 0.026,
    resizeMode: 'stretch',
    marginHorizontal: width * 0.04,
    tintColor: COLORS.white,
  },
  plusbox: {
    marginRight: width * 0.035,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
  },
  plusminus: {
    width: width * 0.026,
    height: height * 0.012,
    resizeMode: 'stretch',
    tintColor: COLORS.white,
    margin: width * 0.01,
  },
  search: {
    width: width * 0.05,
    height: height * 0.023,
    resizeMode: 'stretch',
    tintColor: COLORS.white,
    marginRight: width * 0.05,
  },
  logo: {
    width: width * 0.12,
    height: height * 0.06,
    resizeMode: 'contain',
  },

  tablebal: {
    ...FONTS.fiveHundred,
    fontSize: 11,
    marginBottom: 3,
  },
  headerTitle: {
    ...FONTS.fiveHundred,
    color: COLORS.white,
    fontSize: 18,
  },
  pantaIcon: {
    width: width * 0.22,
    height: height * 0.06,
    resizeMode: 'stretch',
    marginTop: height * 0.02,
  },
  sutrbane: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 8,
    color: COLORS.white,
    ...FONTS.sevenHundred,
    fontSize: 13,
  },
});
