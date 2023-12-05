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
  question: {
    fontSize: 14,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginBottom: height * 0.01,
  },
  listItemBox: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    padding: width * 0.03,
    width: width * 0.9,
    borderRadius: 8,
    marginVertical: height * 0.01,
    alignSelf: 'center',
  },

  radio_BtnBox: {
    backgroundColor: COLORS.white,
    width: width * 0.05,
    height: width * 0.05,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray30,
  },
  radio_Btn: {
    backgroundColor: COLORS.primary,
    width: width * 0.03,
    height: width * 0.03,
    borderRadius: 30,
  },
  radio_text: {
    fontSize: 12,
    ...FONTS.fourHundred,
    color: COLORS.black,
    marginBottom: -4,
    marginLeft: width * 0.02,
  },
});
