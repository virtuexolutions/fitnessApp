import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import { windowHeight, windowWidth } from '../Utillity/utils';
import navigationService from '../navigationService';

const AvailableFood = () => {
  const [selected, setSelected] = useState(!true);
  const caebohdrates_item = [
    {
      id: 1,
      image: require('../Assets/Images/item_17.png'),
      text: 'Rice',
    },
    {
      id: 2,
      image: require('../Assets/Images/item_18.png'),
      text: 'Potato',
    },
    {
      id: 3,
      image: require('../Assets/Images/item_19.png'),

      text: 'Sweet Potato',
    },
    {
      id: 4,
      image: require('../Assets/Images/item_20.png'),
      text: 'Cassava',
    },
    {
      id: 5,
      image: require('../Assets/Images/item_21.png'),
      text: 'Lentils',
    },
    {
      id: 6,
      image: require('../Assets/Images/item_37.png'),
      text: 'Beans',
    },
  ];

  const protein__item = [
    {
      id: 1,
      image: require('../Assets/Images/item_36.png'),
      text: 'Seitan',
    },
    {
      id: 2,
      image: require('../Assets/Images/item_25.png'),
      text: 'Beef',
    },
    {
      id: 3,
      image: require('../Assets/Images/item_26.png'),
      text: 'Fish',
    },
    {
      id: 4,
      image: require('../Assets/Images/item_27.png'),
      text: 'Tuna',
    },
    {
      id: 5,
      image: require('../Assets/Images/item_28.png'),
      text: 'Shrimp',
    },
    {
      id: 6,
      image: require('../Assets/Images/item_29.png'),
      text: 'Egg',
    },
    {
      id: 7,
      image: require('../Assets/Images/item_30.png'),
      text: 'Turkey',
    },
    {
      id: 8,
      image: require('../Assets/Images/item_31.png'),
      text: 'Pork',
    },
    {
      id: 9,
      image: require('../Assets/Images/item_32.png'),
      text: 'Ham',
    },
    {
      id: 10,
      image: require('../Assets/Images/item_33.png'),
      text: 'Tofu',
    },
    {
      id: 11,
      image: require('../Assets/Images/item_34.png'),
      text: 'Peach',
    },
    {
      id: 12,
      image: require('../Assets/Images/item_35.png'),
      text: 'Soy Meat',
    },
    {
      id: 13,
      image: require('../Assets/Images/item_37.png'),
      text: 'Protein Powder',
    },
  ];
  return (
    <SafeAreaView style={styles.safe_are_view}>
      <Header
        showBack
        isRightIcon
        iconColor={Color.black}
        rightIconName={'dots-three-vertical'}
        rightIconFrom={Entypo}
        headerColor={Color.peach}
      />
      <ImageBackground
        source={require('../Assets/Images/background3.png')}
        style={styles.image_background_view}
        imageStyle={styles.image_background_image}></ImageBackground>
      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: moderateScale(70, 0.6),
              height: moderateScale(70, 0.6),
              borderRadius: windowWidth,
              alignSelf: 'center',
              marginTop: moderateScale(80, 0.6),
            }}>
            <CustomImage
              source={require('../Assets/Images/apple.png')}
              style={styles.imageStyle}
            />
          </View>
          <View
            style={{
              marginTop: moderateScale(40, 0.6),
            }}
          />
          <CustomText style={styles.heading}>
            Select your available foods
          </CustomText>
          <CustomText style={styles.text2}>
            Your meal plan depends on it
          </CustomText>
          <View style={styles.text_view}>
            <CustomText style={styles.heading}>Protien </CustomText>
            <CustomText style={styles.text}>Select All</CustomText>
          </View>
          <View
            style={{
              height: windowHeight * 0.35,
            }}>
            <FlatList
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
              }}
              keyExtractor={item => item.id}
              data={protein__item}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={styles.btn_view}>
                    <View style={styles.image_view}>
                      <CustomImage
                        source={item?.image}
                        style={styles.imageStyle}
                      />
                    </View>
                    <CustomText style={styles.btn_text}>
                      {item?.text}
                    </CustomText>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              width: windowWidth * 0.9,
              height: 1,
              backgroundColor: Color.darkGray,
              marginTop: moderateScale(5, 0.6),
            }}
          />
          <View style={styles.text_view}>
            <CustomText style={styles.heading}>Carbohydrates </CustomText>
            <CustomText style={styles.text}>Select All</CustomText>
          </View>
          <FlatList
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'flex-start',
            }}
            style={{
              marginTop: moderateScale(10, 0.6),
            }}
            keyExtractor={item => item.id}
            data={caebohdrates_item}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.btn_view}>
                  <View style={styles.image_view}>
                    <CustomImage
                      source={item?.image}
                      style={styles.imageStyle}
                    />
                  </View>
                  <CustomText style={styles.btn_text}>{item?.text}</CustomText>
                </TouchableOpacity>
              );
            }}
          />
          <CustomButton
            text={'Continue'}
            textColor={Color.grey}
            fontSize={moderateScale(15, 0.6)}
            bgColor={Color.peach}
            width={windowWidth * 0.8}
            style={[styles.buttonStyle]}
            textTransform={'Uppercase'}
            onPress={() => navigationService.navigate('PickItems2')}
          />
          <View
            style={{
              marginBottom: moderateScale(60, 0.6),
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AvailableFood;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
  },
  scroll_view: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.peach,
  },
  // main_view: {
  //   paddingHorizontal: moderateScale(15, 0.6),
  //   height: windowHeight * 0.9,
  // },
  heading: {
    fontSize: moderateScale(18, 0.6),
    textAlign: 'center',
    color: Color.darkGray,
    fontWeight: '700',
  },
  text: {
    fontSize: moderateScale(12, 0.6),
    textAlign: 'center',
    color: Color.black,
  },
  text2: {
    fontSize: moderateScale(13, 0.6),
    textAlign: 'center',
    color: Color.darkGray,
    marginTop: moderateScale(7, 0.6),
  },
  header_view: {
    backgroundColor: Color.peach,
    width: windowWidth,
    height: windowHeight * 0.32,
    borderBottomRightRadius: windowWidth * 0.5,
    borderBottomLeftRadius: windowWidth * 0.5,
  },
  image_background_view: {
    width: windowWidth,
    height: windowHeight * 0.8,
    backgroundColor: Color.white,
    alignItems: 'center',
  },
  image_background_image: {
    width: '100%',
    height: '35%',
    top: -15,
  },
  main_view: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    top: 50,
    alignItems: 'center',
  },
  buttonStyle: {
    width: windowWidth * 0.8,
    height: moderateScale(50, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(15, 0.6),
    backgroundColor: Color.peach,
    borderWidth: 0.8,
    borderColor: '#FEF3DD',
    shadowColor: Color.peach,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    // position: 'absolute',
    // bottom: 0,
  },
  button_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.8,
    marginTop: moderateScale(10, 0.6),
    alignItems: 'center',
    backgroundColor: Color.peach,
    borderRadius: windowWidth,
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(15, 0.6),
    alignSelf: 'center',
  },
  text_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.9,
    alignItems: 'center',
    marginTop: moderateScale(10, 0.6),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: windowWidth,
  },
  btn_view: {
    paddingHorizontal: moderateScale(15, 0.6),
    backgroundColor: Color.peach,
    paddingVertical: moderateScale(10, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(10, 0.6),
    borderRadius: windowWidth,
    marginHorizontal: 5,
  },
  image_view: {
    width: moderateScale(20, 0.6),
    height: moderateScale(20, 0.6),
  },
  btn_text: {
    fontSize: moderateScale(12, 0.6),
    marginLeft: moderateScale(3, 0.6),
    color: Color.darkGray,
  },
});
