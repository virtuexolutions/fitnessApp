import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {Box, Slider} from 'native-base';
import CustomButton from '../Components/CustomButton';
import {RulerPicker} from 'react-native-ruler-picker';

const WeightTrackerScreen = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={{alignItems: 'center'}}>
      <Header
          title={'Weight'}
          showBack
          isRightIcon
          headerColor={"#FBD7BD"}
          iconColor={Color.black}
          rightIconName={'dots-three-vertical'}
          rightIconFrom={Entypo}
        />
      <ImageBackground
        imageStyle={{width: '100%', height: '100%'}}
        source={require('../Assets/Images/Rectangle.png')}
        style={styles.UppperContainer}>
        
        <View style={styles.headingContainer}>
          <CustomText style={styles.heading}>What is your weight?</CustomText>
          <CustomText style={styles.subText}>
            Vivamus vulputate erat nec porta pellentesque. Aenean a urna mi.
            Integer gravida libero sed nibh.
          </CustomText>
        </View>
      </ImageBackground>
      <View style={styles.toggleButtonContainer}>
        <TouchableOpacity style={styles.btn}>
          <CustomText style={styles.base}>LB</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: Color.white}]}>
          <CustomText style={styles.base}>KG</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.weighNumberContainer}>
        <CustomText style={styles.weightNumber}>{value}</CustomText>
        <CustomText style={styles.weightUnit}>KG</CustomText>
      </View>
      {/* <RulerPicker
    width={windowWidth * 0.8}
  min={0}
  max={240}
  step={1}
  fractionDigits={0}
  initialValue={0}
  onValueChange={(number) => console.log(number)}
  onValueChangeEnd={(number) => console.log(number)}
  unit="cm"
/> */}
      <Slider
        marginTop={moderateScale(50, 0.3)}
        width={windowWidth * 0.8}
        defaultValue={50}
        minValue={0}
        maxValue={100}
        step={1}
        value={value}
        onChange={v => setValue(v)}
        colorScheme="orange">
        {/* Slider Track */}
        <Slider.Track h={2} bg="#D3D3D3">
          {' '}
          {/* Gray unfilled background */}
          <Slider.FilledTrack bg="#FBD7BD" /> {/* Peach filled background */}
        </Slider.Track>

        {/* Slider Thumb */}
        <Slider.Thumb>
          <Box
            h={6}
            w={10}
            rounded="full"
            bg="gray.500"
            shadow={2}
          />
        </Slider.Thumb>
      </Slider>
      <CustomButton
        onPress={() => {
          // onPhoneNumberPressed();
        }}
        text={'Skip'}
        fontSize={moderateScale(13, 0.3)}
        textColor={'#7B7B7B'}
        // borderWidth={0.8}
        // borderColor={Color.black}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.85}
        height={windowHeight * 0.07}
        marginTop={moderateScale(50, 0.3)}
        bgColor={'#FBD7BD'}
        textTransform={'capitalize'}
      />
    </View>
  );
};

export default WeightTrackerScreen;

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
    color: '#7B7B7B',
  },
  toggleButtonContainer: {
    width: windowWidth * 0.7,
    flexDirection: 'row',
    backgroundColor: '#EAECEB',
    padding: moderateScale(4, 0.3),
    borderRadius: moderateScale(23, 0.3),
    marginTop: moderateScale(20, 0.2),
  },
  base: {
    fontSize: moderateScale(16, 0.3),
    color: '#F4BC9B',
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
  },
  btn: {
    width: windowWidth * 0.34,
    height: windowHeight * 0.06,
    borderRadius: moderateScale(23, 0.3),

    alignItems: 'center',
    justifyContent: 'center',
  },
  weighNumberContainer: {
    flexDirection: 'row',
    width: windowWidth * 0.25,
    padding: moderateScale(11, 0.2),
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(12, 0.2),
    // backgroundColor:"red",
    marginTop: moderateScale(20, 0.2),
  },
  weightNumber: {
    fontSize: moderateScale(60, 0.2),
    color: '#686868',
  },
  weightUnit: {
    fontSize: moderateScale(12, 0.2),
    textTransform: 'uppercase',
    color: '#686868',
    width: '50%',
    marginTop: moderateScale(41, 0.2),
    // alignSelf:"flex-end"
  },
});
