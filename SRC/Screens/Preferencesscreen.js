import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';

const Preferencesscreen = () => {
  const [selected, setSelected] = useState(
    "I Don't Have Any Specific Preferences",
  );

  return (
    <SafeAreaView style={styles.safe_area}>
      <Header
        showBack
        isRightIcon
        iconColor={Color.black}
        rightIconName={'dots-three-vertical'}
        rightIconFrom={Entypo}
        headerColor={Color.peach}
      />
      <ImageBackground
        imageStyle={{
          height: '30%',
          width: windowWidth,
        }}
        source={require('../Assets/Images/Rectangleimage.png')}
        style={styles.bgcImage}>
        <CustomText isBold style={styles.genderText}>
          What are your food preferences?
        </CustomText>
        <View style={{marginTop: moderateScale(160, 0.6)}}>
          <TouchableOpacity
            onPress={() => {
              setSelected("I Don't Have Any Specific Preferences");
            }}
            style={[
              selected === "I Don't Have Any Specific Preferences"
                ? {backgroundColor: Color.peach}
                : {
                    backgroundColor: Color.white,
                  },
              styles.buttonStyle,
            ]}>
            <CustomText
              style={{
                fontSize: moderateScale(12, 0.6),
                color: Color.grey,
              }}>
              I Don't Have Any Specific Preferences
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected("I Am Pescatarian (I'm Vegetarian But I Eat Fish)");
            }}
            style={[
              selected === "I Am Pescatarian (I'm Vegetarian But I Eat Fish)"
                ? {backgroundColor: Color.peach}
                : {
                    backgroundColor: Color.white,
                  },
              styles.buttonStyle,
            ]}>
            <CustomText
              style={{
                fontSize: moderateScale(12, 0.6),
                color: Color.grey,
                width: windowWidth * 0.85,
              }}>
              I Am Pescatarian (I'm Vegetarian But I Eat Fish)
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected('I Am Vegetarian');
            }}
            style={[
              selected === 'I Am Vegetarian'
                ? {backgroundColor: Color.peach}
                : {
                    backgroundColor: Color.white,
                  },
              styles.buttonStyle,
            ]}>
            <CustomText
              style={{
                fontSize: moderateScale(12, 0.6),
                color: Color.grey,
              }}>
              I Am Vegetarian
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected('I Am Vegan');
            }}
            style={[
              selected === 'I Am Vegan'
                ? {backgroundColor: Color.peach}
                : {
                    backgroundColor: Color.white,
                  },
              styles.buttonStyle,
            ]}>
            <CustomText
              style={{
                fontSize: moderateScale(12, 0.6),
                color: Color.grey,
              }}>
              I Am Vegan
            </CustomText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: moderateScale(100, 0.6),
          }}
        />
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

export default Preferencesscreen;

const styles = StyleSheet.create({
  bgcImage: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
    alignItems: 'center',
    // paddingHorizontal:moderateScale(0,0.6)
  },
  safe_area: {
    width: windowWidth,
    height: windowWidth,
  },
  genderText: {
    fontSize: moderateScale(18, 0.6),
    color: Color.grey,
    width: windowWidth * 0.85,
    marginTop: moderateScale(10, 0.6),
    alignSelf: 'center',
    textAlign: 'center',
  },
  // nextButton: {
  //   width: windowWidth * 0.88,
  //   height: moderateScale(50, 0.6),
  //   borderRadius: moderateScale(25, 0.6),
  //   marginTop: moderateScale(15, 0.6),
  //   backgroundColor: Color.peach,
  // },
  buttonStyle: {
    width: windowWidth * 0.88,
    height: moderateScale(50, 0.6),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(10, 0.6),
    borderWidth: 1,
    borderColor: Color.lightest_grey,
    // backgroundColor: Color.peach,
  },
  nextButton: {
    width: windowWidth * 0.88,
    height: moderateScale(50, 0.6),
    borderRadius: moderateScale(25, 0.6),
    backgroundColor: Color.peach,
  },
});
