import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import {Icon, Slider} from 'native-base';
import AntDesiign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
const QuestionnaireDiaryProducts= () => {
  return (
    <ImageBackground
      style={styles.bgcImageStyle}
      source={require('../Assets/Images/bgcthemeimage.png')}
      imageStyle={{width: '100%', height: '100%'}}>
      <View style={styles.topRoundImageContainer}>
        <CustomImage
          style={{width: '100%', top: -40}}
          source={require('../Assets/Images/15.png')}
          // resizeMode={"cover"}
          />
      </View>

      <View>
        <CustomImage
          source={require('../Assets/Images/shadow.png')}
          style={{position: 'absolute'}}
        />
        <View style={styles.header}>
          <Icon
            name={'arrowleft'}
            as={AntDesiign}
            color={Color.white}
            size={moderateScale(24, 0.3)}
            style={{marginLeft: moderateScale(5, 0.3)}}
          />
          <CustomText style={styles.headerText} isBold>
            Life Score
          </CustomText>
          <Icon
            name={'more-vertical'}
            as={Feather}
            color={Color.white}
            size={moderateScale(24, 0.3)}
          />
        </View>
        <CustomText
          style={[
            styles.duration,
            {
              color: Color.white,
              width: windowWidth,
              marginTop: moderateScale(12, 0.3),
            },
          ]}
          isBold>
          18/41
        </CustomText>
      </View>

      <View
        style={{width: windowWidth, paddingVertical: moderateScale(50, 0.3)}}>
        <View style={styles.infoBox}>
          <CustomText style={styles.heading} isBold>
          How often did you have plain dairy products last week?
          </CustomText>
          <CustomText style={styles.examples}>
          e.g. plain yogurt, plain cottage cheese, sour cream don't count cheese
          </CustomText>

        </View>
        <View style={styles.limitBox}>
          <CustomText style={styles.duration}>5-6 times a week</CustomText>
          <View style={styles.sliderTextContainer}>
            <CustomText style={styles.sliderText}>Never</CustomText>
            <CustomText style={styles.sliderText}>Open</CustomText>
          </View>
          <View style={{width: windowWidth, alignItems: 'center'}}>
            <Slider
              w="3/4"
              maxW="300"
              color={'#F4BC9B'}
              colorScheme={'amber'}
              defaultValue={70}
              minValue={0}
              maxValue={100}
              accessibilityLabel="hello world"
              step={20}>
              <Slider.Track>
                <Slider.FilledTrack bg={'#F4BC9B'} />
              </Slider.Track>
              <Slider.Thumb
                borderWidth={'1'}
                borderColor={'#fff'}
                bg={'#F4BC9B'}
              />
            </Slider>
          </View>
          <CustomButton
            style={styles.buttonStyle}
            text={'Next'}
            // textstyle={{fontSize: moderateScale(18, 0.6)}}
            fontSize={moderateScale(15, 0.6)}
            textColor={Color.grey}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default QuestionnaireDiaryProducts;

const styles = StyleSheet.create({
  bgcImageStyle: {
    width: windowWidth,
    height: windowHeight,
    // gap: moderateScale(30, 0.2),
    justifyContent: 'space-between',
  },
  topRoundImageContainer: {
    width: windowWidth,
    height: windowHeight * 0.5,
    overflow: 'hidden',
    position: 'absolute',
    top: -50,
    backgroundColor: '#5c360c',
    borderBottomLeftRadius: moderateScale(200, 0.2),
    borderBottomRightRadius: moderateScale(200, 0.2),
    elevation: 56,
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    shadowOffset: {width: 2, height: 1},
    shadowRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: windowWidth * 0.99,
    paddingTop: moderateScale(12, 0.2),
    paddingHorizontal: moderateScale(5, 0.2),
    flexDirection: 'row',
    // gap:moderateScale(150,0.3)
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: moderateScale(16, 0.2),
    color: Color.white,
  },
  infoBox: {
    width: windowWidth,
    alignItems: 'center',
    gap: moderateScale(10, 0.2),
    top: -40,
  },
  heading: {
    textAlign: 'center',
    fontSize: moderateScale(19, 0.2),
    // fontWeight: "bold",
    color: '#686868',
    width: windowWidth * 0.85,
    textTransform: 'none',
  },
  examples: {
    textAlign: 'center',
    fontSize: moderateScale(12, 0.2),
    // fontWeight: "bold",

    width: windowWidth * 0.65,
    textTransform: 'none',
  },
  duration: {
    color: '#686868',
    textAlign: 'center',
    fontSize: moderateScale(16, 0.2),
    textTransform: 'none',
  },
  buttonStyle: {
    width: windowWidth * 0.89,
    height: moderateScale(50, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(25, 0.6),
    backgroundColor: Color.white,
  },
  sliderText: {
    fontSize: moderateScale(12, 0.2),
    color: Color.black,
    width: windowWidth * 0.1,
    textTransform: 'uppercase',
    opacity: 0.7,
  },
  limitBox: {
    marginTop: moderateScale(52, 0.2),
    top: -10,
  },
  sliderTextContainer: {
    marginTop: moderateScale(30, 0.3),
    width: windowWidth * 0.75,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
});
