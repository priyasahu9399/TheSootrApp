import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  Linking,
  StatusBar,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {data} from './../../constants';
import {connect} from 'react-redux';
// import {GetCategoryApi} from './../../redux/actions/homeActions';
import Shikayat from './../shikayatkre/index';
const {width, height} = Dimensions.get('window');

const SocialMedia = ({onPress, linkText}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.link}>
      <Text style={styles.linkText}>{linkText}</Text>
    </TouchableOpacity>
  );
};

const Applink = ({onPress, name}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{margin: width * 0.02}}>
      <FontAwesome name={name} size={18} color={COLORS.gray60} />
    </TouchableOpacity>
  );
};

const DrawerScreen = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={[styles.imgbackground, styles.rowField]}>
        <View>
          <Image source={images.logo} style={styles.logoimg} />
        </View>

        <View style={styles.drawerText}>
          <Text numOfLines={1} style={styles.drawertitle}>
            Hii, User
          </Text>
          <Text style={styles.welcome}>Welcome to the App</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rowbookmark}>
          <TouchableOpacity style={[styles.touchbtn, styles.borderRight]}>
            <Image source={icons.bookmark} style={styles.bookicon} />
            <Text style={styles.booktext}>Bookmarks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            style={styles.touchbtn}>
            <Image source={icons.search} style={styles.bookicon} />
            <Text style={styles.booktext}>Search</Text>
          </TouchableOpacity>
        </View>
        {data?.categories?.map((item, index) => (
          <TouchableOpacity key={index}>
            <Text style={styles.listtext}>{item?.name}</Text>
          </TouchableOpacity>
        ))}

        <View>
          <View style={[styles.rowField, {paddingTop: height * 0.01}]}>
            <Text style={styles.heading}>The Sutra</Text>
            <Image source={images.logo} style={styles.logoimgChange} />
          </View>
          <Text style={[styles.listtext, {paddingBottom: 0}]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>

        <View>
          <Text style={styles.heading}>अन्य लिंक</Text>
          <View style={styles.linkRow}>
            <SocialMedia linkText="Home" />
            <SocialMedia
              linkText="हमारे बारे में"
              onPress={() => navigation.navigate('AboutUs')}
            />
            <SocialMedia linkText="टर्म्स एंड कंडीशन" />
            <SocialMedia linkText="प्राइवेसी" />
            <SocialMedia linkText="पॉलिसी" />
            <SocialMedia
              linkText="हमारी शिकायत करें"
              onPress={() => navigation.navigate('Shikayat')}
            />
            <SocialMedia linkText="संपर्क करें " />
          </View>
          <View style={[styles.linkRow, {justifyContent: 'center'}]}>
            <Applink
              name="facebook"
              onPress={() => Linking.openURL('https://www.facebook.com')}
            />
            <Applink
              name="twitter"
              onPress={() => Linking.openURL('https://twitter.com')}
            />
            <Applink
              name="youtube"
              onPress={() => Linking.openURL('https://www.youtube.com/')}
            />
            <Applink
              name="instagram"
              onPress={() => Linking.openURL('https://www.instagram.com/')}
            />
            <Applink
              name="pinterest"
              onPress={() => Linking.openURL('https://in.pinterest.com/')}
            />
            <Applink
              name="linkedin"
              onPress={() => Linking.openURL('https://www.linkedin.com')}
            />
            <Applink
              name="whatsapp"
              onPress={() => Linking.openURL('https://www.whatsapp.com/')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  // getCategory: state.home.getCategory,
});

const mapDispatchToProps = {
  // GetCategoryApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerScreen);
