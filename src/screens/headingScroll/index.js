import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {FONTS, COLORS} from './../../constants';
import {data} from './../../constants';
import styles from './styles';
import {GetCategoryApi} from './../../redux/actions/homeActions';
import {connect} from 'react-redux';

const HeadingScroll = ({navigation, getCategory, GetCategoryApi, text}) => {
  const [current, setCurrent] = useState(0);

  return (
    <View style={styles.innercontain}>
      <FlatList
        // data={getCategory?.data}
        data={data?.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => setCurrent(index)}
            activeOpacity={0.7}>
            <Text
              key={item?.id}
              style={{
                ...styles.scrollText,
                borderColor: index === current ? COLORS.primary : COLORS.black,
                color: index === current ? COLORS.white : COLORS.gray30,
              }}>
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/*{data.HeadingScrollList[current].text === 'फोटो' ? (
        <AllComponent />
      ) : null} */}
    </View>
  );
};

const mapStateToProps = state => ({
  getCategory: state.home.getCategory,
});

const mapDispatchToProps = {
  GetCategoryApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadingScroll);
