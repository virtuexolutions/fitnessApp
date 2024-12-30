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
import navigationService from '../navigationService';

const ChooseMealsVariety = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.mainScreen}
      // con
    >
      <ImageBackground
        imageStyle={{width: '100%', height: '70%'}}
        source={require('../Assets/Images/Rectangle.png')}
        style={styles.UppperContainer}>
        <Header
          // title={'Timmer'}
          showBack
          isRightIcon
          iconColor={Color.black}
          rightIconName={'dots-three-vertical'}
          rightIconFrom={Entypo}
        />
        <View style={styles.imageContainer}>
          <CustomImage
            style={{width: '100%', height: '100%'}}
            source={require('../Assets/Images/variety.png')}
          />
        </View>
      </ImageBackground>
      <CustomText style={styles.heading} isBold>
        How much variety would you like in your meals?
      </CustomText>
      <TouchableOpacity
        onPress={() => navigationService.navigate('MealInDay')}
        style={styles.card}>
        <CustomImage
          source={require('../Assets/Images/ring1.png')}
          style={{
            width: moderateScale(30, 0.2),
            height: moderateScale(30, 0.2),
          }}
        />
        <View style>
          <CustomText style={styles.cardHeading} isBold>
            High Variety
          </CustomText>
          <CustomText style={styles.cardDescription} isBold>
            ideal if you like preparing different dishes each day
          </CustomText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigationService.navigate('MealInDay')}
        style={styles.card}>
        <CustomImage
          source={require('../Assets/Images/ring1.png')}
          style={{
            width: moderateScale(30, 0.2),
            height: moderateScale(30, 0.2),
          }}
        />

        <View style>
          <CustomText style={styles.cardHeading} isBold>
            Balanced Variety
          </CustomText>
          <CustomText style={styles.cardDescription} isBold>
            good if you like repeating dishes but also want some variety
          </CustomText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigationService.navigate('MealInDay')}
        style={styles.card}>
        <CustomImage
          source={require('../Assets/Images/ring1.png')}
          style={{
            width: moderateScale(30, 0.2),
            height: moderateScale(30, 0.2),
          }}
        />

        <View style>
          <CustomText style={styles.cardHeading} isBold>
            Minimal Variety
          </CustomText>
          <CustomText style={styles.cardDescription} isBold>
            perfect to make meal planning easier with fewer dishes to prepare
          </CustomText>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ChooseMealsVariety;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
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
});
