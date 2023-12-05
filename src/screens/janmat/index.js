import React, {useState, useEffect} from 'react';
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
import {FONTS, COLORS} from './../../constants';
import styles from './styles';
import LongButton from './../../component/button/longButton';
import RoundButton from './../../component/button/roundButton';
import {GetPollQuestionApi} from './../../redux/actions/pollQuestionActions';
import {connect} from 'react-redux';
import Loader from './../../component/modalLoading/index';

const {width, height} = Dimensions.get('window');

const Janmat = ({navigation, GetPollQuestionApi, getpollquestion}) => {
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetPollQuestionApi(data => setLoading(data));
  }, []);
  const [active, setActive] = useState(1);

  console.log('getpollquestion', getpollquestion);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Loader loading={loading} />

      <View style={styles.innercontainer}>
        <LongButton children="जनमत दे" />

        <FlatList
          data={getpollquestion}
          renderItem={({item, index}) => (
            <View style={styles.listItemBox}>
              <Text style={styles.question}>{item?.polldescription}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setActive(1)}
                style={styles.flexrow}>
                <View style={styles.radio_BtnBox}>
                  {active === 1 && <Text style={styles.radio_Btn}></Text>}
                </View>
                <Text style={styles.radio_text}>{item?.option1}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setActive(2)}
                style={styles.flexrow}>
                <View style={styles.radio_BtnBox}>
                  {active === 2 && <Text style={styles.radio_Btn}></Text>}
                </View>
                <Text style={styles.radio_text}>{item?.option2}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setActive(3)}
                style={styles.flexrow}>
                <View style={styles.radio_BtnBox}>
                  {active === 3 && <Text style={styles.radio_Btn}></Text>}
                </View>
                <Text style={styles.radio_text}>{item?.option3}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <RoundButton
          children="Submit"
          buttonStyle={{alignSelf: 'center', marginTop: height * 0.05}}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  getpollquestion: state.pollQuestion.getpollquestion,
});

const mapDispatchToProps = {
  GetPollQuestionApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Janmat);
