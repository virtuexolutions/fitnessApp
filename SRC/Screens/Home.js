import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import {Icon, View} from 'native-base';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import Entypo from 'react-native-vector-icons/Entypo';
const Home = () => {
  const varieties = [
    {
      id: 1,
      text: 'All Food',
    },
    {
      id: 2,
      text: 'Chicken',
    },
    {
      id: 3,
      text: 'Soups',
    },
    {
      id: 4,
      text: 'Salad',
    },
    {
      id: 5,
      text: 'Meats',
    },
    {
      id: 6,
      text: 'Fish',
    },
  ];

  const data = {
    ingredients: [
      'Lorem Ipsum Dolor Sit Amet Adipiscing Elit.',
      'Lorem Ipsum Dolor Sit Amet Adipiscing Elit.',
      'Lorem Ipsum Dolor Sit Amet Adipiscing Elit.',
      'Lorem Ipsum Dolor Sit Amet Adipiscing Elit.',
    ],
    recipe: [
      'Lorem Ipsum Dolor Sit Amet Adipiscing Elit.',
      'Lorem Ipsum Dolor Sit Amet Adipiscing Elit.',
      'Lorem Ipsum Dolor Sit Amet Adipiscing Elit.',
      'Lorem Ipsum Dolor Sit Amet Adipiscing Elit.',
    ],
  };
  const renderSection = (title, items) => (
    <View style={styles.section}>
      <CustomText style={styles.sectionTitle}>{title}</CustomText>
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${title}-${index}`}
        renderItem={({item}) => (
          <View style={styles.bulletContainer}>
            <View style={styles.bulletDot} />
            <CustomText style={styles.bulletText}>{item}</CustomText>
          </View>
        )}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safe_are_view}>
      <Header isFilledButton title={'Home'} headerColor={Color.peach} />
      <ScrollView style={styles.scroll_view}>
        <ImageBackground
          source={require('../Assets/Images/Rectangle.png')}
          style={styles.image_background_view}
          imageStyle={styles.image_background_image}></ImageBackground>
        <View style={styles.main_view}>
          <View
            style={{
              height: windowWidth * 0.1,
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{
                marginLeft: moderateScale(15, 0.6),
              }}
              horizontal
              data={varieties}
              renderItem={({item}) => {
                return (
                  <View style={styles.varieties_view}>
                    <CustomText style={styles.heading_text}>
                      {item?.text}
                    </CustomText>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <View style={styles.blog_view}>
              <CustomImage
                style={styles.image}
                source={require('../Assets/Images/blog_image1.png')}
              />
            </View>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.6),
                textAlign: 'center',
                color: Color.grey,
              }}>
              Grilled Fish with Baked Vegetables
            </CustomText>
            <View
              style={{
                width: moderateScale(30, 0.6),
                height: moderateScale(30, 0.6),
                backgroundColor: Color.lightest_grey,
                borderRadius: windowWidth,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Icon
                name="heart"
                as={Entypo}
                size={moderateScale(20, 0.6)}
                color={Color.peach}
              />
            </View>
            <CustomText
              style={{
                fontSize: moderateScale(12, 0.6),
                color: Color.grey,
                textAlign: 'center',
                width: windowWidth * 0.85,
              }}>
              Donec vehicula quam at nulla pharetra, sit amet mattis lectus
              volutpat. Vestibulum convallis purus quam.
            </CustomText>
            {renderSection('ingredients', data.ingredients)}
            {renderSection('recipe', data.recipe)}
            <CustomText style={styles.sectionTitle}>
              WEEKLY NUTRITION HABITS
            </CustomText>
            <View
              style={{
                width: windowWidth * 0.9,
                height: 6,
                backgroundColor: Color.lightest_grey,
                borderRadius: moderateScale(20),
              }}>
              <View
                style={{
                  width: windowWidth * 0.5,
                  height: 6,
                  backgroundColor: Color.peach,
                  borderRadius: moderateScale(20),
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
  image_background_image: {
    width: '100%',
    height: '100%',
  },
  image_background_view: {
    width: windowWidth,
    height: windowHeight * 0.45,
    backgroundColor: Color.white,
    alignItems: 'center',
    top: -170,
  },
  main_view: {
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    top: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  varieties_view: {
    height: 30,
    marginRight: moderateScale(10, 0.6),
    width: moderateScale(50, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading_text: {
    fontSize: moderateScale(11, 0.6),
    color: '#7B7B7B',
  },
  blog_view: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.5,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  section: {
    marginBottom: 16,
    width: windowWidth * 0.9,
  },
  sectionTitle: {
    fontSize: moderateScale(15, 0.6),
    fontWeight: 'bold',
    color: Color.grey,
    marginVertical: moderateScale(10, 0.6),
    textTransform: 'uppercase',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  bulletDot: {
    width: moderateScale(5),
    height: moderateScale(5),
    borderRadius: moderateScale(5),
    backgroundColor: '#000',
    marginRight: moderateScale(8),
  },
  bulletText: {
    fontSize: moderateScale(12, 0.6),
    color: Color.lightGrey,
  },
});
