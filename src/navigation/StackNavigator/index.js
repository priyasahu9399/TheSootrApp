import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {images, icons} from '../../constants';
import {FONTS, COLORS, SIZES} from './../../constants';
import BottomTab from './../BottomTabNavigator';
import styles from './styles';
import Search from './../../screens/search/index';
import NewDetails from './../../screens/newsDetails/index';
import PhotoDetails from './../../screens/photoDetails/index';
import JobDetails from './../../screens/jobDetails/index';
import Register from './../../screens/register/index';
import DusreKaVigyapanDekhe from './../../screens/dusrekavigyapan/index';
import PostLikhe from './../../screens/postLikhe/index';
import Photos from './../../screens/photo/index';
import AboutUs from './../../screens/aboutUs/index';
import Shikayat from './../../screens/shikayatkre/index';
import {SearchApi} from './../../redux/actions/homeActions';
import {connect} from 'react-redux';
import VideoPage from './../../screens/video/index';
const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

const StackScreen = ({navigation, route, SearchApi}) => {

  return (
    <Stack.Navigator
      screenOptions={() => ({
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {backgroundColor: COLORS.primary},
        headerTitleStyle: styles.headerTitle,
        headerTintColor: COLORS.white,
      })}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewDetails"
        component={NewDetails}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />
      <Stack.Screen
        name="Photos"
        component={Photos}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />

      <Stack.Screen
        name="PhotoDetails"
        component={PhotoDetails}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />

      <Stack.Screen
        name="DusreKaVigyapanDekhe"
        component={DusreKaVigyapanDekhe}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />

      <Stack.Screen
        name="PostLikhe"
        component={PostLikhe}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />
      <Stack.Screen
        name="Shikayat"
        component={Shikayat}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />
      <Stack.Screen
        name="VideoPage"
        component={VideoPage}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={icons.search2} style={styles.search} />
            </TouchableOpacity>
          ),
         
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {SearchApi};

export default connect(mapStateToProps, mapDispatchToProps)(StackScreen);
