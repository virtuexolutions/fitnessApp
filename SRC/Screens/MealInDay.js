import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import navigationService from '../navigationService';

const MealInDay = () => {
  return (
    <SafeAreaView style={styles.safe_are_view}>
      <ImageBackground
        source={require('../Assets/Images/background3.png')}
        style={styles.image_background_view}
        imageStyle={styles.image_background_image}>
        <Header
          showBack
          isRightIcon
          iconColor={Color.black}
          rightIconName={'dots-three-vertical'}
          rightIconFrom={Entypo}
        />
        <ScrollView style={{width: windowWidth, height: windowHeight}}>
          <View style={styles.main_view}>
            <View
              style={{
                width: moderateScale(70, 0.6),
                height: moderateScale(70, 0.6),
                borderRadius: windowWidth,
                alignSelf: 'center',
              }}>
              <CustomImage
                source={require('../Assets/Images/dish_icon.png')}
                style={styles.imageStyle}
              />
            </View>
            <View
              style={{
                marginTop: moderateScale(40, 0.6),
              }}
            />
            <CustomText style={styles.heading}>
              How many meals per day do you want?
            </CustomText>
            <CustomText style={styles.text2}>
              select at least 2 main meals
            </CustomText>
            <TouchableOpacity style={styles.button_view}>
              <View style={styles.round}>
                <View style={styles.inner_round}></View>
              </View>
              <CustomText style={styles.btn_text}>Breakfast</CustomText>
              <CustomText style={[styles.text2, {marginTop: 0}]}>
                Main
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_view}>
              <View style={styles.round}>
                <View style={styles.inner_round}></View>
              </View>
              <CustomText style={styles.btn_text}>Lunch</CustomText>
              <CustomText style={[styles.text2, {marginTop: 0}]}>
                Main
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_view}>
              <View style={styles.round}>
                <View style={styles.inner_round}></View>
              </View>
              <CustomText style={styles.btn_text}>Dinner</CustomText>
              <CustomText style={[styles.text2, {marginTop: 0}]}>
                Main
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button_view,
                {
                  backgroundColor: Color.white,
                  borderWidth: 1,
                  borderColor: Color.lightest_grey,
                },
              ]}>
              <Icon
                name="plus"
                as={AntDesign}
                size={moderateScale(16, 0.6)}
                color={Color.grey}
              />
              <CustomText style={styles.btn_text}>Snack</CustomText>
              <CustomText style={[styles.text2, {marginTop: 0}]}>
                Main
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button_view,
                {
                  backgroundColor: Color.white,
                  borderWidth: 1,
                  borderColor: Color.lightest_grey,
                },
              ]}>
              <Icon
                name="plus"
                as={AntDesign}
                size={moderateScale(16, 0.6)}
                color={Color.grey}
              />
              <CustomText style={styles.btn_text}>Snack 2</CustomText>
              <CustomText style={[styles.text2, {marginTop: 0}]}>
                Main
              </CustomText>
            </TouchableOpacity>
            <CustomText
              style={[
                styles.text2,
                {
                  marginTop: moderateScale(20, 0.6),
                },
              ]}>
              don't worry you can change this later
            </CustomText>
            <CustomButton
              text={'Continue'}
              textColor={Color.grey}
              fontSize={moderateScale(15, 0.6)}
              bgColor={Color.peach}
              width={windowWidth * 0.8}
              style={[styles.buttonStyle]}
              textTransform={'Uppercase'}
              onPress={() => navigationService.navigate('RemaindersScreen')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MealInDay;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
  },
  scroll_view: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.peach,
  },
  main_view: {
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(20, 0.6),
    height: windowHeight * 0.9,
  },
  image_background_view: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  image_background_image: {
    width: '100%',
    height: '45%',
    top: -120,
  },
  round: {
    width: 15,
    height: 15,
    borderRadius: moderateScale(100, 0.6),
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_round: {
    width: 8,
    height: 8,
    borderRadius: moderateScale(100, 0.6),
    backgroundColor: Color.darkGray,
  },
  heading: {
    fontSize: moderateScale(18, 0.6),
    textAlign: 'center',
    color: Color.darkGray,
    fontWeight: '700',
    width: '70%',
    alignSelf: 'center',
    textTransform: 'none',
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
    position: 'absolute',
    bottom: 10,
  },
  button_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.9,
    marginTop: moderateScale(10, 0.6),
    alignItems: 'center',
    backgroundColor: Color.peach,
    borderRadius: windowWidth,
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(15, 0.6),
    alignSelf: 'center',
    adowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  text_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.9,
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    // backgroundColor:'green'
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
    fontSize: moderateScale(14, 0.6),
    marginLeft: moderateScale(3, 0.6),
    color: Color.darkGray,
    width: '70%',
  },
});
