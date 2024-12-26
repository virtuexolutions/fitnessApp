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

const Progress = () => {
  const text = ['OFF-TRACK', 'imBalanced', 'Good', 'Great', 'Optimal'];
  return (
    <SafeAreaView style={styles.safe_are_view}>
      <ScrollView>
        <ImageBackground
          source={require('../Assets/Images/background2.png')}
          style={styles.image_background_view}
          imageStyle={styles.image_background_image}>
          <Header
            title={'Progress'}
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
            <CustomText style={styles.heading}>
              Your Weekly Life Score
            </CustomText>
            <CustomText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              tortor eros. Fusce sit amet tempus elit, non semper dolor.
            </CustomText>
          </View>
          <PercentageCounter percentage={60} text={'0/150'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: windowWidth * 0.8,
              alignItems: 'center',
              marginTop: moderateScale(10, 0.6),
            }}>
            {text.map(txt => {
              return (
                <CustomText
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: Color.grey,
                  }}>
                  {txt}
                </CustomText>
              );
            })}
          </View>
          <View
            style={{
              width: windowWidth * 0.9,
              alignItems: 'center',
              marginTop: moderateScale(30, 0.6),
              borderBottomWidth: 1,
              borderBottomColor: Color.peach,
              marginBottom: moderateScale(10, 0.6),
            }}>
            <CustomText
              style={[styles.heading, {fontSize: moderateScale(18, 0.6)}]}>
              Your Weekly Life Score
            </CustomText>
            <CustomText
              style={[styles.text, {marginBottom: moderateScale(10, 0.6)}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              tortor eros. Fusce sit amet tempus elit, non semper dolor.
            </CustomText>
          </View>
          <CustomText style={[styles.heading, {alignSelf: 'flex-start'}]}>
            Streaks
          </CustomText>
          <View style={styles.button_view}>
            <View style={{alignItems: 'center', width: '50%'}}>
              <CustomText
                style={{fontSize: moderateScale(15, 0.6), color: Color.grey}}>
                0 days
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.grey,
                }}>
                Current Stack
              </CustomText>
            </View>
            <View
              style={{
                width: 2,
                height: 40,
                backgroundColor: Color.grey,
              }}
            />
            <View style={{alignItems: 'center', width: '50%'}}>
              <CustomText
                style={{fontSize: moderateScale(15, 0.6), color: Color.grey}}>
                0 days
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.6),
                  color: Color.grey,
                }}>
                Longest Stack
              </CustomText>
            </View>
          </View>
          <CustomText
            style={[
              styles.heading,
              {alignSelf: 'flex-start', marginTop: moderateScale(10, 0.6)},
            ]}>
            Weight Goal
          </CustomText>
          <View style={styles.weight_container}>
            <View
              style={{
                width: moderateScale(50, 0.6),
                height: moderateScale(50, 0.6),
                backgroundColor: '#FAC2AB',
              }}
            />
            <CustomText style={styles.heading}>Goal Weight: 168 Ibs</CustomText>
            <CustomText style={[styles.text, {width: '90%'}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
              tortor eros. Fusce sit amet tempus elit, non semper dolor.
            </CustomText>
            <View
              style={{
                height: 1,
                width: windowWidth * 0.8,
                backgroundColor: '#FAC2AB',
              }}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Progress;

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
    width: windowWidth * 0.8,
    marginTop: moderateScale(10, 0.6),
    alignItems: 'center',
    backgroundColor: Color.peach,
    borderRadius: windowWidth,
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(15, 0.6),
    alignSelf: 'center',
  },
  edit_btn: {
    width: windowWidth * 0.2,
    height: moderateScale(20, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(10, 0.6),
    backgroundColor: Color.peach,
  },
  weight_container: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.22,
    backgroundColor: Color.peach,
    borderRadius: moderateScale(20, 0.6),
    marginTop: moderateScale(20, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
