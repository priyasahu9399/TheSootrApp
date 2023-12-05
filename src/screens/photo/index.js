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
import {connect} from 'react-redux';
import {http2, httpvideo} from './../../services/api';
import {
  GetPhotosApi,
  PostPhotosDetailsApi,
} from './../../redux/actions/homeActions';
import Loader from './../../component/modalLoading/index';

const {width, height} = Dimensions.get('window');

const Photos = ({
  navigation,
  GetPhotosApi,
  getphotos,
  PostPhotosDetailsApi,
  photodetail,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetPhotosApi();
  }, []);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Loader loading={loading} />

      <View style={{marginTop: height * 0.014}}>
        <FlatList
          data={getphotos?.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={item => item?.gallary_id}
                onPress={() =>
                  PostPhotosDetailsApi(item?.gallary_id, navigation)
                }
                activeOpacity={0.6}
                style={styles.scrollBox}>
                <Image
                  source={{uri: http2 + item?.img_path}}
                  style={styles.scrollImage}
                />
                <Text numberOfLines={3} style={styles.title}>
                  {item?.gallery_heading}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  getphotos: state?.home?.getphotos,
});

const mapDispatchToProps = {
  GetPhotosApi,
  PostPhotosDetailsApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
