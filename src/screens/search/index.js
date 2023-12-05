import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import styles from './styles';
import {data} from './../../constants';
import MoreNewList from './../../component/carts/moreNewListCart';
import {SearchApi, GetNewsDetailApi} from './../../redux/actions/homeActions';
import {connect} from 'react-redux';
import {http2} from './../../services/api';

const Search = ({navigation, SearchApi, searchdata, GetNewsDetailApi}) => {
  const [page, setPage] = useState(1);
  const [post, setpost] = useState({
    parameter: null,
  });

  const handleChange = (name, value) => {
    setpost({
      ...post,
      [name]: value,
    });
  };

  navigation.setOptions({
    headerTitle: () => (
      <TextInput
        placeholder="Search here ..."
        placeholderTextColor={COLORS.white}
        style={styles.textInput}
        value={post?.parameter}
        onChangeText={text => {
          handleChange('parameter', text);
          if (post?.parameter?.length) {
            SearchApi({parameter: post?.parameter});
          }
        }}
      />
    ),
  });

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        {searchdata?.[0] && post?.parameter && (
          <View style={styles.marginTop}>
            {searchdata?.map((item, index) => {
              return (
                <MoreNewList
                  key={index}
                  title={item?.StoryHeading}
                  image={{uri: http2 + item?.StoryImageThumb}}
                  content={item?.StorySubheading}
                  navigation={navigation}
                  onPress={() => GetNewsDetailApi(item?.StoryID, navigation)}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  searchdata: state.home.searchdata,
});

const mapDispatchToProps = {
  SearchApi,
  GetNewsDetailApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
