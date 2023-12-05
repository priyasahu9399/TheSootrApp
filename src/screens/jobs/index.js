import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
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
import {data} from './../../constants';
import JobListCart from './../../component/carts/jobListCart';
import LongButton from './../../component/button/longButton';
import RoundButton from './../../component/button/roundButton';
import JobDetails from './../jobDetails/index';
import Register from './../register/index';
import {GetJobsApi} from './../../redux/actions/jobActions';
import {connect} from 'react-redux';
import {http2} from './../../services/api';
import Loader from './../../component/modalLoading/index';

const {width, height} = Dimensions.get('window');

const Job = ({navigation, GetJobsApi, getjobs}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetJobsApi(data => setLoading(data));
  }, []);
  // console.log('getjobs', getjobs?.[0]?.imagename);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Loader loading={loading} />

      <View style={styles.innercontainer}>
        {/* <LongButton
          children="Job Keywords"
          buttonStyle={{backgroundColor: COLORS.white}}
          buttonText={{color: COLORS.black}}
        />
        <View style={styles.flexWrap}>
          {data.SearchKey.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('JobDetails')}
              style={styles.listItemBox}>
              <Text style={styles.listItem}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View> */}
        <View>
          {/* <RoundButton
            children="नौकरी देखें"
            buttonStyle={{
              backgroundColor: COLORS.gray70,
              height: height * 0.04,
            }}
          /> */}
          <View style={styles.texinputBox}>
            <TextInput
              placeholder="Job title, keywords,or company"
              placeholderTextColor={COLORS.gray50}
              style={styles.texinput}
            />
            <Image source={icons.search2} style={styles.texinputIcon} />
          </View>
          {/* <RoundButton
            children="नौकरियाँ कहाँ देखें"
            buttonStyle={{
              width: width * 0.4,
              height: height * 0.04,
              backgroundColor: COLORS.gray70,
            }}
          />
          <View style={styles.texinputBox}>
            <TextInput
              placeholder="Bhopal , Madhya Pradesh"
              placeholderTextColor={COLORS.gray50}
              style={styles.texinput}
            />
            <Image source={icons.location} style={styles.texinputIcon} />
          </View> */}
        </View>
        <View>
          {/* <RoundButton
            children="Find Jobs"
            buttonStyle={{alignSelf: 'center'}}
          />
          <RoundButton
            children="क्या आप नौकरी की तलाश में हैं? | REGISTER NOW"
            buttonStyle={{width: width * 0.92}}
            buttonText={{fontSize: 12}}
            onPress={() => navigation.navigate('Register')}
          /> */}
          {/* <RoundButton
            children="क्या आप कर्मचारी की तलाश कर रहे हैं? | POST YOUR JOB"
            buttonStyle={{width: width * 0.93, marginBottom: height * 0.025}}
            buttonText={{fontSize: 12}}
          /> */}
        </View>
        {/* 
        <View>
          <FlatList
            data={data.JobListCartdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <JobListCart
                image={item.image}
                title={item.title}
                salary={item.salary}
                jobtype={item.jobtype}
                qualification={item.qualification}
                mainBoxStyle={styles.mainBoxStyle}
                rowmarginStyle={{marginLeft: 0}}
                bannerimageStyle={styles.bannerimageStyle}
                contentStyle={{fontSize: 12, marginLeft: 0}}
                navigation
                onPress={() => navigation.navigate('JobDetails')}
              />
            )}
          />
        </View> */}

        {getjobs?.map((item, index) => (
          <JobListCart
            key={index}
            image={{uri: http2 + item?.imagename}}
            title={item?.heading}
            salary={item?.salaryfrom}
            jobtype={item?.job_type}
            qualification={item?.qualification}
            navigation
            onPress={() => navigation.navigate('JobDetails', {jobs: item})}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  getjobs: state.job.getjobs,
});

const mapDispatchToProps = {
  GetJobsApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Job);
