import {
  ImageBackground,
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
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../Components/CustomText';
import PercentageCounter from '../Components/PercentageCounter';
import CustomButton from '../Components/CustomButton';

const TimmerSCreen = () => {
  return (
    <SafeAreaView style={styles.safe_are_view}>
      <ImageBackground
        source={require('../Assets/Images/Rectangle.png')}
        style={styles.image_background_view}
        imageStyle={styles.image_background_image}>
        <Header
          title={'Timmer'}
          showBack
          isRightIcon
          iconColor={Color.black}
          rightIconName={'dots-three-vertical'}
          rightIconFrom={Entypo}
        />
        <View
          style={{
            width: windowWidth * 0.9,
            alignItems: 'center',
            marginTop: moderateScale(30, 0.6),
          }}>
          <CustomText style={styles.heading}>Fasting Timer</CustomText>
          <CustomText style={styles.text}>
            Vivamus vulputate erat nec porta pellentesque. Aenean a urna mi.
            Integer gravida libero sed nibh.
          </CustomText>
        </View>
        <PercentageCounter percentage={60} />
        <CustomText style={styles.time}>05:68:85</CustomText>
        <CustomButton
          text={'End Fasting'}
          textColor={Color.grey}
          fontSize={moderateScale(14, 0.6)}
          bgColor={Color.peach}
          width={windowWidth * 0.8}
          style={styles.buttonStyle}
        />
        <View style={styles.button_view}>
          <View style={{alignItems: 'center'}}>
            <CustomText
              style={{fontSize: moderateScale(14, 0.6), color: Color.grey}}>
              Fasting Start
            </CustomText>
            <CustomText
              style={{
                fontSize: moderateScale(8, 0.6),
                color: Color.lightest_grey,
              }}>
              Yesterday 8 : 00 pm
            </CustomText>
            <CustomButton
              text={'edit'}
              textColor={Color.grey}
              fontSize={moderateScale(9, 0.6)}
              bgColor={Color.peach}
              width={windowWidth * 0.8}
              style={styles.edit_btn}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <CustomText
              style={{fontSize: moderateScale(14, 0.6), color: Color.grey}}>
              Fasting Start
            </CustomText>
            <CustomText
              style={{
                fontSize: moderateScale(8, 0.6),
                color: Color.lightest_grey,
              }}>
              Today 2 : 00 pm
            </CustomText>
            <CustomButton
              text={'edit'}
              textColor={Color.grey}
              fontSize={moderateScale(9, 0.6)}
              bgColor={Color.peach}
              width={windowWidth * 0.8}
              style={styles.edit_btn}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TimmerSCreen;

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
  header_view: {
    backgroundColor: Color.peach,
    width: windowWidth,
    height: windowHeight * 0.32,
    borderBottomRightRadius: windowWidth * 0.5,
    borderBottomLeftRadius: windowWidth * 0.5,
  },
  image_background_image: {
    width: '100%',
    height: '45%',
    top: -10,
  },
  image_background_view: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
    alignItems: 'center',
  },
  heading: {
    fontSize: moderateScale(20, 0.6),
    textAlign: 'center',
    color: Color.grey,
  },
  text: {
    fontSize: moderateScale(12, 0.6),
    textAlign: 'center',
    color: Color.grey,
  },
  time: {
    fontSize: moderateScale(32, 0.6),
    color: '#686868',
    marginTop: moderateScale(20, 0.6),
  },
  buttonStyle: {
    width: windowWidth * 0.8,
    height: moderateScale(55, 0.6),
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
  },
  button_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    marginTop: moderateScale(20, 0.6),
    alignItems: 'center',
  },
  edit_btn: {
    width: windowWidth * 0.2,
    height: moderateScale(20, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(10, 0.6),
    backgroundColor: Color.peach,
  },
});
