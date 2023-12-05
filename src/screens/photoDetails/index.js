import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StyleSheet,
  ScrollView,
  StatusBar,
  Linking,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {data} from './../../constants';
import MoreNewList from './../../component/carts/moreNewListCart';
import LongButton from './../../component/button/longButton';
import SambandhiKhabarNewsDetail from './../../component/carts/sambandhitKhabarMoreSlidList';
import ShareComponent from './../../component/share';
import {PostPhotosDetailsApi} from './../../redux/actions/homeActions';
import {connect} from 'react-redux';
import {http2} from './../../services/api';

const {width, height} = Dimensions.get('window');
const Photos = ({images, content}) => {
  return (
    <View>
      <Image source={images} style={styles.banner} />
      <Text style={styles.photoTitle}>{content}</Text>
    </View>
  );
};

const Applink = ({onPress, name}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.applinkBox}>
      <FontAwesome name={name} size={18} color={COLORS.black} />
    </TouchableOpacity>
  );
};

const PhotoDetails = ({navigation, PostPhotosDetailsApi, photodetail}) => {
  console.log('photodetail', photodetail);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <Text numberOfLines={5} style={styles.mainHeading}>
          {photodetail?.[0]?.gallery_heading}
        </Text>

        <View style={styles.flexrow}>
          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.logotitle}>{photodetail?.[0]?.FirstName}</Text>
        </View>
        <Text style={styles.dateTime}>{photodetail?.[0]?.gallary_date}</Text>

        <View style={styles.flexrow}>
          <Applink
            name="whatsapp"
            onPress={() => Linking.openURL('https://www.whatsapp.com/')}
          />
          <Applink
            name="facebook"
            onPress={() => Linking.openURL('https://www.facebook.com')}
          />
          <Applink
            name="twitter"
            onPress={() => Linking.openURL('https://twitter.com')}
          />
          <Applink name="share-alt" onPress={ShareComponent} />
        </View>
        <Text style={styles.subHeading}>{photodetail?.[0]?.gallery_synopsis}</Text>

        <View>
          {photodetail?.map((item, index) => (
            <Photos
              images={{uri: http2 + item?.img_path}}
              content={item?.img_caption}
            />
          ))}
        </View>

        {/* <LongButton children="संबंधित फोटो" />

        {data.MoreNewList.map((item, index) => (
          <MoreNewList
            title={item.title}
            image={item.image}
            content={item.content}
            navigation
            onPress={() => navigation.navigate('NewDetails')}
          />
        ))} */}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  photodetail: state?.home?.photodetail,
});

const mapDispatchToProps = {
  PostPhotosDetailsApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetails);
