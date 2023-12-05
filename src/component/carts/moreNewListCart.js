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

const MoreNewList = ({onPress, image, title, content}) => {
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

export default MoreNewList;

const styles = StyleSheet.create({
  mainBox: {
    width: width * 0.95,
    flexDirection: 'row',
    alignSelf: 'center',
    padding: width * 0.02,
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderColor: COLORS.gray30,
    borderStyle: 'dashed',
  },
  redHeading: {
    color: COLORS.primary,
    fontSize: 12,
    ...FONTS.fiveHundred,
    width: width * 0.5,
    marginLeft: width * 0.03,
    marginBottom: height * 0.006,
  },
  bannerimage: {
    width: width * 0.36,
    height: height * 0.12,
    resizeMode: 'stretch',
    borderRadius: 6,
  },
  content: {
    color: COLORS.black,
    fontSize: 13,
    ...FONTS.sixHundred,
    width: width * 0.5,
    marginLeft: width * 0.03,
    marginBottom: -3,
  },
});
