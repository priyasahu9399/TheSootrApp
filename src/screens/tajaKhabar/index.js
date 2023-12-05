import React from 'react';
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
import styles from './styles';
import {data} from './../../constants';
import LongButton from './../../component/button/longButton';
import BannerHeading from './../../component/carts/bannerHeading';
import MoreNewList from './../../component/carts/moreNewListCart';
import NewUpdateFourImage from './../../component/carts/newUpadate4img';
import JobListCart from './../../component/carts/jobListCart';
// import TopTabNavigator from "./../../navigation/TopTabNavigatorBar/index";

const {width, height} = Dimensions.get('window');

const TajaKhabar = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Text>TajaKhabar</Text>
    </View>
  );
};

export default TajaKhabar;
