import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Header from '../Components/Header';
import Color from '../Assets/Utilities/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import CustomButton from '../Components/CustomButton';
import navigationService from '../navigationService';

const RemaindersScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainScreen}>
      <ImageBackground
        imageStyle={{width: '100%', height: '70%'}}
        source={require('../Assets/Images/Rectangle.png')}
        style={styles.UppperContainer}>
        <Header
          showBack
          isRightIcon
          iconColor={Color.black}
          rightIconName={'dots-three-vertical'}
          rightIconFrom={Entypo}
        />
        <View style={styles.imageContainer}>
          <CustomImage
            style={{width: '100%', height: '100%'}}
            source={require('../Assets/Images/BellLogo.png')}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          marginBottom: moderateScale(15, 0.6),
          alignItems: 'center',
          justifyContent: 'flex-start',
          top: -60,
        }}>
        <CustomText style={styles.heading} isBold>
          Don't miss out your meals
        </CustomText>
        <CustomText style={styles.description}>
          80% of users who made progress last week have notifications enabled
        </CustomText>
        <TouchableOpacity style={styles.card}>
          <CustomImage
            source={require('../Assets/Images/tomatoWithBg.png')}
            style={{
              width: moderateScale(40, 0.2),
              height: moderateScale(40, 0.2),
            }}
          />

          <View style>
            <View style={styles.headingContainer}>
              <CustomText style={styles.cardHeading} isBold>
                Breakfast
              </CustomText>
              <CustomImage
                source={require('../Assets/Images/glass.png')}
                style={{
                  width: moderateScale(25, 0.2),
                  height: moderateScale(25, 0.2),
                }}
              />
            </View>
            <CustomText style={styles.cardDescription} isBold>
              ideal if you like preparing different dishes each day
            </CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <CustomImage
            source={require('../Assets/Images/tomatoWithBg.png')}
            style={{
              width: moderateScale(40, 0.2),
              height: moderateScale(40, 0.2),
            }}
          />

          <View>
            <View style={styles.headingContainer}>
              <CustomText style={styles.cardHeading} isBold>
                Lunch Time!
              </CustomText>
              <CustomImage
                source={require('../Assets/Images/alarm.png')}
                style={{
                  width: moderateScale(25, 0.2),
                  height: moderateScale(25, 0.2),
                }}
              />
            </View>
            <CustomText style={styles.cardDescription} isBold>
              good if you like repeating dishes but also want some variety
            </CustomText>
          </View>
        </TouchableOpacity>
        <CustomButton
          style={[
            styles.buttonStyle,
            {backgroundColor: '#FBD7BD', borderWidth: 0},
          ]}
          text={'Allow Reminders'}
          fontSize={moderateScale(15, 0.6)}
          textColor={Color.grey}
          onPress={() => navigationService.navigate('PickItems')}
        />
        <CustomButton
          style={[styles.buttonStyle]}
          text={'Maybe Later'}
          fontSize={moderateScale(15, 0.6)}
          textColor={Color.grey}
          onPress={() => navigationService.navigate('PickItems')}
        />
      </View>
    </ScrollView>
  );
};

export default RemaindersScreen;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    paddingBottom: moderateScale(12, 0.2),
  },
  buttonStyle: {
    width: windowWidth * 0.89,
    height: moderateScale(50, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(25, 0.6),
    backgroundColor: Color.white,
    borderWidth: 1,
  },
  UppperContainer: {
    width: windowWidth,
    height: windowHeight * 0.4,
    overflow: 'hidden',
  },
  imageContainer: {
    width: windowWidth * 0.23,
    height: windowWidth * 0.23,
    alignSelf: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: moderateScale(19, 0.2),
    color: '#686868',
    width: windowWidth * 0.8,
  },
  description: {
    textAlign: 'center',
    fontSize: moderateScale(14, 0.5),
    color: '#676767',
  },
  card: {
    marginTop: moderateScale(20, 0.2),
    width: windowWidth * 0.9,
    paddingHorizontal: moderateScale(10, 0.2),
    paddingVertical: moderateScale(25, 0.2),
    backgroundColor: '#FBD7BD',
    borderRadius: moderateScale(15, 0.2),
    elevation: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20, 0.2),
    overflow: 'hidden',
  },
  cardHeading: {
    color: '#686868',
    fontSize: moderateScale(19, 0.2),
  },
  cardDescription: {
    color: '#686868',
    width: windowWidth * 0.6,
    fontSize: moderateScale(12, 0.2),
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12, 0.2),
  },
});
