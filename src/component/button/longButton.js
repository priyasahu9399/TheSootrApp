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

const LongButton = ({children, onPress, buttonStyle, buttonText}) => {
  return (
    <View style={[styles.flexrow, buttonStyle]}>
      <View style={styles.leftborder}></View>
      <View>
        <Text style={[styles.btnheading, buttonText]}>{children}</Text>
      </View>
    </View>
  );
};

export default LongButton;

const styles = StyleSheet.create({
  flexrow: {
    flexDirection: 'row',
    padding: width * 0.03,
    alignItems: 'center',
    width: width * 0.95,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    marginVertical: height * 0.01,
  },
  leftborder: {
    borderWidth: 3,
    borderColor: '#ff9800',
    height: height * 0.03,
    marginRight: width * 0.02,
  },
  btnheading: {
    ...FONTS.sixHundred,
    color: COLORS.white,
    fontSize: 14,
    marginBottom: -3,
  },
});
