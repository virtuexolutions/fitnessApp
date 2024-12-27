import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'native-base';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomText from '../Components/CustomText';
import RecipesCard from '../Components/RecipesCard';

const Recipes = () => {
  const hot_recipies = [
    {
      id: 1,
      heading: 'Performance Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt porta nunc, aliquam facilisis massa suscipit ut.',
      image: require('../Assets/Images/recipes_1.png'),
    },
    {
      id: 2,
      heading: 'Performance Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt porta nunc, aliquam facilisis massa suscipit ut.',
      image: require('../Assets/Images/recipes_2.png'),
    },
    {
      id: 3,
      heading: 'Performance Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt porta nunc, aliquam facilisis massa suscipit ut.',
      image: require('../Assets/Images/recipes_3.png'),
    },
  ];
  const breakFast = [
    {
      id: 1,
      heading: 'Performance Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt porta nunc, aliquam facilisis massa suscipit ut. In dapibus, dolor non fermentum aliquam, nisi enim fringilla tellus.',
      image: require('../Assets/Images/recipes_4.png'),
      cal: 217,
    },
    {
      id: 2,
      heading: 'Performance Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt porta nunc, aliquam facilisis massa suscipit ut. In dapibus, dolor non fermentum aliquam, nisi enim fringilla tellus.',
      image: require('../Assets/Images/recipes_4.png'),
      cal: 217,
    },
    {
      id: 3,
      heading: 'Performance Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt porta nunc, aliquam facilisis massa suscipit ut. In dapibus, dolor non fermentum aliquam, nisi enim fringilla tellus.',
      image: require('../Assets/Images/recipes_4.png'),
      cal: 217,
    },
  ];
  const lunch = [
    {
      id: 1,
      heading: 'Performance Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt porta nunc, aliquam facilisis massa suscipit ut. In dapibus, dolor non fermentum aliquam, nisi enim fringilla tellus.',
      image: require('../Assets/Images/recipes_4.png'),
      cal: 217,
    },
    {
      id: 2,
      heading: 'Performance Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt porta nunc, aliquam facilisis massa suscipit ut. In dapibus, dolor non fermentum aliquam, nisi enim fringilla tellus.',
      image: require('../Assets/Images/recipes_4.png'),
      cal: 217,
    },
    {
      id: 3,
      heading: 'Performance Recipe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt porta nunc, aliquam facilisis massa suscipit ut. In dapibus, dolor non fermentum aliquam, nisi enim fringilla tellus.',
      image: require('../Assets/Images/recipes_4.png'),
      cal: 217,
    },
  ];

  return (
    <SafeAreaView style={styles.safe_are_view}>
      <Header
        title={'Recipes'}
        showBack
        isRightIcon
        iconColor={Color.black}
        rightIconName={'dots-three-vertical'}
        rightIconFrom={Entypo}
      />
      <ScrollView style={styles.scroll_view}>
        <View style={styles.main_view}>
          <TextInputWithTitle
            placeholder={'Find Recipies'}
            // setText={handleChange('password')}
            // value={values.password}
            viewHeight={0.06}
            viewWidth={0.85}
            inputWidth={0.8}
            border={1}
            iconName={'search1'}
            iconType={AntDesign}
            borderRadius={30}
            backgroundColor={'transparent'}
            borderColor={Color.lightGrey}
            marginTop={moderateScale(10, 0.3)}
            placeholderColor={Color.darkGray}
            titleStlye={{right: 10}}
            fieldStyle={{
              borderWidth: 1,
              borderColor: Color.peach,
              alignSelf: 'center',
            }}
          />
          <CustomText isBold style={styles.title}>
            What's Hot
          </CustomText>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={hot_recipies}
            horizontal
            renderItem={({item}) => {
              return (
                <ImageBackground
                  source={item.image}
                  style={{
                    width: windowWidth * 0.5,
                    height: windowWidth * 0.35,
                    borderRadius: moderateScale(20, 0.6),
                    marginTop: moderateScale(10, 0.6),
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginRight: moderateScale(12),
                  }}
                  imageStyle={{
                    width: '100%',
                    height: '100%',
                    borderRadius: moderateScale(20, 0.6),
                  }}>
                  <CustomText isBold style={styles.heading}>
                    {item?.heading}
                  </CustomText>
                  <CustomText numberOfLines={2} style={styles.text}>
                    {item?.text}
                  </CustomText>
                </ImageBackground>
              );
            }}
          />
          <View style={styles.text_view}>
            <CustomText isBold style={[styles.title, {marginTop: 0}]}>
              breakFast
            </CustomText>
            <CustomText style={styles.see_all}>See All</CustomText>
          </View>
          <FlatList
            data={breakFast}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <RecipesCard data={item} />;
            }}
          />
          <View style={styles.text_view}>
            <CustomText isBold style={[styles.title, {marginTop: 0}]}>
              Lunch
            </CustomText>
            <CustomText isBold style={styles.see_all}>
              See All
            </CustomText>
          </View>
          <FlatList
            data={lunch}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <RecipesCard data={item} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
  },
  scroll_view: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.white,
  },
  title: {
    fontSize: moderateScale(14, 0.6),
    color: Color.grey,
    marginTop: moderateScale(12, 0.6),
  },
  heading: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 12,
  },
  text: {
    fontSize: moderateScale(10, 0.6),
    color: Color.white,
    marginBottom: moderateScale(10, 0.6),
    marginLeft: 1,
  },
  main_view: {
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(10, 0.6),
  },
  text_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.9,
    alignItems: 'center',
    marginVertical: moderateScale(10, 0.6),
    borderBottomWidth: 1,
    borderColor: Color.peach,
  },
  see_all: {
    fontSize: moderateScale(10, 0.6),
    color: Color.grey,
  },
});
