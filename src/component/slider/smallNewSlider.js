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
import {FONTS, COLORS, SIZES} from '../../constants';
const {width, height} = Dimensions.get('window');

const VideoPhoto = [
  {
    id: 0,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    title2:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',

    img: images.banner4,
    image: images.banner,
  },
  {
    id: 1,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    title2: 'भारत में नए  की मशीनों की कीमत आपको चौंका देगी',
    img: images.banner2,
    image: images.banner3,
  },
  {
    id: 2,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनीहोगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    title2: 'भारत में नए  की मशीनों की कीमत आपको चौंका देगी',
    img: images.banner5,
    image: images.banner2,
  },
  {
    id: 3,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    title2: 'भारत में नए  की मशीनों की कीमत आपको चौंका देगी',
    img: images.banner3,
    image: images.banner4,
  },
  {
    id: 4,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    title2: 'भारत में नए  की मशीनों की कीमत आपको चौंका देगी',
    img: images.banner,
    image: images.banner4,
  },
  {
    id: 5,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    title2: 'भारत में नए  की मशीनों की कीमत आपको चौंका देगी',
    img: images.banner2,
    image: images.banner,
  },
  {
    id: 6,
    title:
      'आपके कार्य संपूर्ण हो जाएंगे, लेकिनउसके लिए बहुत अधिक मेहनत करनी होगी। कोई पारिवारिक मसला .कोई पारिवारिक मसला,',
    title2: 'भारत में नए  की मशीनों की कीमत आपको चौंका देगी',
    img: images.banner5,
    image: images.banner,
  },
];

const TwoImage = ({img, image, title, title2, onPress, navigation}) => {
  return (
    <View style={{width: width, alignSelf: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={styles.scrollBox}>
          <Image source={img} style={styles.scrollImage} />
          <Text numberOfLines={3} style={styles.title}>
            {title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={onPress}
          activeOpacity={0.6}
          style={styles.scrollBox}>
          <Image source={image} style={styles.scrollImage} />
          <Text numberOfLines={3} style={styles.title}>
            {title2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SmallNewSlider = ({ImgboxStyle, ImgStyle}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != VideoPhoto.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <View>
      <FlatList
        data={VideoPhoto}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
        renderItem={({item, index}) => (
          <TwoImage
            img={item.img}
            title={item.title}
            title2={item.title2}
            image={item.image}
            navigation
          />
        )}
      />

      <View style={styles.dotbox}>
        {VideoPhoto?.map((item, index) => (
          <View
            key={item.id}
            style={{
              ...styles.dotstyle,
              backgroundColor:
                currentSlideIndex === item.id ? COLORS.primary : COLORS.gray10,
            }}></View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollBox: {
    width: width * 0.44,
    borderWidth: 1,
    borderColor: COLORS.gray20,
    alignItems: 'center',
    borderRadius: 8,
    margin: width * 0.02,
  },
  scrollImage: {
    width: width * 0.44,
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
    height: height * 0.012,
    width: width * 0.024,
    marginRight: width * 0.01,
    borderRadius: 6,
  },
});

export default SmallNewSlider;
