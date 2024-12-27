import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Header from '../Components/Header';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import Entypo from 'react-native-vector-icons/Entypo';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {Box, Icon, Slider} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TrackerScreen = () => {
    const [value, setValue] = useState(0);
  return (
    <View style={{alignItems: 'center'}}>
      <ImageBackground
        imageStyle={{width: '100%', height: '100%'}}
        source={require('../Assets/Images/Rectangle.png')}
        style={styles.UppperContainer}>
        <Header
          title={'Tracker'}
          showBack
          isRightIcon
          iconColor={Color.black}
          rightIconName={'dots-three-vertical'}
          rightIconFrom={Entypo}
        />
        <View style={styles.headingContainer}>
          <CustomText style={styles.heading}>Water Tracker</CustomText>
          <CustomText style={styles.subText}>
            Vivamus vulputate erat nec porta pellentesque. Aenean a urna mi.
            Integer gravida libero sed nibh.
          </CustomText>
        </View>
      </ImageBackground>
      <CustomText style={styles.heading}>Water</CustomText>
      <CustomText style={styles.subText2}>Goal: 2.00 L</CustomText>
      <View style={styles.imageContainer}>
        <CustomImage
          source={require('../Assets/Images/glasses.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <CustomButton
        onPress={() => {
          // onPhoneNumberPressed();
        }}
        text={'How Many Bottle I Drink'}
        fontSize={moderateScale(13, 0.3)}
        textColor={'#7B7B7B'}
        borderWidth={0.3}
        borderColor={Color.black}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.55}
        height={windowHeight * 0.07}
        marginTop={moderateScale(10, 0.3)}
        bgColor={Color.white}
        textTransform={'capitalize'}
      />
      <View style={styles.actionBtnContainer}>
        <Icon name="minuscircle" as={AntDesign} size={moderateScale(14, 0.2)} color={Color.black} />
        <Icon name="pluscircle" as={AntDesign} size={moderateScale(14, 0.2)} color={Color.black}/>
      </View>
      <Slider
        width={windowWidth * 0.8}
        defaultValue={50}
        value={40}
        //   onChange={(v) => setValue(v)}
        minValue={0}
        maxValue={100}
        step={1}
        colorScheme="#F4BC9B">
        <Slider.Track bg="gray.200" h={1.5}>
          <Slider.FilledTrack bg="orange.400" />
        </Slider.Track>
        <Slider.Thumb height={1} width={1}>
          <Box h={1} w={1} bg="orange.400" borderRadius="full" shadow={2} />
        </Slider.Thumb>
      </Slider>
      <CustomText style={{fontSize: moderateScale(26, 0.3)}} isBold>
        3
      </CustomText>
      <CustomButton
        onPress={() => {
          // onPhoneNumberPressed();
        }}
        text={'Notification Active'}
        fontSize={moderateScale(13, 0.3)}
        textColor={'#7B7B7B'}
        // borderWidth={0.8}
        // borderColor={Color.black}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.85}
        height={windowHeight * 0.07}
        marginTop={moderateScale(10, 0.3)}
        bgColor={'#FBD7BD'}
        textTransform={'capitalize'}
      />
    </View>
  );
};

export default TrackerScreen;

const styles = StyleSheet.create({
  UppperContainer: {
    width: windowWidth,
    height: windowHeight * 0.3,
    // height:"100%",
    // overflow:"hidden"
  },
  headingContainer: {
    width: windowWidth,
    alignItems: 'center',
    gap: moderateScale(5, 0.2),
    marginTop: moderateScale(12, 0.2),
    // height:windowWidth * 0.23,
    alignSelf: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: moderateScale(20, 0.2),
    color: '#686868',
    width: windowWidth * 0.8,
  },
  subText: {
    fontSize: moderateScale(12, 0.3),
    width: windowWidth * 0.8,
    textAlign: 'center',
    color: '#686868',
  },
  subText2: {
    fontSize: moderateScale(16, 0.3),
    width: windowWidth * 0.8,
    textAlign: 'center',
    color: '#686868',
    opacity: 0.7,
  },
  imageContainer: {
    width: windowWidth * 0.65,
    height: windowWidth * 0.5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  actionBtnContainer:{width: windowWidth * 0.8, flexDirection:"row", justifyContent:"space-between"}
});
