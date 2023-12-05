import React, {useState, useRef, useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {icons, images} from '../../constants';
import {FONTS, COLORS, SIZES} from '../../constants/theme';
import {connect} from 'react-redux';
import {httpvideo, http2} from './../../services/api';

const {width, height} = Dimensions.get('window');
const video = [
  {
    id: 0,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    img: images.banner5,
  },
  {
    id: 1,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    img: images.banner2,
  },
  {
    id: 2,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनीहोगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    img: images.banner,
  },
  {
    id: 3,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    img: images.banner5,
  },
  {
    id: 4,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    img: images.banner4,
  },
  {
    id: 5,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    img: images.banner,
  },
  {
    id: 6,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    img: images.banner5,
  },
];
const VideoSlider = ({
  ImgboxStyle,
  ImgStyle,
  onPress,
  navigation,
  getVideo,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != getVideo?.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <View>
      <FlatList
        data={getVideo}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item, index}) => {
          // console.log("getVideo",item?.id);
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('VideoPage', item)}
              activeOpacity={0.6}
              style={styles.scrollBox}>
              <Image
                source={{uri: http2 + item?.video_thumb}}
                style={styles.scrollImage}
              />
              <Text numberOfLines={3} style={styles.title}>
                {item?.heading}
              </Text>
            </TouchableOpacity>
          );
        }}
      />

      <View style={styles.dotbox}>
        {getVideo?.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                ...styles.dotstyle,
                backgroundColor:
                  currentSlideIndex === index ? COLORS.primary : COLORS.gray10,
              }}></View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollBox: {
    width: width * 0.9,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.01,
  },
  scrollImage: {
    width: width * 0.894,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.2,
    resizeMode: 'stretch',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 13,
    padding: width * 0.02,
  },

  dotbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  dotstyle: {
    height: width * 0.02,
    width: width * 0.02,
    marginRight: width * 0.01,
    borderRadius: 10,
  },
});

const mapStateToProps = state => ({
  getVideo: state.home.getVideo,
});

const mapDispatchToProps = {
  //   GetPhotosApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoSlider);
