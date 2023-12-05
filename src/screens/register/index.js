import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import styles from './styles';
import FormInput from './../../component/input/FormInput';
import InputField from './../../component/input/inputText';
import RoundButton from './../../component/button/roundButton';
import CheckBox from 'react-native-check-box';

const {width, height} = Dimensions.get('window');

const Qualification = [
  {
    id: 0,
    name: '10th',
  },
  {
    id: 1,
    name: '12th',
  },
  {
    id: 2,
    name: 'Graduation',
  },
  {
    id: 3,
    name: 'Master',
  },
];

const Language = [
  {
    id: 0,
    name: 'Hindi',
  },
  {
    id: 1,
    name: 'English',
  },
];

const Filter = ({name}) => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity style={styles.CheckRow}>
      <CheckBox
        isChecked={checked}
        checkBoxColor="#48A2F4"
        uncheckedCheckBoxColor={COLORS.gray70}
        onClick={() => setChecked(!checked)}
      />
      <Text style={styles.checkText}>{name}</Text>
    </TouchableOpacity>
  );
};

const Register = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: height * 0.02,
            width: width * 0.84,
            alignSelf: 'center',
          }}>
          <Text style={styles.mainHeading}>
            Fill out the form below to register now
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <FormInput
              label="First/प्रथम"
              textinputStyle={{width: width * 0.4}}
            />
            <FormInput
              label="Last/अंतिम"
              textinputStyle={{width: width * 0.4}}
            />
          </View>
          <FormInput label="Age/उम्र" />
          <FormInput label="Current Location/वर्तमान स्थान" />
          <View>
            <FormInput
              label="Preferred Location/पसंदीदा स्थान"
              placeholder="Location 1"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Location 2"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Location 3"
              textinputStyle={{marginBottom: height * 0.03}}
            />
          </View>
          <View>
            <Text style={styles.label}>Qualification/योग्यता</Text>

            <FlatList
              data={Qualification}
              renderItem={({item, index}) => <Filter name={item.name} />}
            />
          </View>
          <View>
            <FormInput
              label="Skills/कौशल"
              placeholder="Skill Type1"
              labelStyle={{marginTop: height * 0.02}}
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Skill Type2"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Skill Type3"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Skill Type4"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Skill Type5"
              textinputStyle={{marginBottom: height * 0.03}}
            />
          </View>

          <View>
            <FormInput
              label="Certificates/प्रमाणपत्र"
              placeholder="Certificate 1"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Certificate 2"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Certificate 3"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Certificate 4"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Certificate 5"
              textinputStyle={{marginBottom: height * 0.03}}
            />
          </View>
          <View>
            <FormInput
              label="Work Experience/कार्य अनुभव"
              placeholder="Experience 1"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Experience 2"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Experience 3"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Experience 4"
              textinputStyle={styles.CustomtextInputStyles}
            />
            <FormInput
              placeholder="Experience 5"
              textinputStyle={{marginBottom: height * 0.03}}
            />
          </View>
          <View>
            <Text style={styles.label}>Language Known/भाषा</Text>
            <FlatList
              data={Language}
              renderItem={({item, index}) => <Filter name={item.name} />}
            />
            <FormInput placeholder="Any other language" />
          </View>
          <FormInput
            label="Email/ईमेल"
            labelStyle={{marginTop: height * 0.01}}
          />
          <FormInput label="Contact Number/संपर्क नंबर " />
          <TouchableOpacity activeOpacity={0.5} style={styles.inputRow}>
            <TextInput
              placeholder="Interested In/इच्छुक काम"
              placeholderTextColor={COLORS.black}
              style={styles.textinput}
              editable={false}
            />
            <Image source={icons.arrow} style={styles.arrow} />
          </TouchableOpacity>
          <RoundButton children="Submit" buttonStyle={styles.btnStyle} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
