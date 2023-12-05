import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Share from 'react-native-share';

// const ShareComponent = () => {
const ShareComponent = () => {
  const options = {
    message: 'hello dear',
    url: 'http://localhost:254',
    email: 'priyasahu833242@gmail.com',
  };
  Share.open(options)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      err && console.log(err);
    });
};

// };

export default ShareComponent;
