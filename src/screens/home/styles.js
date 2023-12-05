import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignSelf: 'center',
  },
  marginTop: {marginTop: height * 0.027},
  flexWraplist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width * 0.94,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  whatsappBox: {
    position: 'absolute',
    zIndex: 1,
    right: 25,
    bottom: 30,
    backgroundColor: '#14b514',
    width: width * 0.15,
    height: height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  whatsapp: {
    width: width * 0.1,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  orDeke: {
    // backgroundColor: COLORS.black,
    alignSelf: 'center',
  },
  scrollHeadBox: {
    backgroundColor: COLORS.primary,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  breaking: {
    color: COLORS.white,
    fontSize: 14,
    ...FONTS.fiveHundred,
    padding: width * 0.02,
  },
  rowScroll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollTitle: {
    color: COLORS.white,
    fontSize: 13,
    marginRight: width * 0.03,
    ...FONTS.fourHundred,
    padding: width * 0.028,

    //  marginBottom: height * -0.02,
  },
});
