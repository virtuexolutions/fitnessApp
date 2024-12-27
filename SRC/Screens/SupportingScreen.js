import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {color} from 'native-base/lib/typescript/theme/styled-system';

const SupportingScreen = () => {
  const diet = [
    {
      id: 1,
      heading: 'Normal Diet',
      text: 'Suspendisse potenti. Nullam in neque eget augue molestie sagittis.',
      image: require('../Assets/Images/diet_image.png'),
    },
    {
      id: 2,
      heading: 'Normal Diet',
      text: 'Suspendisse potenti. Nullam in neque eget augue molestie sagittis.',
      image: require('../Assets/Images/diet_image.png'),
    },
    {
      id: 3,
      heading: 'Normal Diet',
      text: 'Suspendisse potenti. Nullam in neque eget augue molestie sagittis.',
      image: require('../Assets/Images/diet_image.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.safe_are_view}>
      <ScrollView style={styles.scroll_view}>
        <View style={styles.main_view}>
          <CustomText style={styles.subheading_text}>
            Let's Get To Know You Better!
          </CustomText>
          <CustomText style={styles.heading_text}>
            Supporting You At Every Stage
          </CustomText>
          <View style={styles.blog_view}>
            <View style={styles.blog_image}>
              <CustomImage
                style={styles.image}
                source={require('../Assets/Images/blog_image_1.png')}
              />
            </View>
            <View style={styles.walk_view}>
              <CustomImage
                source={require('../Assets/Images/walk.png')}
                style={styles.image}
              />
            </View>
          </View>
          <CustomText style={styles.blog_heading}>
            Weekly Nutrition Habits
          </CustomText>
          <CustomText style={styles.txt}>
            Cras efficitur ut massa vel faucibus. Integer non a nunc ornare,
            sagittis nisi semper, hendrerit a nulla. Morbi ultricies, nulla ac
            ornarea elementum, odio…
          </CustomText>
          <View
            style={[styles.blog_image, {marginTop: moderateScale(15, 0.6)}]}>
            <CustomImage
              style={styles.image}
              source={require('../Assets/Images/blog_image_2.png')}
            />
          </View>
          <CustomText style={styles.blog_heading}>
            Weekly Nutrition Habits
          </CustomText>
          <CustomText style={styles.txt}>
            Cras efficitur ut massa vel faucibus. Integer non a nunc ornare,
            sagittis nisi semper, hendrerit a nulla. Morbi ultricies, nulla ac
            ornarea elementum, odio…
          </CustomText>
          <FlatList
            data={diet}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.diet_view}>
                  <View style={styles.image_view}>
                    borderRadius: windowWidth,
                    <CustomImage
                      style={[styles.image, {borderRadius: windowWidth}]}
                      source={item?.image}
                    />
                  </View>
                  <CustomText
                    style={{
                      fontSize: moderateScale(10, 0.6),
                      color: Color.darkGray,
                    }}>
                    {item?.heading}
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: moderateScale(7, 0.6),
                      color: Color.darkGray,
                      textAlign: 'center',
                      width: '80%',
                    }}>
                    {item?.text}
                  </CustomText>
                </View>
              );
            }}
          />
          <CustomText
            style={[
              styles.txt,
              {
                textAlign: 'center',
                marginTop: moderateScale(15, 0.6),
                width: '100%',
              },
            ]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            tortor eros. Fusce sit amet tempus eli.
          </CustomText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupportingScreen;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
  },
  scroll_view: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.white,
  },
  main_view: {
    paddingHorizontal: moderateScale(20, 0.6),
    paddingVertical: moderateScale(20, 0.6),
    marginTop: moderateScale(15, 0.6),
    alignItems: 'flex-start',
  },
  subheading_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.lightGrey,
    textAlign: 'center',
    width: '100%',
  },
  heading_text: {
    fontSize: moderateScale(18, 0.6),
    color: Color.lightGrey,
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  blog_view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: windowWidth * 0.9,
    marginTop: moderateScale(20, 0.6),
  },
  blog_image: {
    width: windowWidth * 0.55,
    height: windowWidth * 0.4,
    borderRadius: moderateScale(15, 0.6),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: moderateScale(15, 0.6),
  },
  walk_view: {
    width: windowWidth * 0.45,
    height: windowWidth * 0.25,
    backgroundColor: Color.white,
    right: 0,
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: Color.peach,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  blog_heading: {
    fontSize: moderateScale(16, 0.6),
    color: Color.lightGrey,
    marginTop: moderateScale(15, 0.6),
    textAlign: 'left',
  },
  txt: {
    fontSize: moderateScale(12, 0.6),
    color: Color.veryLightGray,
  },
  diet_view: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    backgroundColor: Color.peach,
    marginRight: moderateScale(5, 0.6),
    borderRadius: moderateScale(20, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(5, 0.3),
  },
  image_view: {
    width: moderateScale(60, 0.6),
    height: moderateScale(60, 0.6),
    backgroundColor: 'red',
    borderRadius: windowWidth,
  },
});
