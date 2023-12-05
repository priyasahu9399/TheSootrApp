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

const JobListCart = ({
  onPress,
  image,
  title,
  qualification,
  salary,
  jobtype,
  mainBoxStyle,
  rowmarginStyle,
  contentStyle,
  bannerimageStyle,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.mainBox, mainBoxStyle]}>
      <Image source={image} style={[styles.bannerimage, bannerimageStyle]} />
      <View>
        <Text numberOfLines={1} style={styles.redHeading}>
          {title}
        </Text>
        <View style={[styles.rowmargin, rowmarginStyle]}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headinggray}>Qualification:</Text>
            <Text numberOfLines={1} style={[styles.content, contentStyle]}>
              {qualification}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headinggray}>Job Type:</Text>
            <Text style={[styles.content, contentStyle]}>Private</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.headinggray}>Salary:</Text>
            <Text style={[styles.content, contentStyle]}>{salary}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobListCart;

const styles = StyleSheet.create({
  mainBox: {
    width: width * 0.95,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.015,
    borderBottomWidth: 1,
    borderColor: COLORS.gray30,
    borderStyle: 'dashed',
    backgroundColor: COLORS.white,
  },
  redHeading: {
    color: COLORS.primary,
    fontSize: 13,
    ...FONTS.fiveHundred,
    width: width * 0.5,
    marginLeft: width * 0.02,
    marginBottom: height * 0.004,
  },
  bannerimage: {
    width: width * 0.32,
    height: height * 0.11,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  content: {
    color: COLORS.black,
    fontSize: 12,
    ...FONTS.sixHundred,
    width: width * 0.4,
    marginLeft: width * 0.01,
    marginBottom: -3,
  },
  headinggray: {
    color: COLORS.gray70,
    fontSize: 12,
    ...FONTS.fiveHundred,
    marginBottom: -3,
  },
  rowmargin: {marginLeft: width * 0.02},
});
