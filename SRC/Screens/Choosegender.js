import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import {mode} from 'native-base/lib/typescript/theme/tools';
import {Icon} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../Components/CustomButton';

const Choosegender = () => {
    const [selected,setisSelected] = useState('Male')
  return (
    <SafeAreaView>
      <ImageBackground
        imageStyle={{
          height: '40%',
          width: windowWidth,
        }}
        source={require('../Assets/Images/bottomroundColor.png')}
        style={styles.bgcImage}>
        <Header
          showBack
          isRightIcon
          iconColor={Color.black}
          rightIconName={'dots-three-vertical'}
          rightIconFrom={Entypo}
        />
        <CustomText isBold style={styles.genderText}>
          What sex should we use to calculate your recommendations?
        </CustomText>
        <View style={styles.buttonStyle}>
          <TouchableOpacity onPress={()=>{
            setisSelected('Male')
          }} activeOpacity={0.9} style={[selected === 'Male' ?  {borderColor:Color.peach} : {
            borderColor:Color.veryLightGray
          } ,styles.genderButton]}>
            <View style={styles.imageStyle}>
              <CustomImage
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
                source={require('../Assets/Images/Maleimage.png')}
              />
            </View>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(24, 0.6),
                color: Color.grey,
                marginLeft: moderateScale(20, 0.6),
              }}>
              Male
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>{
            setisSelected('Female')
          }}  activeOpacity={0.9} style={[selected === 'Female' ? {borderColor:Color.peach} : {
            borderColor:Color.veryLightGray
          } ,styles.genderButton]}>
            <View style={styles.imageStyle}>
              <CustomImage
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
                source={require('../Assets/Images/Femaleimage.png')}
              />
            </View>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(24, 0.6),
                color: Color.grey,
                marginLeft: moderateScale(20, 0.6),
              }}>
              Female
            </CustomText>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomText}>
          <CustomText
            style={{
              fontSize: moderateScale(12, 0.6),
              color: Color.grey,
            }}>
            Why do we need this information?
          </CustomText>
        </View>
        <CustomButton
          style={styles.nextButton}
          text={'Next'}
          textColor={Color.grey}
          fontSize={moderateScale(14, 0.6)}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Choosegender;

const styles = StyleSheet.create({
  bgcImage: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
    // paddingHorizontal:moderateScale(0,0.6)
  },
  header: {
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(15, 0.6),
  },
  genderText: {
    fontSize: moderateScale(18, 0.6),
    color: Color.grey,
    width: windowWidth * 0.85,
    marginTop: moderateScale(10, 0.6),
    alignSelf: 'center',
    textAlign: 'center',
  },
  genderButton: {
    width: windowWidth * 0.86,
    height: windowHeight * 0.13,
    borderWidth: 1.5,
    // borderColor: Color.peach,
    borderRadius: moderateScale(47, 0.6),

    alignItems: 'center',
    paddingHorizontal: moderateScale(15, 0.6),
    flexDirection: 'row',
    // backgroundColor:'green'
  },
  buttonStyle: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.43,
    // backgroundColor:'red',
    marginTop: moderateScale(165, 0.6),
    alignItems: 'center',
    gap: moderateScale(10, 0.6),
    // justifyContent:'center',
    alignSelf: 'center',
  },
  imageStyle: {
    width: windowWidth * 0.19,
    height: windowHeight * 0.1,
  },
  bottomText: {
    alignSelf: 'center',
   
  },
  nextButton: {
    width: windowWidth * 0.85,
    height: moderateScale(50, 0.6),

    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(15, 0.6),

    backgroundColor: Color.peach,
  },
});
