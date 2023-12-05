import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import styles from './styles';
import {data} from '../../constants';
import MoreNewList from './../../component/carts/moreNewListCart';
import JobListCart from './../../component/carts/jobListCart';
import ImagePicker from 'react-native-image-crop-picker';

const {width, height} = Dimensions.get('window');

const PostLikhe = ({navigation}) => {
  const [postData, setPostData] = useState({
    image: '',
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  const OnSelectImage = () => {
    ImagePicker.openPicker({
      width: width * 0.8,
      height: height * 0.4,
      cropping: true,
    }).then(image => {
      handleChange('image', {
        uri: image.path,
        name: image.filename || Date.now() + '-' + image.path.slice(20),
        type: image.mime,
      });
    });
  };
  const [image, setImage] = useState(postData.image);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <Text style={styles.vigyapanlikhe}>अपना विज्ञापन यहाँ लिखे</Text>
        <TextInput
          placeholder="Write here..."
          placeholderTextColor={COLORS.gray50}
          style={styles.texinput}
        />
        <Text style={styles.photolagay}>
          फोटो लगाए (यादि उपलब्ध हो तो लगाए)
        </Text>
        <TouchableOpacity onPress={OnSelectImage} style={styles.aploadBox}>
          <Text style={styles.apload}>अपलोड करे</Text>
        </TouchableOpacity>
        {postData.image.uri && (
          <Text numberOfLines={1} style={styles.imgUrl}>
            {postData.image.name}
          </Text>
        )}
        <Text style={styles.namuna}>नमूना:</Text>
        <Text style={styles.namunaEX}>
          Rojgarlive Sarkari Naukri SCTIMST Recruitment 2023 SCTIMST Bharti 2023
          (श्री चित्र तिरुनल इंस्टिट्यूट फॉर मेडिकल साइंसेज एंड टेक्नोलॉजी भर्ती
          2023) Last updated: Aug 10, 2023 05:55 PM
        </Text>
      </View>
    </ScrollView>
  );
};

export default PostLikhe;
