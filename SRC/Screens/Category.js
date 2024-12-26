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
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Category = () => {
  const [selected, setSelected] = useState(!true);
  const category_list = [
    {
      id: 1,
      image: require('../Assets/Images/category_1.png'),
      text: 'Weight',
    },
    {
      id: 2,
      image: require('../Assets/Images/category_2.png'),
      text: 'Excercise',
    },
    {
      id: 3,
      image: require('../Assets/Images/category_3.png'),

      text: 'Breakfast',
    },
    {
      id: 4,
      image: require('../Assets/Images/category_4.png'),
      text: 'Lunch',
    },
    {
      id: 5,
      image: require('../Assets/Images/category_5.png'),
      text: 'Dinner',
    },
    {
      id: 6,
      image: require('../Assets/Images/category_6.png'),
      text: 'Snack',
    },
  ];
  return (
    <SafeAreaView style={styles.safe_are_view}>
      <ScrollView>
        <ImageBackground
          source={require('../Assets/Images/background3.png')}
          style={styles.image_background_view}
          imageStyle={styles.image_background_image}>
          <Header
            showBack
            isRightIcon
            iconColor={Color.black}
            rightIconName={'dots-three-vertical'}
            rightIconFrom={Entypo}
          />
          <View style={{marginTop: moderateScale(130, 0.6)}}>
            <FlatList
              data={category_list}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      width: windowWidth * 0.4,
                      height: windowHeight * 0.2,
                      alignItems: 'center',
                      paddingVertical: moderateScale(10, 0.6),
                      backgroundColor: Color.white,
                      marginTop: moderateScale(10, 0.6),
                      marginRight: moderateScale(10, 0.6),
                      borderRadius: moderateScale(20, 0.6),
                    }}>
                    <View style={styles.imageStyle}>
                      <CustomImage
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'contain',
                        }}
                        source={item?.image}
                      />
                    </View>
                    <CustomText
                      isBold
                      style={{
                        fontSize: moderateScale(12, 0.3),
                        color: Color.darkGray,
                        marginTop: moderateScale(10, 0.3),
                      }}>
                      {item?.text}
                    </CustomText> 
                    <TouchableOpacity activeOpacity={0.9}
                      // onPress={() => {
                      //   setSelected(!true);
                      // }}
                      style={[
                        selected
                          ? {backgroundColor: Color.peach}
                          : {backgroundColor: Color.lightestwhite_Grey},
                        styles.edit_btn,
                      ]}>
                      <Icon
                        as={AntDesign}
                        name="plus"
                        color={Color.orange}
                        size={moderateScale(18, 0.6)}
                      />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;

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
  header_view: {
    backgroundColor: Color.peach,
    width: windowWidth,
    height: windowHeight * 0.32,
    borderBottomRightRadius: windowWidth * 0.5,
    borderBottomLeftRadius: windowWidth * 0.5,
  },
  image_background_image: {
    width: '100%',
    height: '45%',
    top: -100,
  },
  image_background_view: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
  },
  heading: {
    fontSize: moderateScale(20, 0.6),
    textAlign: 'center',
    color: Color.grey,
  },
  text: {
    fontSize: moderateScale(12, 0.6),
    textAlign: 'center',
    color: Color.grey,
  },
  time: {
    fontSize: moderateScale(32, 0.6),
    color: '#686868',
    marginTop: moderateScale(20, 0.6),
  },
  buttonStyle: {
    width: windowWidth * 0.8,
    height: moderateScale(55, 0.6),
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
  edit_btn: {
    width: windowWidth * 0.32,
    height: moderateScale(30, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(10, 0.6),
    // backgroundColor: Color.lightestwhite_Grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weight_container: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.22,
    backgroundColor: Color.peach,
    borderRadius: moderateScale(20, 0.6),
    marginTop: moderateScale(20, 0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.08,
    // backgroundColor:'green'
  },
});
