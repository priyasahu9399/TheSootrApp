import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import ImagePicker from 'react-native-image-crop-picker';

import styles from './styles';
import InputField from './../../component/input/inputText';
import RoundButton from './../../component/button/roundButton';

const {width, height} = Dimensions.get('window');

const SootrBane = ({navigation}) => {
  const [postData, setPostData] = useState({
    image: '',
    video: '',
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };
  console.log('postData', postData);
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
  // video
  const OnSelectVideo = () => {
    const options = {
      title: 'Video Picker',
      mediaType: 'video',
      storageOptions: {
        skipBackup: true,
      },
    };
    ImagePicker.openPicker({
      width: width * 0.8,
      height: height * 0.4,
    }).then(video => {
      handleChange('video', {
        uri: video.path,
        name: video.filename || Date.now() + '-' + video.path.slice(20),
      });
    });
  };

  const [video, setVideo] = useState(postData.video);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <View>
          <Text style={styles.mainHeading}>
            सूत्र बनने से पहले इस वीडियो को एक बार जरूर देखें
          </Text>
        </View>
        <Text style={styles.heading}>सूत्र बने</Text>
        <InputField label="नाम (चाहे तो लिखे)" />
        <InputField
          label="मोबाइल नंबर *"
          keyboardType="numeric"
          // maxLength={10}
          // error="Number is require"
          // errors="true"
        />
        <InputField label=" खबर लिखे *" />

        <View>
          <Text style={styles.heading}>फोटो लगाए </Text>
          <View style={styles.uploadMainBox}>
            <TouchableOpacity
              onPress={OnSelectImage}
              activeOpacity={0.6}
              style={styles.uploadBox}>
              <Image source={icons.plus} style={styles.plusimg} />
              <Text style={styles.choose}>Choose</Text>
            </TouchableOpacity>
            {postData.image.uri && (
              <Text numberOfLines={1} style={styles.imgUrl}>
                {postData.image.uri}
              </Text>
            )}
          </View>
        </View>
        <View>
          <Text style={[styles.heading, {marginTop: height * 0.03}]}>
            वीडियो लगाए
          </Text>
          <View style={styles.uploadMainBox}>
            <TouchableOpacity
              onPress={OnSelectVideo}
              activeOpacity={0.6}
              style={styles.uploadBox}>
              <Image source={icons.plus} style={styles.plusimg} />
              <Text style={styles.choose}>Choose</Text>
            </TouchableOpacity>
            {postData.video.uri && (
              <Text numberOfLines={1} style={styles.imgUrl}>
                {postData.video.uri}
              </Text>
            )}
          </View>
        </View>
        <RoundButton
          children="Submit"
          buttonStyle={{marginTop: height * 0.04, alignSelf: 'center'}}
        />
      </View>
    </ScrollView>
  );
};

export default SootrBane;
