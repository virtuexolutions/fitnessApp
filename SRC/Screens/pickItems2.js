import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import navigationService from '../navigationService';

const PickItems2 = () => {
  const [selected, setSelected] = useState(!true);
  const caebohdrates_item = [
    {
      id: 1,
      image: require('../Assets/Images/item_17.png'),
      text: 'Rice',
    },
    {
      id: 2,
      image: require('../Assets/Images/item_18.png'),
      text: 'Potato',
    },
    {
      id: 3,
      image: require('../Assets/Images/item_19.png'),

      text: 'Sweet Potato',
    },
    {
      id: 4,
      image: require('../Assets/Images/item_20.png'),
      text: 'Cassava',
    },
    {
      id: 5,
      image: require('../Assets/Images/item_21.png'),
      text: 'Lentils',
    },
    {
      id: 6,
      image: require('../Assets/Images/item_22.png'),
      text: 'Beans',
    },

    {
      id: 7,
      image: require('../Assets/Images/item_38.png'),
      text: 'Chichpeas',
    },
    {
      id: 8,
      image: require('../Assets/Images/item_40.png'),
      text: 'Quinoa',
    },
    {
      id: 9,
      image: require('../Assets/Images/item_42.png'),
      text: 'Corn',
    },
    {
      id: 10,
      image: require('../Assets/Images/item_47.png'),
      text: 'Tortilla',
    },
    {
      id: 11,
      image: require('../Assets/Images/item_44.png'),
      text: 'Popcorn',
    },
    {
      id: 12,
      image: require('../Assets/Images/item_45.png'),
      text: 'Oats',
    },
    {
      id: 13,
      image: require('../Assets/Images/item_46.png'),
      text: 'Bread',
    },
  ];

  const protein__item = [
    {
      id: 1,
      image: require('../Assets/Images/item_49.png'),
      text: 'Avocado',
    },
    {
      id: 2,
      image: require('../Assets/Images/item_51.png'),
      text: 'Almonds',
    },
    {
      id: 4,
      image: require('../Assets/Images/item_53.png'),
      text: 'Pecans',
    },
    {
      id: 5,
      image: require('../Assets/Images/item_54.png'),
      text: 'Peanut Butter',
    },
    {
      id: 6,
      image: require('../Assets/Images/item_55.png'),
      text: 'Cashews',
    },
    {
      id: 7,
      image: require('../Assets/Images/item_58.png'),
      text: 'Chia',
    },
    {
      id: 8,
      image: require('../Assets/Images/item_57.png'),
      text: 'Olives',
    },
    {
      id: 9,
      image: require('../Assets/Images/item_56.png'),
      text: 'Walnuts',
    },
    {
      id: 10,
      image: require('../Assets/Images/item_59.png'),
      text: 'Chocolate',
    },
  ];

  return (
    <SafeAreaView style={styles.safe_are_view}>
      <Header
        showBack
        isRightIcon
        iconColor={Color.black}
        rightIconName={'dots-three-vertical'}
        rightIconFrom={Entypo}
      />
      <ScrollView sy>
        <View style={styles.main_view}>
          <View style={styles.text_view}>
            <CustomText style={styles.heading}>Carbohydrates</CustomText>
            <CustomText style={styles.text}>Select All</CustomText>
          </View>
          <View>
            <FlatList
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
              }}
              keyExtractor={item => item.id}
              data={caebohdrates_item}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={styles.btn_view}>
                    <View style={styles.image_view}>
                      <CustomImage
                        source={item?.image}
                        style={styles.imageStyle}
                      />
                    </View>
                    <CustomText style={styles.btn_text}>
                      {item?.text}
                    </CustomText>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              width: windowWidth * 0.9,
              height: 1,
              backgroundColor: Color.darkGray,
              marginTop: moderateScale(20, 0.6),
            }}
          />
          <View style={styles.text_view}>
            <CustomText style={styles.heading}>Fats</CustomText>
            <CustomText style={styles.text}>Select All</CustomText>
          </View>
          <FlatList
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'flex-start',
            }}
            style={{
              marginTop: moderateScale(10, 0.6),
            }}
            keyExtractor={item => item.id}
            data={protein__item}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.btn_view}>
                  <View style={styles.image_view}>
                    <CustomImage
                      source={item?.image}
                      style={styles.imageStyle}
                    />
                  </View>
                  <CustomText style={styles.btn_text}>{item?.text}</CustomText>
                </TouchableOpacity>
              );
            }}
          />
          <CustomButton
            text={'Continue'}
            textColor={Color.grey}
            fontSize={moderateScale(15, 0.6)}
            bgColor={Color.peach}
            width={windowWidth * 0.8}
            style={[styles.buttonStyle]}
            textTransform={'Uppercase'}
            onPress={() => navigationService.navigate('SupportingScreen')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PickItems2;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
  },
  scroll_view: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.peach,
  },
  main_view: {
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(20, 0.6),
    height: windowHeight * 0.9,
    justifyContent: 'center',
  },
  heading: {
    fontSize: moderateScale(18, 0.6),
    textAlign: 'center',
    color: Color.darkGray,
    fontWeight: '700',
  },
  text: {
    fontSize: moderateScale(12, 0.6),
    textAlign: 'center',
    color: Color.black,
  },
  buttonStyle: {
    width: windowWidth * 0.8,
    height: moderateScale(50, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(15, 0.6),
    backgroundColor: Color.peach,
    borderWidth: 0.8,
    borderColor: '#FEF3DD',
    shadowColor: Color.peach,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    position: 'absolute',
    bottom: 10,
  },
  button_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.8,
    marginTop: moderateScale(10, 0.6),
    alignItems: 'center',
    backgroundColor: Color.peach,
    borderRadius: windowWidth,
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(15, 0.6),
    alignSelf: 'center',
  },
  text_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.9,
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    // backgroundColor:'green'
  },
  btn_view: {
    paddingHorizontal: moderateScale(15, 0.6),
    backgroundColor: Color.peach,
    paddingVertical: moderateScale(10, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(10, 0.6),
    borderRadius: windowWidth,
    marginHorizontal: 5,
  },
  image_view: {
    width: moderateScale(20, 0.6),
    height: moderateScale(20, 0.6),
  },
  btn_text: {
    fontSize: moderateScale(12, 0.6),
    marginLeft: moderateScale(3, 0.6),
    color: Color.darkGray,
  },
});
