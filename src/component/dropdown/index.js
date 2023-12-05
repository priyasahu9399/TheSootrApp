// import React, {useState} from 'react';
// import {StyleSheet, View, Dimensions, Text} from 'react-native';
// import {Dropdown} from 'react-native-element-dropdown';
// import {COLORS, FONTS} from './../../constants/theme';

// const {width, height} = Dimensions.get('window');

// const data = [
//   {value: '1', label: '2022'},
//   {value: '2', label: '2023'},
//   {value: '3', label: '2024'},
//   {value: '4', label: '2025'},
//   {value: '5', label: '2026'},
//   {value: '6', label: '2027'},
//   {value: '7', label: '2028'},
// ];

// const DropdownYear = () => {
//   const [value, setValue] = useState(null);

//   return (
//     <View>
//       <Dropdown
//         style={styles.dropdown}
//         containerStyle={styles.containerStyle}
//         placeholderStyle={styles.placeholderStyle}
//         iconStyle={styles.iconStyle}
//         itemTextStyle={styles.itemTextStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         data={data}
//         showsVerticalScrollIndicator={false}
//         maxHeight={180}
//         labelField="label"
//         valueField="value"
//         placeholder="year"
//         onChange={item => {
//           setValue(item.value);
//         }}
//       />
//     </View>
//   );
// };

// export default DropdownYear;

// const styles = StyleSheet.create({
//   dropdown: {
//     height: height * 0.06,
//     width: width * 0.35,
//     backgroundColor: COLORS.primary,
//     borderRadius: 10,
//     padding: width * 0.04,
//   },
//   selectedTextStyle: {
//     color: COLORS.white,
//     fontSize: 11,
//     ...FONTS.fiveHundred,
//   },
//   iconStyle: {
//     tintColor: COLORS.white,
//   },
//   containerStyle: {
//     marginTop: height * -0.03,
//     borderRadius: 10,
//   },
//   itemTextStyle: {
//     color: COLORS.black,
//     fontSize: 11,
//     ...FONTS.sixHundred,
//     margin: height * -0.01,
//   },

//   placeholderStyle: {
//     fontSize: 12,
//     color: COLORS.white,
//     ...FONTS.sixHundred,
//   },
// });
