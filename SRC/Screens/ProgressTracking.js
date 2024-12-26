import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';

const ProgressTracking = () => {
  return (
    <SafeAreaView style={styles.safe_are_view}>
      <ImageBackground
        source={require('../Assets/Images/Rectangle.png')}
        style={styles.image_background_view}
        imageStyle={styles.image_background_image}>
        <Header
          title={'Progress Tracking'}
          showBack
          isRightIcon
          iconColor={Color.black}
          rightIconName={'dots-three-vertical'}
          rightIconFrom={Entypo}
        />
        <View style={styles.image_view}>
          <CustomImage
            style={styles.image}
            source={require('../Assets/Images/progress.png')}
          />
        </View>
        <CustomButton
          text={'End Fasting'}
          textColor={Color.grey}
          fontSize={moderateScale(14, 0.6)}
          bgColor={Color.peach}
          width={windowWidth * 0.8}
          style={styles.buttonStyle}
        />
        <CustomButton
          text={'End Fasting'}
          textColor={Color.grey}
          fontSize={moderateScale(14, 0.6)}
          bgColor={Color.peach}
          width={windowWidth * 0.8}
          style={[
            styles.buttonStyle,
            {
              backgroundColor: Color.white,
              borderWidth: 2,
            },
          ]}
        />
        <CustomButton
          text={'End Fasting'}
          textColor={Color.grey}
          fontSize={moderateScale(14, 0.6)}
          bgColor={Color.peach}
          width={windowWidth * 0.8}
          style={[
            styles.buttonStyle,
            {
              backgroundColor: Color.white,
              borderWidth: 2,
            },
          ]}
        />
        <View
          style={{
            width: windowWidth * 0.9,
            height: windowHeight * 0.25,
            marginTop: moderateScale(30, 0.6),
          }}>
          <CustomImage
            source={require('../Assets/Images/graph.png')}
            style={styles.image}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProgressTracking;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
  },
  scroll_view: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#fafafa',
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
    height: '20%',
    top: -10,
  },
  image_background_view: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
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
  },
  image_view: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.55,
    backgroundColor: 'red',
    borderRadius: moderateScale(20, 0.6),
    marginBottom: moderateScale(20, 0.6),
    marginTop: moderateScale(10, 0.6),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(20, 0.6),
    resizeMode: 'cover',
  },
});
