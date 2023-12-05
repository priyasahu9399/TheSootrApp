import React from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';

const {width, height} = Dimensions.get('window');

const RoundButton = ({children, onPress, buttonStyle, buttonText}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.btnbox, buttonStyle]}>
      <Text style={[styles.btnheading, buttonText]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  btnbox: {
    alignItems: 'center',
    width: width * 0.3,
    height: height * 0.048,
    backgroundColor: COLORS.primary,
    marginTop: height * 0.01,
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnheading: {
    ...FONTS.fiveHundred,
    color: COLORS.white,
    fontSize: 13,
    marginBottom: -3,
  },
});
