import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {HelperText, TextInput} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const InputField = ({
  label,
  // placeholderTextColor,
  onChangeText,
  value,
  keyboardType,
  editable,
  onBlur,
  onFocus,
  secureTextEntry,
  placeholder,
  textinputStyle,
}) => {
  // const [errors, setErrors] = useState(false);

  return (
    <View>
      <TextInput
        label={label}
        value={value}
        // error={error && errors}
        textColor={COLORS.black}
        underlineColor={COLORS.gray40}
        activeUnderlineColor="#48A2F4"
        activeColor="#48A2F4"
        cursorColor="#48A2F4"
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        onFocus={onFocus}
        keyboardType={keyboardType}
        editable={editable}
        secureTextEntry={secureTextEntry}
        style={[styles.textinput, textinputStyle]}
      />
      {/* <HelperText type="error" visible={isSubmit}></HelperText> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    ...FONTS.sevenHundred,
    fontSize: 14,
    marginBottom: height * 0.01,
    color: COLORS.black,
    backgroundColor: COLORS.white,
  },
});
export default InputField;
