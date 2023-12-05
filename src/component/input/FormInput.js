import React, {useState} from 'react';
import {
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';

const {width, height} = Dimensions.get('window');

const FormInput = ({
  label,
  placeholderTextColor,
  onChangeText,
  value,
  keyboardType,
  editable,
  onBlur,
  multiline,
  onFocus,
  secureTextEntry,
  placeholder,
  textAlignVertical,
  numberOfLines,
  textinputStyle,
  labelStyle
}) => {
  return (
    <View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput
        value={value}
        multiline={multiline}
        onChangeText={onChangeText}
        onBlur={onBlur}
        textAlignVertical={textAlignVertical}
        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
        keyboardType={keyboardType}
        editable={editable}
        secureTextEntry={secureTextEntry}
        style={[styles.textinput, textinputStyle]}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    ...FONTS.fourHundred,
    fontSize: 13,
    color: COLORS.black,
  },
  textinput: {
    ...FONTS.fourHundred,
    fontSize: 14,
    marginBottom: height * 0.02,
    color: COLORS.black,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.gray50,
    height: height * 0.057,
    paddingLeft: width * 0.03,
    // paddingBottom:height*-.0001
  },
});
export default FormInput;
