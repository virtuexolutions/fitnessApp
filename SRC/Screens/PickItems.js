import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import Header from '../Components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../Components/CustomText';
import PercentageCounter from '../Components/PercentageCounter';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import navigationService from '../navigationService';

const PickItems = () => {
  const [selected, setSelected] = useState(!true);
  const dairy_item = [
    {
      id: 1,
      image: require('../Assets/Images/item_1.png'),
      text: 'Weight',
    },
    {
      id: 2,
      image: require('../Assets/Images/item_2.png'),
      text: '                ',
    },
    {
      id: 3,
      image: require('../Assets/Images/item_3.png'),

      text: 'Yougurt',
    },
    {
      id: 4,
      image: require('../Assets/Images/item_4.png'),
      text: 'Cocununt Milk',
    },
    {
      id: 5,
      image: require('../Assets/Images/item_5.png'),
      text: 'Dinner',
    },
  ];

  const fruits_item = [
    {
      id: 1,
      image: require('../Assets/Images/item_5.png'),
      text: 'Banana',
    },
    {
      id: 2,
      image: require('../Assets/Images/item_6.png'),
      text: 'Blueberries',
    },
    {
      id: 3,
      image: require('../Assets/Images/item_7.png'),
      text: 'Tangerine',
    },
    {
      id: 4,
      image: require('../Assets/Images/item_8.png'),
      text: 'Cocununt Milk',
    },
    {
      id: 5,
      image: require('../Assets/Images/item_9.png'),
      text: 'Kiwi',
    },
    {
      id: 6,
      image: require('../Assets/Images/item_10.png'),
      text: 'Papaya',
    },
    {
      id: 7,
      image: require('../Assets/Images/item_11.png'),
      text: 'Mango',
    },
    {
      id: 8,
      image: require('../Assets/Images/item_12.png'),
      text: 'Watermelon',
    },
    {
      id: 9,
      image: require('../Assets/Images/item_13.png'),
      text: 'Pear',
    },
    {
      id: 10,
      image: require('../Assets/Images/item_14.png'),
      text: 'PineApple',
    },
    {
      id: 11,
      image: require('../Assets/Images/item_15.png'),
      text: 'Peach',
    },
    {
      id: 12,
      image: require('../Assets/Images/item_16.png'),
      text: 'grapes',
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main_view}>
          <View style={styles.text_view}>
            <CustomText style={styles.heading}>
              Dairy and Milk Alternatives
            </CustomText>
            <CustomText style={styles.text}>Select All</CustomText>
          </View>
          <View>
            <FlatList
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
              }}
              keyExtractor={item => item.id}
              data={dairy_item}
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
          <FlatList
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'flex-start',
            }}
            style={{
              marginTop: moderateScale(10, 0.6),
            }}
            keyExtractor={item => item.id}
            data={fruits_item}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.btn_view}>
                  <View style={styles.image_view}>
                    <CustomImage
                      source={item?.image}
                      style={styles.imageStyle}
                    />
                  </View>
                  eeeeeeeeeee
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
            onPress={() => navigationService.navigate('AvailableFood')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PickItems;

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
