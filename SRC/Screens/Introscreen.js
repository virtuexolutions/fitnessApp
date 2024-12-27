import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';

const Introscreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.bgcImageStyle}
        source={require('../Assets/Images/introbgcimage.png')}
        imageStyle={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.textStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(13, 0.6),
                color: Color.grey,
              }}>
              Let's Get To Know You Better!
            </CustomText>
          </View>
          <View style={styles.secondHeading}>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(38, 0.6),
                color: Color.darkGray,
                lineHeight: 43,
              }}>
              Over 500,000 5 Star Ratings
            </CustomText>
          </View>
          <View style={styles.commentBox}>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(18, 0.6),
                color: Color.darkGray,
              }}>
              I Still Eat Food I Love
            </CustomText>
            <CustomText style={{
                fontSize: moderateScale(13, 0.6),
                color: Color.grey,
                width:windowWidth*0.86,textAlign:'center',
                lineHeight:17,marginTop:moderateScale(9,0.6)
              }}>
              I quickly learned which foods I should eat more and which I should
              eat less. I also tried new dishes and lost weight without feeling
              deprived. I still eat food I love. The app I needed for an easier
              life.
            </CustomText>
          </View>
          <CustomButton style={styles.nextButton} text={'Next'}
          textColor={Color.grey} fontSize={moderateScale(14,0.6)}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Introscreen;

const styles = StyleSheet.create({
  bgcImageStyle: {
    width: windowWidth,
    height: windowHeight,
  },
  container: {
    alignItems: 'center',
  },
  textStyle: {
    marginTop: moderateScale(40, 0.6),
    // backgroundColor:'red'
  },
  secondHeading: {
    width: windowWidth * 0.67,
    height: windowHeight * 0.49,
    marginTop: moderateScale(5, 0.6),
    // padding:20,
    // backgroundColor:'red',
  },
  commentBox: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.22,
    backgroundColor: Color.white,
    borderRadius: moderateScale(15, 0.6),
    borderWidth: 2,
    borderColor: Color.peach,
    alignItems: 'center',
    justifyContent:'center',
    opacity:0.86
    // paddingVertical:moderateScale(20,0.6)
  },
  nextButton:{
      width:windowWidth*0.85,
      height:moderateScale(50,0.6),
    //   borderWidth:1.5,
      borderRadius:moderateScale(25,0.6),
      marginTop:moderateScale(15,0.6),
    //   borderColor:Color.grey,
      backgroundColor:Color.peach
      // bottom:0,
      // position:'absolute'
    }
});
