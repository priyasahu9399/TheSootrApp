import React from 'react';
import {
  Image,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons} from '../../constants';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import Home from './../../screens/home/index';
import VideoPage from './../../screens/video/index';
import Job from './../../screens/jobs/index';
import SootrBane from './../../screens/sootrBane/index';
import Search from './../../screens/search/index';
import Classified from './../../screens/classified/index';

const Tab = createBottomTabNavigator();
const {width, height} = Dimensions.get('window');

const Toggle = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={icons.toggle} style={styles.toggle} />
    </TouchableOpacity>
  );
};

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
        tabBarLabelStyle: styles.tablebal,
        headerStyle: {backgroundColor: COLORS.primary},
        headerTitleStyle: styles.headerTitle,
        tabBarStyle: {height: height * 0.075},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarLabel: 'Home',
          headerLeft: () => (
            <View style={styles.row}>
              <Toggle onPress={() => navigation.openDrawer()} />
              <Image source={images.logo} style={styles.logo} />
            </View>
          ),
          headerRight: () => (
            <View style={styles.row}>
              {/* <TouchableOpacity activeOpacity={0.6} style={styles.plusbox}>
                <Image source={icons.plus} style={styles.plusminus} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6} style={styles.plusbox}>
                <Image source={icons.minus} style={styles.plusminus} />
              </TouchableOpacity> */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Search')}>
                <Image source={icons.search} style={styles.search} />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.black},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoPage}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
          tabBarLabel: 'Video',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.video}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.black},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SootrBane"
        component={SootrBane}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={icons.penta}
                style={[
                  styles.pantaIcon,
                  {tintColor: focused && COLORS.primary},
                ]}
              />
              <Text style={styles.sutrbane}>सूत्र बनें</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Job"
        component={Job}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,

          tabBarIcon: ({focused}) => (
            <Image
              source={icons.job}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.black},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Classified"
        component={Classified}
        options={{
          headerTitle: () => <Image source={images.logo} style={styles.logo} />,
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.ads}
              style={[
                styles.icon_set,
                {tintColor: focused ? COLORS.primary : COLORS.black},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
