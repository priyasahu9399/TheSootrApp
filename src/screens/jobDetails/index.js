import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {images, icons} from '../../constants';
import {FONTS, COLORS} from './../../constants';
import styles from './styles';
import {data} from './../../constants';
import JobListCart from './../../component/carts/jobListCart';
import RoundButton from './../../component/button/roundButton';
import {http2} from './../../services/api';
import {connect} from 'react-redux';
import {GetJobsApi} from './../../redux/actions/jobActions';

const {width, height} = Dimensions.get('window');
const JobDetails = ({route, navigation, getjobs, GetJobsApi}) => {
  const jobs = route?.params?.jobs;
  console.log('jobs --', jobs?.imagename);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainBox}>
          <Text style={styles.heading}>{jobs?.heading}</Text>
          <Image
            source={{uri: http2 + jobs?.imagename}}
            style={styles.bannerimage}
          />
          <View style={styles.rowmargin}>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Insitution/Company :</Text>
              <Text style={styles.content}>{jobs?.company}</Text>
            </View>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Qualification:</Text>
              <Text style={styles.content}>{jobs?.qualification}</Text>
            </View>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Job Type:</Text>
              <Text style={styles.content}>{jobs?.job_type}</Text>
            </View>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Location:</Text>
              <Text style={styles.content}>{jobs?.company}</Text>
            </View>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Age:</Text>
              <Text style={styles.content}>
                {jobs?.agefrom} to {jobs?.ageto}
              </Text>
            </View>

            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Salary:</Text>
              <Text style={styles.content}>
                {jobs?.salaryfrom} to {jobs?.salaryto}
              </Text>
            </View>
            {/* <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Vaccancy Post:</Text>
              <Text style={styles.content}>{jobs?.vacant_post}</Text>
            </View> */}
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Job Vacancy:</Text>
              <Text style={styles.content}>{jobs?.job_vacancy}</Text>
            </View>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Application Fee:</Text>
              <Text style={styles.content}>₹ {jobs?.fee}</Text>
            </View>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Selection Process:</Text>
              <Text style={styles.content}>{jobs?.selection}</Text>
            </View>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Transaction Date:</Text>
              <Text style={styles.content}>{jobs?.transaction_date}</Text>
            </View>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>Application Last Date:</Text>
              <Text style={styles.content}>{jobs?.ApplicationLastDate}</Text>
            </View>

            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>State:</Text>
              <Text style={styles.content}>{jobs?.state_id}</Text>
            </View>
            <View style={styles.flexDirection}>
              <Text style={styles.headinggray}>City:</Text>
              <Text style={styles.content}>{jobs?.city_id}</Text>
            </View>
          </View>
          <View style={[styles.border, styles.flexDirection]}>
            <RoundButton
              children="Download PDF"
              buttonStyle={styles.downloadBtn}
            />
            <RoundButton
              children="Apply"
              buttonStyle={{borderRadius: 6, width: width * 0.25}}
            />
          </View>
          {getjobs?.map((item, index) => (
            <JobListCart
              image={{uri: http2 + item?.imagename}}
              title={item?.heading}
              salary={item?.salaryfrom}
              jobtype={item?.job_type}
              qualification={item?.qualification}
              navigation
              // onPress={() => navigation.navigate('JobDetails', {jobs: item})}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  getjobs: state.job.getjobs,
});

const mapDispatchToProps = {
  GetJobsApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
