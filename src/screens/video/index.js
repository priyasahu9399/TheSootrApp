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
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import styles from './styles';
import {data} from './../../constants';
import ShareComponent from './../../component/share/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import VideoCart from './../../component/video/videos';
import {GetVideolistApi} from './../../redux/actions/homeActions';
import {connect} from 'react-redux';
import MoreNewList from './../../component/carts/moreNewListCart';
import {http2, httpvideo} from './../../services/api';
import LongButton from './../../component/button/longButton';
import Loader from './../../component/modalLoading/index';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
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

const VideoPage = ({navigation, GetVideolistApi, getVideolist, route}) => {
  useEffect(() => {
    GetVideolistApi(data => setLoading(data));
  }, []);
  const {width} = useWindowDimensions();
  const videodata = route.params;
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Loader loading={loading} />
      <View style={styles.innercontainer}>
        <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
        <RenderHtml
          contentWidth={width}
          source={{html: videodata?.description}}
          tagsStyles={{
            body: {
              whiteSpace: 'normal',
              color: 'gray',
            },
          }}
        />
        <VideoCart title={videodata?.heading} uri={videodata?.url} />

        <LongButton children=" ओर वीडियो देखे" />

        {getVideolist?.map((item, index) => (
          <MoreNewList
            key={item => item?.id}
            // title={item?.heading}
            image={{uri: http2 + item?.video_thumb}}
            content={item?.heading}
            navigation
            onPress={() => navigation.navigate('VideoPage', item)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  getVideolist: state.home.getVideolist,
});

const mapDispatchToProps = {
  GetVideolistApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
