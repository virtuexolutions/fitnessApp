import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {Box, Slider} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import navigationService from '../navigationService';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useDispatch, useSelector} from 'react-redux';
import {setUserData} from '../Store/slices/common';

const HealthPlanOnboarding = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);

  const profileData = useSelector(state => state.commonReducer.profileData);
  console.log('🚀 ~ HealthPlanOnboarding ~ profileData:', profileData);

  const updateUserProfile = async () => {
    const url = 'user-profile';
    const response = await Post(url, profileData, apiHeader(token));
    console.log('🚀 ~ updateUserProfile ~ response:', response?.data);
    if (response != undefined) {
      dispatch(setUserData(response?.data));
    }
  };

  return (
    <ImageBackground
      style={styles.mainScreen}
      //    imageStyle={styles.image}
      source={require('../Assets/Images/bg2.png')}>
      <View style={styles.content}>
        <CustomText style={styles.headingText} isBold>
          We're Setting Everything Up For You
        </CustomText>
        <CustomText style={styles.subHeadingText}>
          Customizing Your Health Plan.....
        </CustomText>
        <CustomButton
          onPress={() => {
            // onPhoneNumberPressed();
            updateUserProfile();
            // navigationService.navigate('TabNavigation');
          }}
          text={'Next'}
          fontSize={moderateScale(13, 0.3)}
          textColor={'#7B7B7B'}
          // borderWidth={0.8}
          // borderColor={Color.black}
          borderRadius={moderateScale(30, 0.3)}
          width={windowWidth * 0.85}
          height={windowHeight * 0.07}
          marginTop={moderateScale(10, 0.3)}
          bgColor={Color.white}
          textTransform={'capitalize'}
        />

        <Slider
          w={windowWidth * 0.9}
          marginTop={moderateScale(12, 0.2)}
          sliderTrackHeight={windowHeight * 0.009}
          defaultValue={40}
          minValue={0}
          maxValue={100}
          step={1}
          colorScheme="orange">
          <Slider.Track bg="#FFFFFF" h={3}>
            <Slider.FilledTrack bg="#FFFFFF" />
          </Slider.Track>
          <Slider.Thumb>
            <Box h={4} w={8} rounded="full" bg="gray.500" shadow={2} />
          </Slider.Thumb>
        </Slider>
      </View>
    </ImageBackground>
  );
};

export default HealthPlanOnboarding;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    // justifyContent:"flex-end",
    // flexDirection:"column"
  },
  headingText: {
    textAlign: 'center',
    width: windowWidth * 0.9,
    // letterSpacing:,
    fontSize: moderateScale(26, 0.3),
  },
  subHeadingText: {
    textAlign: 'center',
    // width: windowWidth * 0.7,
    // letterSpacing:,
    fontSize: moderateScale(18, 0.3),
  },
  content: {
    width: windowWidth,
    // backgroundColor:"red",
    bottom: 50,
    position: 'absolute',
    // justifyContent:"center",
    gap: moderateScale(12, 0.3),
    alignItems: 'center',
  },
});
