import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  maincontainer: {
    backgroundColor: COLORS.white,
    // alignSelf: 'center',
    flex: 1,
  },
  // innercontainer: {
  //   backgroundColor: COLORS.white,
  //   alignSelf: 'center',
  //   width: width * 0.94,
  // },

  // bannerimage: {
  //   width: width * 0.4,
  //   height: height * 0.12,
  //   resizeMode: 'stretch',
  //   borderRadius: 10,
  //   margin:width * 0.02
  // },
  flexWraplist: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width * 0.94,
    alignSelf: 'center',
    justifyContent: 'center',
  },

});
