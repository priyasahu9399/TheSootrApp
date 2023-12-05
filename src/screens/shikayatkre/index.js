import React, {useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS, data} from './../../constants';
import styles from './styles';
import {connect} from 'react-redux';
// import {ComplaintApi} from './../../redux/actions/homeActions';

const Shikayat = () => {
  // useEffect(() => {
  //   ComplaintApi();
  // }, []);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}></ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Shikayat);
