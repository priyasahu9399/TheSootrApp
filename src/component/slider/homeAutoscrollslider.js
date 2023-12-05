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
import {FONTS, COLORS} from '../../constants';
import {connect} from 'react-redux';
import {
  GetAutoSliderApi,
  GetNewsDetailApi,
} from '../../redux/actions/homeActions';
import {http2} from './../../services/api';
const {width, height} = Dimensions.get('window');
const homeSlider = [
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
];
const HomeAutoScrollSlider = ({
  onPress,
  navigation,
  GetAutoSlider,
  GetAutoSliderApi,
  GetNewsDetailApi,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef(); //null ref a raha

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    goNextSlide();
    if (currentSlideIndex == GetAutoSlider?.length - 1) {
      ref?.current?.scrollToOffset(0);
      setCurrentSlideIndex(0);
    }
  }, 3000);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != GetAutoSlider?.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  // console.log(GetAutoSlider);
  return (
    <View>
      <FlatList
        data={GetAutoSlider}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item, index}) => {
          // console.log('item', item);
          return (
            <View>
              <View
                // onPress={() => GetNewsDetailApi(item?.StoryID, navigation)}
                // activeOpacity={0.6}
                style={styles.scrollBox}>
                <Image
                  source={{uri: http2 + item?.StoryImageThumb}}
                  style={styles.scrollImage}
                />
                <Text numberOfLines={1} style={styles.redHeading}>
                  {item?.StoryHeading}
                </Text>
                <Text numberOfLines={3} style={styles.title}>
                  {item?.StorySubheading}
                </Text>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.dotbox}>
        {GetAutoSlider?.map((item, index) => (
          <View
            key={index}
            style={{
              ...styles.dotstyle,
              backgroundColor:
                currentSlideIndex === index ? COLORS.primary : COLORS.gray20,
            }}></View>
        ))}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  GetAutoSlider: state.home.GetAutoSlider,
});

const mapDispatchToProps = {
  GetAutoSliderApi,
  GetNewsDetailApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeAutoScrollSlider);

const styles = StyleSheet.create({
  scrollBox: {
    width: width,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
  },
  scrollImage: {
    width: width,
    height: height * 0.25,
    resizeMode: 'stretch',
  },
  redHeading: {
    color: COLORS.primary,
    fontSize: 12,
    ...FONTS.fiveHundred,
    padding: width * 0.03,
  },
  title: {
    color: COLORS.black,
    ...FONTS.fiveHundred,
    fontSize: 14,
    paddingHorizontal: width * 0.03,
  },
  dotbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.01,
  },
  dotstyle: {
    height: height * 0.011,
    width: width * 0.022,
    marginRight: width * 0.01,
    borderRadius: 7,
  },
});
