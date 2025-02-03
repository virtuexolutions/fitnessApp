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

const AddSomeInformation = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        imageStyle={{width: '100%', height: '100%', resizeMode: 'stretch'}}
        source={require('../Assets/Images/background3.png')}>
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
            Blu want your some imformation for starting your healthcare journey
          </CustomText>
          <CustomButton
            style={styles.buttonStyle}
            text={'Get Started'}
            fontSize={moderateScale(15, 0.6)}
            textColor={Color.grey}
            onPress={() => navigationService.navigate('WeightTrackerScreen')}
          />
          <CustomButton
            style={styles.buttonStyle}
            text={'Skip'}
            fontSize={moderateScale(15, 0.6)}
            textColor={Color.grey}
            onPress={() => navigationService.navigate('TabNavigation')}
          />
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

export default AddSomeInformation;

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
    fontSize: moderateScale(15, 0.6),
    color: Color.grey,
    width: windowWidth * 0.85,
    textAlign: 'center',
    marginTop: moderateScale(20, 0.6),
    lineHeight: moderateScale(15, 0.3),
    fontWeight: 'bold',
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
