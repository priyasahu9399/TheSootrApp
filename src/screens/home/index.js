import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';
import styles from './styles';

import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import {data} from './../../constants';
import LongButton from './../../component/button/longButton';
import BannerHeading from './../../component/carts/bannerHeading';
import MoreNewList from './../../component/carts/moreNewListCart';
import NewUpdateFourImage from './../../component/carts/newUpadate4img';
import JobListCart from './../../component/carts/jobListCart';
import HeadingScroll from './../headingScroll/index';
import VideoPhotoMediumSlider from './../../component/slider/VideoPhotoMediumSlider';
import SmallNewSlider from './../../component/slider/smallNewSlider';
import HomeAutoScrollSlider from './../../component/slider/homeAutoscrollslider';
import VideoSlider from './../../component/slider/videoslider';
import RoundButton from './../../component/button/roundButton';
import ShareComponent from './../../component/share/index';
import MarqueeView from 'react-native-marquee-view';
import {connect} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {http2, httpvideo} from './../../services/api';
import {
  GetMostReadApi,
  GetPhotosApi,
  GetVideoApi,
  GetScrollNewsApi,
  GetTajaNewsApi,
  GetNewsDetailApi,
  PostPhotosDetailsApi,
  GetPostFeatureApi,
  GetAutoSliderApi,
} from './../../redux/actions/homeActions';
import Loader from './../../component/modalLoading/index';

const {width, height} = Dimensions.get('window');

const Home = ({
  navigation,
  mostRead,
  GetMostReadApi,
  GetPhotosApi,
  getphotos,
  GetVideoApi,
  getScrollnews,
  GetScrollNewsApi,
  tajanews,
  GetTajaNewsApi,
  GetNewsDetailApi,
  PostPhotosDetailsApi,
  getpostfeature,
  GetPostFeatureApi,
  GetAutoSliderApi,
}) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    GetPostFeatureApi();
    GetMostReadApi(page); //referesing onendreach  onreferesh
    GetPhotosApi();
    GetVideoApi();
    GetScrollNewsApi();
    GetTajaNewsApi();
    GetNewsDetailApi();
    GetAutoSliderApi();
  }, []);

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Loader loading={loading} />
      <HeadingScroll navigation />
      {getScrollnews?.data && (
        <View style={styles.scrollHeadBox}>
          <Text style={styles.breaking}>Breaking News</Text>
          <MarqueeView speed={0.1} autoPlay={true} delay={0}>
            <View style={styles.rowScroll}>
              {getScrollnews?.data?.map((item, index) => (
                <Text numberOfLines={1} style={styles.scrollTitle}>
                  {item?.title}
                </Text>
              ))}
            </View>
          </MarqueeView>
        </View>
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeAutoScrollSlider navigation />
        <View style={styles.marginTop}>
          {getpostfeature?.map((item, index) => (
            <MoreNewList
              key={item => item?.id}
              title={item?.[0]?.StorySynopsis}
              image={{uri: http2 + item?.[0]?.StoryImageThumb}}
              content={item?.[0]?.StoryHeading}
              navigation
              onPress={() => GetNewsDetailApi(item?.[0]?.StoryID, navigation)}
            />
          ))}

          <View style={styles.marginTop}>
            <LongButton children="वीडियो" />
            <VideoSlider navigation={navigation} />
          </View>

          {getphotos?.data && (
            <View style={styles.marginTop}>
              <LongButton children="फोटो" />
              <VideoPhotoMediumSlider navigation={navigation} />
              <RoundButton
                children="ओर फोटो देखे"
                buttonStyle={styles.orDeke}
                onPress={() => navigation.navigate('Photos')}
              />
            </View>
          )}

          {tajanews && (
            <View style={styles.marginTop}>
              <LongButton children=" ताज़ा ख़बर" />

              {tajanews?.map((item, index) => {
                return (
                  <MoreNewList
                    title={item?.StoryHeading}
                    image={{uri: http2 + item?.StoryImageThumb}}
                    content={item?.StorySubheading}
                    navigation
                    onPress={() => GetNewsDetailApi(item?.StoryID, navigation)}
                  />
                );
              })}
            </View>
          )}
          {mostRead?.data && (
            <View style={styles.marginTop}>
              <LongButton children="सबसे ज्यादा पड़ी गई" />
              {mostRead?.data?.map((item, index) => {
                return (
                  <MoreNewList
                    title={item?.StoryHeading}
                    image={{uri: http2 + item?.StoryImageThumb}}
                    content={item?.StorySubheading}
                    navigation
                    onPress={() => GetNewsDetailApi(item?.StoryID, navigation)}
                  />
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={ShareComponent}
        style={styles.whatsappBox}>
        <Image source={icons.whatsapp} style={styles.whatsapp} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  mostRead: state.home.mostRead,
  getScrollnews: state.home.getScrollnews,
  tajanews: state.home.tajanews,
  getphotos: state.home.getphotos,
  getpostfeature: state.home.getpostfeature,
});

const mapDispatchToProps = {
  GetAutoSliderApi,
  GetMostReadApi,
  GetPhotosApi,
  GetVideoApi,
  GetScrollNewsApi,
  GetTajaNewsApi,
  GetNewsDetailApi,
  PostPhotosDetailsApi,
  GetPostFeatureApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
