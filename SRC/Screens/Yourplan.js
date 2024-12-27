import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {FlatList} from 'native-base';
import CustomImage from '../Components/CustomImage';

const Yourplan = () => {
  const filterList1 = [
    {
      id: 1,
      image: require('../Assets/Images/foodimage1.png'),
      subText: "Eat like the world's longest-living people",
      mainText: 'Vitality',
    },
    {
      id: 2,
      image: require('../Assets/Images/foodimage2.png'),
      subText: '21-day meal plan',
      mainText: '3 Week Weightloss',
    },
    {
      id: 3,
      image: require('../Assets/Images/foodimage1.png'),
      subText: '21-day meal plan',
      mainText: '3 Week Weightloss',
    },
  ];
  const filterList2 = [
    {
      id: 1,
      image: require('../Assets/Images/foodimage3.png'),
      subText: 'fast 2 days/week',
      mainText: '5:2',
    },
    {
      id: 2,
      image: require('../Assets/Images/foodimage4.png'),
      subText: '21-day meal plan',
      mainText: '16:8 Morning Fasting',
    },
    {
      id: 3,
      image: require('../Assets/Images/foodimage3.png'),
      subText: '21-day meal plan',
      mainText: '3 Week Weightloss',
    },
  ];
  const filterList3 = [
    {
      id: 1,
      image: require('../Assets/Images/foodimage5.png'),
      subText: "Eat like the world's longest-living people",
      mainText: 'Vitality',
    },
    {
      id: 2,
      image: require('../Assets/Images/foodimage6.png'),
      subText: '21-day meal plan',
      mainText: '3 Week Weightloss',
    },
    {
      id: 3,
      image: require('../Assets/Images/foodimage6.png'),
      subText: '21-day meal plan',
      mainText: '3 Week Weightloss',
    },
  ];

  return (
    <SafeAreaView
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: Color.white,
      }}>
      <Header
        title={'TAKE OUR TEST'}
        textstyle={{color: Color.grey}}
        showBack
        isRightIcon
        iconColor={Color.black}
        rightIconName={'dots-three-vertical'}
        rightIconFrom={Entypo}
        headerColor={Color.peach}
      />
      <ImageBackground
        imageStyle={{
          height: '100%',
          width: '100%',
        }}
        source={require('../Assets/Images/bottomroundCircle2.png')}
        style={styles.bgcImage}></ImageBackground>
      <View
        style={{
          height: windowHeight,
          top: -120,
        }}>
        <ScrollView>
          <CustomText
            isBold
            style={{
              fontSize: moderateScale(24, 0.6),
              color: Color.grey,
              letterSpacing: 2,
              alignSelf: 'center',
            }}>
            Find Your Plan
          </CustomText>
          <CustomText
            style={{
              fontSize: moderateScale(10, 0.6),
              color: Color.grey,
              marginTop: moderateScale(10, 0.6),
              alignSelf: 'center',
              // backgroundColor:'green'
            }}>
            Take our quick test and we'll find the perfect plan for you
          </CustomText>

          <View style={styles.textStyle}>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(15, 0.6),
                color: Color.grey,
                letterSpacing: 1.2,
              }}>
              Curated By Blu Nutrition Experts
            </CustomText>
            <View
              style={{
                borderBottomWidth: 1.5,
                width: windowWidth * 0.75,
                borderBottomColor: Color.peach,
                marginTop: moderateScale(5, 0.6),
              }}></View>
          </View>
          <View style={styles.mainHeading}>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(18, 0.6),
                color: Color.grey,
                letterSpacing: 1.2,
                marginLeft: moderateScale(40, 0.3),
              }}>
              Balanced
            </CustomText>

            <FlatList
              horizontal
              contentContainerStyle={{
                gap: moderateScale(20, 0.6),
                marginTop: moderateScale(10, 0.6),
                // paddingBottom:moderateScale(40,0.6),
                // backgroundColor:'green',
                // height:windowHeight*0.22
                paddingHorizontal: moderateScale(40, 0.6),
              }}
              data={filterList1}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity activeOpacity={0.9} style={styles.boxStyle}>
                    <View style={styles.food_Image}>
                      <CustomImage
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'contain',
                        }}
                        source={item.image}
                      />
                    </View>
                    <View style={{marginTop: moderateScale(5, 0.6)}}>
                      <CustomText
                        style={{
                          fontSize: moderateScale(10, 0.6),
                          color: Color.grey,
                        }}>
                        {item.subText}
                      </CustomText>
                      <CustomText
                        style={{
                          fontSize: moderateScale(15, 0.6),
                          color: Color.grey,
                          fontWeight: 'bold',
                          top: moderateScale(3, 0.6),
                        }}>
                        {item.mainText}
                      </CustomText>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={styles.mainHeading}>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(18, 0.6),
                color: Color.grey,
                letterSpacing: 1.2,
                marginLeft: moderateScale(40, 0.3),
              }}>
              Fasting
            </CustomText>

            <FlatList
              horizontal
              contentContainerStyle={{
                gap: moderateScale(20, 0.6),
                marginTop: moderateScale(10, 0.6),
                // backgroundColor:'green',
                // height:windowHeight*0.22
                paddingHorizontal: moderateScale(40, 0.6),
              }}
              data={filterList2}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity activeOpacity={0.9} style={styles.boxStyle}>
                    <View style={styles.food_Image}>
                      <CustomImage
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'contain',
                        }}
                        source={item.image}
                      />
                    </View>
                    <View style={{marginTop: moderateScale(5, 0.6)}}>
                      <CustomText
                        style={{
                          fontSize: moderateScale(10, 0.6),
                          color: Color.grey,
                        }}>
                        {item.subText}
                      </CustomText>
                      <CustomText
                        style={{
                          fontSize: moderateScale(15, 0.6),
                          color: Color.grey,
                          fontWeight: 'bold',
                          top: moderateScale(3, 0.6),
                        }}>
                        {item.mainText}
                      </CustomText>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={styles.mainHeading}>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(18, 0.6),
                color: Color.grey,
                letterSpacing: 1.2,
                marginLeft: moderateScale(40, 0.3),
              }}>
              High Protein
            </CustomText>

            <FlatList
              horizontal
              contentContainerStyle={{
                gap: moderateScale(20, 0.6),
                marginTop: moderateScale(10, 0.6),
                paddingBottom: moderateScale(40, 0.6),
                // backgroundColor:'green',
                // height:windowHeight*0.22
                paddingHorizontal: moderateScale(40, 0.6),
              }}
              data={filterList3}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity activeOpacity={0.9} style={styles.boxStyle}>
                    <View style={styles.food_Image}>
                      <CustomImage
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'contain',
                        }}
                        source={item.image}
                      />
                    </View>
                    <View style={{marginTop: moderateScale(5, 0.6)}}>
                      <CustomText
                        style={{
                          fontSize: moderateScale(10, 0.6),
                          color: Color.grey,
                        }}>
                        {item.subText}
                      </CustomText>
                      <CustomText
                        style={{
                          fontSize: moderateScale(15, 0.6),
                          color: Color.grey,
                          fontWeight: 'bold',
                          top: moderateScale(3, 0.6),
                        }}>
                        {item.mainText}
                      </CustomText>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Yourplan;

const styles = StyleSheet.create({
  bgcImage: {
    width: windowWidth,
    height: windowHeight * 0.25,
    backgroundColor: Color.white,
    // alignItems: 'center',
  },
  textStyle: {
    marginTop: moderateScale(70, 0.6),
    height: moderateScale(20, 0.6),
    alignItems: 'center',
  },
  boxStyle: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.21,
    // alignItems: 'center',
    backgroundColor: Color.peach,
    borderRadius: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(13, 0.6),
    paddingVertical: moderateScale(10, 0.6),
  },
  food_Image: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.08,
    alignSelf: 'center',
    // backgroundColor:'green'
  },
  mainHeading: {
    // backgroundColor : 'red',
    // width:'100%',
    // paddingLeft:moderateScale(40,0.6),
    marginTop: moderateScale(25, 0.6),
  },
});
