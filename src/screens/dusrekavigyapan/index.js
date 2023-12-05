import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import styles from './styles';
import {data} from '../../constants';
import MoreNewList from './../../component/carts/moreNewListCart';
import JobListCart from './../../component/carts/jobListCart';
import {GetClassifiedApi} from './../../redux/actions/classifiedAction';
import {connect} from 'react-redux';
import {http2} from './../../services/api';
import Loader from './../../component/modalLoading/index';

const {width, height} = Dimensions.get('window');

const DusreKaVigyapanDekhe = ({
  navigation,
  GetClassifiedApi,
  getclassified,
}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetClassifiedApi(data => setLoading(data));
  }, []);
  console.log('getclassified', getclassified);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Loader loading={loading} />

      <View style={styles.texinputBox}>
        <TextInput
          placeholder="Search here..."
          placeholderTextColor={COLORS.gray50}
          style={styles.texinput}
        />
        <Image source={icons.search2} style={styles.texinputIcon} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <FlatList
          data={getclassified}
          renderItem={({item, index}) => (
            <View style={styles.box}>
              <TouchableOpacity>
                <Image
                  style={styles.boximg}
                  source={{uri: http2 + item?.image1}}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: width * 0.55,
                  marginLeft: width * 0.02,
                }}>
                <View style={styles.row}>
                  <Text style={styles.rupee}>{item?.price}</Text>
                  <View style={styles.redBox}>
                    <Text style={styles.redBoxtext}>{item?.categoryName}</Text>
                  </View>
                </View>
                <Text numberOfLines={2} style={styles.title}>
                  {item?.property_title}
                </Text>
                <Text numberOfLines={3} style={styles.subtitle}>
                  {item?.description}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  getclassified: state.classified.getclassified,
});

const mapDispatchToProps = {
  GetClassifiedApi,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DusreKaVigyapanDekhe);
