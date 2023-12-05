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

const SambandhiKhabarNewsDetail = ({onPress, image, title, content}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.mainBox}>
      <Image source={image} style={styles.bannerimage} />
      <View>
        <Text numberOfLines={2} style={styles.redHeading}>
          {title}
        </Text>
        <Text numberOfLines={3} style={styles.content}>
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SambandhiKhabarNewsDetail;

const styles = StyleSheet.create({
  mainBox: {
    width: width * 0.4,
    marginRight: width * 0.02,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    borderWidth: 1,
    elevation: 1,
    borderRadius: 8,
    borderColor: COLORS.gray20,
    marginBottom: height * 0.025,
    backgroundColor: COLORS.white,
  },
  redHeading: {
    color: COLORS.primary,
    fontSize: 10,
    ...FONTS.fiveHundred,
  },
  bannerimage: {
    width: width * 0.36,
    height: height * 0.13,
    resizeMode: 'stretch',
    borderRadius: 6,
  },
  content: {
    color: COLORS.black,
    fontSize: 11,
    ...FONTS.sixHundred,
  },
});
