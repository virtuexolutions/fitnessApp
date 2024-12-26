import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {TouchableOpacity} from 'react-native';
import CustomImage from '../Components/CustomImage';

const DietPlanScreen = () => {
  const list = [
    {
      id: 1,
      text: 'Eaten',
      value: '00',
    },
    {
      id: 2,
      text: 'Cal Left',
      value: '00',
    },
    {
      id: 3,
      text: 'Burned',
      value: '00',
    },
  ];

  const diet_plan = [
    {
      id: 1,
      heading: 'Breakfast',
      image: require('../Assets/Images/breakfast.png'),
      text: 'Vestibulum diam leo dictum diet vitae tincidunt feugiat, commodo sed leo.',
    },
    {
      id: 2,
      heading: 'Breakfast',
      image: require('../Assets/Images/lunch.png'),
      text: 'Vestibulum diam leo dictum diet vitae tincidunt feugiat, commodo sed leo.',
    },
    {
      id: 3,
      heading: 'Breakfast',
      image: require('../Assets/Images/dinner.png'),
      text: 'Vestibulum diam leo dictum diet vitae tincidunt feugiat, commodo sed leo.',
    },
    {
      id: 4,
      heading: 'Breakfast',
      image: require('../Assets/Images/snacks.png'),
      text: 'Vestibulum diam leo dictum diet vitae tincidunt feugiat, commodo sed leo.',
    },
  ];

  return (
    <SafeAreaView style={styles.safe_are_view}>
      <ScrollView style={styles.scroll_view}>
        <View style={styles.header_view}>
          <Header
            headerColor={'transparent'}
            isImage
            cart
            isRightIcon
            islastIcon
          />
          <CustomText
            style={{
              width: '80%',
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: moderateScale(10, 0.6),
              color: Color.lightGrey,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            tortor eros. Fusce sit amet tempus elit, non semper dolor.
          </CustomText>
          <View style={styles.counter_main_view}>
            {list.map(item => {
              return (
                <View
                  style={
                    item?.id === 2
                      ? styles.center_counter_view
                      : styles.counter_view
                  }>
                  <View
                    style={[
                      styles.counter_sub_view,
                      {
                        width:
                          item?.id === 2
                            ? windowWidth * 0.41
                            : windowWidth * 0.17,
                        height:
                          item?.id === 2
                            ? windowWidth * 0.41
                            : windowWidth * 0.17,
                      },
                    ]}>
                    <CustomText
                      isBold
                      style={{
                        fontSize:
                          item?.id === 2
                            ? moderateScale(28, 0.6)
                            : moderateScale(18, 0.6),
                        color: Color.darkGray,
                      }}>
                      {item?.value}
                    </CustomText>
                    <CustomText
                      style={{
                        fontSize:
                          item?.id === 2
                            ? moderateScale(20, 0.6)
                            : moderateScale(10, 0.6),
                        color: Color.darkGray,
                      }}>
                      {item?.text}
                    </CustomText>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <FlatList
          data={diet_plan}
          style={{
            top: 50,
            paddingHorizontal: moderateScale(12, 0.6),
            marginBottom: moderateScale(20, 0.6),
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.list_view,
                  item?.id === 1
                    ? {
                        borderColor: Color.peach,
                        shadowOffset: {
                          width: 12,
                          height: 17,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.0,
                        elevation: 24,
                        shadowColor: Color.peach,
                      }
                    : {
                        borderColor: Color.lightest_grey,
                      },
                ]}>
                <View style={styles.list_image_view}>
                  <CustomImage style={styles.image} source={item?.image} />
                </View>
                <View
                  style={{
                    marginLeft: moderateScale(10, 0.6),
                  }}>
                  <CustomText style={styles.heading}>{item.heading}</CustomText>
                  <CustomText style={styles.text}>{item.text}</CustomText>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DietPlanScreen;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
  },
  scroll_view: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.white,
  },
  header_view: {
    backgroundColor: Color.peach,
    width: windowWidth,
    height: windowHeight * 0.32,
    borderBottomRightRadius: windowWidth * 0.5,
    borderBottomLeftRadius: windowWidth * 0.5,
  },
  counter_view: {
    backgroundColor: Color.white,
    borderRadius: windowWidth,
    borderColor: Color.peach,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
  },
  counter_main_view: {
    flexDirection: 'row',
    width: windowWidth,
    height: windowHeight * 0.3,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
    bottom: 20,
  },
  center_counter_view: {
    backgroundColor: Color.white,
    borderRadius: windowWidth,
    borderColor: Color.peach,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FAC2AB',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
  },
  counter_sub_view: {
    borderStyle: 'dashed',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 100,
    borderColor: Color.peach,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list_view: {
    backgroundColor: Color.white,
    height: windowWidth * 0.3,
    marginTop: moderateScale(10, 0.6),
    borderRadius: windowWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(15, 0.6),
    flexDirection: 'row',
    borderWidth: 1,
  },
  list_image_view: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: windowWidth,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heading: {
    fontSize: moderateScale(15, 0.6),
    color: Color.darkGray,
  },
  text: {
    fontSize: moderateScale(12, 0.6),
    width: '60%',
    color: Color.lightGrey,
  },
});
