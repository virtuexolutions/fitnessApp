import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import navigationService from '../navigationService';

const Startedscreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        imageStyle={{width: '100%', height: '100%', resizeMode: 'stretch'}}
        source={require('../Assets/Images/bgcimage.png')}>
        <View style={styles.Container}>
          <View style={styles.bluImage}>
            <CustomImage
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
              source={require('../Assets/Images/bluwhite.png')}
            />
          </View>
          <CustomText style={styles.textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            tortor eros. Fusce sit amet tempus elit non semper. consectetur
            adipiscing elit. Cras vel
          </CustomText>
          <CustomButton
            style={styles.buttonStyle}
            text={'Get Started'}
            fontSize={moderateScale(15, 0.6)}
            textColor={Color.grey}
            onPress={() => navigationService.navigate('IntroScreen')}
          />
          <View style={styles.loginTextStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(13, 0.6),
                color: Color.grey,
              }}>
              Already Have An Account?
            </CustomText>
            <TouchableOpacity activeOpacity={0.55}>
              <CustomText
                isBold={true}
                style={{
                  fontSize: moderateScale(13, 0.6),
                  color: Color.grey,
                  left: moderateScale(5, 0.3),
                }}>
                Login
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomText}>
          <CustomText
            style={{
              fontSize: moderateScale(12, 0.6),
              color: Color.grey,
              textAlign: 'center',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            laoreet urna vel hendrerit commodo.
          </CustomText>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Startedscreen;

const styles = StyleSheet.create({
  Container: {
    // alignSelf:'center'
    // width: windowWidth,
    height: windowHeight * 0.91,
    // justifyContent:'center',
    // bottom: moderateScale(190, 0.6),
    // backgroundColor: 'red',
    // paddingVertical: moderateScale(20, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bluImage: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.12,
  },
  textStyle: {
    fontSize: moderateScale(12, 0.6),
    color: Color.grey,
    width: windowWidth * 0.85,
    textAlign: 'center',
    marginTop: moderateScale(20, 0.6),
    lineHeight: moderateScale(15, 0.3),
    // alignItems:'center',
    // backgroundColor:'green'
  },
  buttonStyle: {
    width: windowWidth * 0.89,
    height: moderateScale(52, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(15, 0.6),
    backgroundColor: Color.white,
  },
  loginTextStyle: {
    flexDirection: 'row',
    marginTop: moderateScale(15, 0.6),
    // letterSpacing:
  },
  bottomText: {
    width: windowWidth * 0.85,

    // backgroundColor:'red',
    alignSelf: 'center',
    // bottom:moderateScale(100,0.6)
    // position:'absolute'
  },
});
