import {Box, Slider} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import navigationService from '../navigationService';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {useDispatch} from 'react-redux';
import {setUserProfileData} from '../Store/slices/common';
import {useNavigation} from '@react-navigation/native';

const ChoooseAdditionalGoal = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('Living Longer');
  const goals = [
    {
      id: 1,
      text: 'Living Longer',
      onPress: () => console.log('Living Longer selected'),
    },
    {
      id: 2,
      text: 'Feeling Energized',
      onPress: () => console.log('Feeling Energized selected'),
    },
    {
      id: 3,
      text: 'Optimize Athletic Performance',
      onPress: () => console.log('Optimize Athletic Performance selected'),
    },
    {
      id: 4,
      text: 'Build Healthier Habits',
      onPress: () => console.log('Build Healthier Habits selected'),
    },
    {
      id: 5,
      text: 'Eliminate All-Or-Nothing Mindset',
      onPress: () => console.log('Eliminate All-Or-Nothing Mindset selected'),
    },
    {
      id: 6,
      text: 'Prevent Lifestyle Diseases',
      onPress: () => console.log('Prevent Lifestyle Diseases selected'),
    },
  ];
  const navigation = useNavigation();

  return (
    <View style={styles.mainScreen}>
      <CustomText style={styles.subText}>
        Let's Get To Know You Better!
      </CustomText>
      <CustomText style={styles.heading}>
        What Additional Goal Do You Have?
      </CustomText>
      <View>
        {goals.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setValue(item.text)}
              style={[item.text === value ? styles.activeGoal : styles.goal]}
              key={index}>
              <CustomText style={styles.goalText}>{item.text}</CustomText>
            </TouchableOpacity>
          );
        })}
      </View>
      <CustomText style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel tortor
        eros. Fusce sit amet tempus eli.
      </CustomText>
      <CustomButton
        onPress={() => {
          navigation.navigate('PreferenceScreen');
          dispatch(setUserProfileData({additional_goal: value}));
        }}
        text={'Next'}
        fontSize={moderateScale(13, 0.3)}
        textColor={'#7B7B7B'}
        borderRadius={moderateScale(30, 0.3)}
        width={windowWidth * 0.85}
        height={windowHeight * 0.07}
        marginTop={moderateScale(10, 0.3)}
        bgColor={'#FBD7BD'}
        textTransform={'capitalize'}
      />

      <Slider
        w={windowWidth * 0.8}
        marginTop={moderateScale(12, 0.2)}
        sliderTrackHeight={windowHeight * 0.012}
        defaultValue={40}
        minValue={0}
        maxValue={100}
        step={1}
        colorScheme="orange">
        {/* Slider Track */}
        <Slider.Track bg="#FBD7BD" h={3}>
          <Slider.FilledTrack bg="#FBD7BD" />
        </Slider.Track>

        {/* Slider Thumb */}
        <Slider.Thumb>
          <Box h={4} w={8} rounded="full" bg="gray.500" shadow={2} />
        </Slider.Thumb>
      </Slider>
      {/* <View style={styles.slider}>
        <View style={styles.thumb}></View>
      </View> */}
    </View>
  );
};

export default ChoooseAdditionalGoal;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    paddingTop: moderateScale(70, 0.2),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20, 0.2),
  },
  subText: {
    fontSize: moderateScale(13, 0.2),
    color: '#7B7B7B',
  },
  heading: {
    fontSize: moderateScale(20, 0.3),
    color: '#7B7B7B',
  },
  goal: {
    width: windowWidth * 0.85,
    height: windowHeight * 0.07,
    marginTop: moderateScale(10, 0.3),

    borderRadius: moderateScale(30, 0.3),
    borderWidth: 1,
    borderColor: '#7B7B7B54',
    // alignItems:"center",
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20, 0.2),
  },
  activeGoal: {
    borderWidth: 1,
    borderColor: '#FF9D6370',
    backgroundColor: '#FBD7BD',
    elevation: 6,
    width: windowWidth * 0.85,
    height: windowHeight * 0.07,
    marginTop: moderateScale(10, 0.3),
    borderRadius: moderateScale(30, 0.3),
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20, 0.2),
  },
  goalText: {
    color: '#676767',
    fontSize: moderateScale(14, 0.3),
  },
  description: {
    fontSize: moderateScale(12, 0.3),
    color: '#7B7B7B',
    opacity: 0.7,
    textAlign: 'center',
    marginTop: moderateScale(40, 0.2),
  },
  slider: {
    width: windowWidth * 0.8, // Adjust based on the layout
    height: windowHeight * 0.03,
    backgroundColor: '', // Adjust for appearance
  },
  thumb: {
    width: 10, // Make the thumb smaller
    height: 10,
    borderRadius: 5,
  },
});
