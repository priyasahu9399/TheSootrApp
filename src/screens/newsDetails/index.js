import React, {useState, useEffect} from 'react';
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
import ShareComponent from './../../component/share/index';
import {GetNewsDetailApi} from './../../redux/actions/homeActions';
import {connect} from 'react-redux';
import {http2} from './../../services/api';
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

const NewDetails = ({GetNewsDetailApi, getnewspostdetail, navigation}) => {
  const {width} = useWindowDimensions();

  // console.log('getnewspostdetail', getnewspostdetail?.data?.StoryImageThumb);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.mainHeading}>
          {getnewspostdetail?.data?.StoryHeading}
        </Text>

        <View style={styles.flexrow}>
          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.logotitle}>
            {getnewspostdetail?.data?.Author}
          </Text>
        </View>
        <Text style={styles.dateTime}>
          {getnewspostdetail?.data?.StoryDate}
        </Text>

        <View style={styles.flexrow}>
          <Applink name="bookmark-o" />
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
        {getnewspostdetail?.data?.StoryImageThumb && (
          <Image
            source={{uri: http2 + getnewspostdetail?.data?.StoryImageThumb}}
            style={styles.banner}
          />
        )}

        <RenderHtml
          contentWidth={width}
          source={{html: getnewspostdetail?.data?.FullStory}}
          tagsStyles={{
            body: {
              whiteSpace: 'normal',
              color: 'gray',
            },
          }}
        />

        <View>
          <FlatList
            data={getnewspostdetail?.data}
            renderItem={({item, index}) => (
              <MoreNewList
                key={index}
                title={item?.storyMetaTitle}
                image={{uri: http2 + item?.StoryImage1}}
                content={item?.storyMetaDescription}
                navigation
                onPress={() => navigation.navigate('NewDetails')}
              />
            )}
          />
        </View>
        <View style={styles.flexWrap}>
          <FlatList
            data={getnewspostdetail?.data}
            renderItem={({item, index}) => (
              <TouchableOpacity key={index} style={styles.listItemBox}>
                <Text style={styles.listItem}>{item?.tags}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* <LongButton children="संबंधित खबरे" />

        <FlatList
          data={data.MoreNewList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SambandhiKhabarNewsDetail
              title={item.title}
              image={item.image}
              content={item.content}
              navigation
              onPress={() => navigation.navigate('NewDetails')}
            />
          )}
        />
        <View>
          {data.MoreNewList.map((item, index) => (
            <MoreNewList
              title={item.title}
              image={item.image}
              content={item.content}
              navigation
              onPress={() => navigation.navigate('NewDetails')}
            />
          ))}
        </View> */}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  getnewspostdetail: state.home.getnewspostdetail,
});

const mapDispatchToProps = {
  GetNewsDetailApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDetails);
