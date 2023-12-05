import React, {useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import styles from './styles';
import RoundButton from './../../component/button/roundButton';
import Janmat from './../janmat/index';
import DusreKaVigyapanDekhe from './../dusrekavigyapan/index';
import PostLikhe from './../postLikhe/index';

const {width, height} = Dimensions.get('window');

const Classified = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.innercontainer}>
        <View>
          <RoundButton
            children="अपना विज्ञापन पोस्ट करे"
            buttonStyle={styles.btnStyle}
            buttonText={{fontSize: 13}}
            onPress={() => navigation.navigate('PostLikhe')}
          />

          <RoundButton
            children="दूसरे का विज्ञापन देखे"
            buttonStyle={styles.btnStyle}
            buttonText={{fontSize: 13}}
            onPress={() => navigation.navigate('DusreKaVigyapanDekhe')}
          />
        </View>
      </View>
    </View>
  );
};

export default Classified;
