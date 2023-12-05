import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import {icons, images} from './../../constants';
import {connect} from 'react-redux';
import VideoPlayer from 'react-native-video-player';

const {width, height} = Dimensions.get('window');

const VideoCart = ({thumbnail, uri, title}) => {
  return (
    <View style={styles.videoBox}>
      <View>
        <VideoPlayer
          video={{uri: uri}}
          videoWidth={width * 0.94}
          videoHeight={height * 0.4}
          showDuration
          controls
          customStyles={styles.videocustomstyle}
          thumbnail={thumbnail}
          resizeMode="stretch"
        />
      </View>
      <Text numberOfLines={3} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default VideoCart;

const styles = StyleSheet.create({
  videoBox: {
    width: width * 0.94,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: height * 0.01,
    overflow: 'hidden',
  },
  videocustomstyle: {
    overflow: 'hidden',
    width: width * 0.94,
    height: height * 0.4,
    resizeMode: 'stretch',
    borderRadius: 8,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 13,
    padding: width * 0.02,
  },
});
