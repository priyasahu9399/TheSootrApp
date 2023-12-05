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

const NewUpdateFourImage = ({onPress, image, navigation}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <Image source={image} style={styles.bannerimage} />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  bannerimage: {
    width: width * 0.43,
    height: height * 0.13,
    resizeMode: 'stretch',
    borderRadius: 8,
    margin: width * 0.015,
  },
});

export default NewUpdateFourImage;
