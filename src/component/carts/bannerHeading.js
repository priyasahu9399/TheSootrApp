import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';

const {width, height} = Dimensions.get('window');

const BannerHeading = ({navigation, onPress, image , title}) => {
  return (
    <View>
      <Text numberOfLines={3} style={styles.heading}>
        {title}
      </Text>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Image source={image} style={styles.banner} />
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  heading: {
    width: width * 0.94,
    alignSelf: 'center',
    color: COLORS.black,
    fontSize: 13,
    ...FONTS.fiveHundred,
  },
  banner: {
    width: width * 0.94,
    height: height * 0.28,
    alignSelf: 'center',
    resizeMode: 'stretch',
    backgroundColor: COLORS.white,
  },
});

export default BannerHeading;
