import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import { windowHeight, windowWidth } from '../Utillity/utils';

import { Icon } from 'native-base';
import { moderateScale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import navigationService from '../navigationService';

const Socialscreen = () => {
  const [selected, setSelected] = useState('Appstore');
  const [activeButton, setActivebutton] = useState(true);
  const socialList = [
    {
      id: 1,
      name: 'Appstore',
      isRightIcon: false,
    },
    {
      id: 2,
      name: 'Tiktok',
      isRightIcon: true,
    },
    {
      id: 3,
      name: 'Google',
      isRightIcon: false,
    },
    {
      id: 4,
      name: 'Recommendation From Someone Else',
      isRightIcon: true,
    },
    {
      id: 5,
      name: 'Instagram',
      isRightIcon: true,
    },
    {
      id: 6,
      name: 'Facebook',
      isRightIcon: true,
    },
    {
      id: 7,
      name: 'Youtube',
      isRightIcon: true,
    },
    {
      id: 8,
      name: 'Other',
      isRightIcon: true,
    },
  ];
  return (
    // <SafeAreaView style={{height:windowHeight,backgroundColor:Color.white}}>
    <>
      <Header
        showBack
        isRightIcon
        iconColor={Color.black}
        rightIconName={'dots-three-vertical'}
        rightIconFrom={Entypo}
        headerColor={'#FBD7BD'}
      />
      <ImageBackground
        imageStyle={{
          height: '100%',
          width: '100%',
          //   top: moderateScale(-30, 0.3),
        }}
        source={require('../Assets/Images/Rectangleimage.png')}
        style={styles.bgcImage}>
        <CustomText isBold style={styles.genderText}></CustomText>
      </ImageBackground>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: Color.white,
          paddingBottom: moderateScale(25, 0.3),
        }}>
        <FlatList
          contentContainerStyle={{
            //   marginTop: moderateScale(80, 0.3),
            //  backgroundColor:Color.green,
            alignItems: 'center',
            // paddingVertical:15
            // paddingBottom:moderateScale(20,0.6),
          }}
          data={socialList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelected(item?.name);
                }}
                activeOpacity={0.8}
                style={[
                  selected === item?.name
                    ? {backgroundColor: Color.peach}
                    : {
                        backgroundColor: Color.white,
                        borderWidth: 0.8,
                        borderColor: Color.lightest_grey,
                      },
                  styles.nextButton,
                ]}>
                <CustomText
                  style={{
                    fontSize: moderateScale(13, 0.3),
                    color: Color.grey,
                    width: windowWidth * 0.76,
                    // backgroundColor:'green'
                  }}>
                  {item?.name}
                </CustomText>
                {item.isRightIcon === true && (
                  <Icon
                    as={Entypo}
                    name="chevron-small-down"
                    size={moderateScale(17, 0.6)}
                    color={Color.grey}
                  />
                )}
              </TouchableOpacity>
            );
          }}
        />

        <CustomButton
          onPress={() => {
            setActivebutton(true);
            navigationService.navigate('ChooseMealsVariety');
          }}
          style={[
            activeButton
              ? {backgroundColor: Color.peach}
              : {backgroundColor: Color.white},
            {
              borderWidth: 1,
              borderColor: Color.lightest_grey,
            },
            styles.bottomButton,
          ]}
          text={'Continue'}
          textColor={Color.grey}
          fontSize={moderateScale(14, 0.6)}
        />
        <CustomButton
          onPress={() => {
            setActivebutton(false);
          }}
          style={[
            activeButton == false
              ? {backgroundColor: Color.peach}
              : {backgroundColor: Color.white},
            {
              borderWidth: 1,
              borderColor: Color.lightest_grey,
            },
            styles.bottomButton,
          ]}
          text={'Dismiss'}
          textColor={Color.grey}
          fontSize={moderateScale(14, 0.6)}
        />
      </ScrollView>
    </>
    //  </SafeAreaView>
  );
};

export default Socialscreen;

const styles = StyleSheet.create({
  bgcImage: {
    width: windowWidth,
    height: windowHeight * 0.25,
    backgroundColor: Color.white,
    alignItems: 'center',
    // bottom:moderateScale(20,0.3)
    // paddingHorizontal:moderateScale(0,0.6)
  },
  genderText: {
    fontSize: moderateScale(18, 0.6),
    color: Color.grey,
    width: windowWidth * 0.85,
    marginTop: moderateScale(10, 0.6),
    alignSelf: 'center',
    textAlign: 'center',
  },
  nextButton: {
    width: windowWidth * 0.88,
    height: moderateScale(40, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(15, 0.6),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   backgroundColor: Color.peach,
  },
  bottomButton: {
    width: windowWidth * 0.88,
    height: moderateScale(50, 0.6),

    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(15, 0.6),
    // bottom: moderateScale(10, 0.3),
    // backgroundColor: Color.peach,
  },
});
