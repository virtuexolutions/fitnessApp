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
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import {Image} from 'react-native-svg';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import Header from '../Components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Icon} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';

const Recipedetail = () => {
  const ingredientsList = [
    {
      id: 1,
      SNo: '1',
      title: '4 eggs',
    },
    {
      id: 2,
      SNo: '2',
      title: '2 tbsp parmesan, grated',
    },
    {
      id: 3,
      SNo: '3',
      title: '4 slices cooked bacon, crumbled',
    },
    {
      id: 4,
      SNo: '4',
      title: '1 tbsp chives, chopped',
    },
    {
      id: 5,
      SNo: '5',
      title: 'Pepper',
    },
  ];
  const instructionList = [
    {
      id: 1,
      SNo: '1',
      title: 'Preheat the oven to 400 °F (200 °C).',
    },
    {
      id: 2,
      SNo: '2',
      title:
        'Crack the eggs, placing all the egg whites in one bowl and separating the egg yolks in individual containers so they stay whole.',
    },
    {
      id: 3,
      SNo: '3',
      title:
        'Whip the egg whites untill stiff (so you can turn the bowl upside down without the batter flowing out). Lightly stir in the parmesan, bacon and chives.',
    },
    {
      id: 4,
      SNo: '4',
      title:
        'Line a baking tray. Create four "clouds" with the egg mixture. With a spoon, create a small wall with a pit in the middle of the egg cloud.',
    },
    {
      id: 5,
      SNo: '5',
      title:
        'Bake in the oven for 3 minutes. Take them out and place one yolk in the middle of each. Season with pepper and bake for another 2-3 minutes, until the yolks are almost set.',
    },
  ];
  const informationList = [
    {
      id: 1,
      // SNo: '1',
      title: 'Calories',
      text:'358 kcal'
    },
    {
      id: 2,
      // SNo: '2',
      title: 'Net carbs',
      text:'1.2 g'
    },
    {
      id: 3,
      // SNo: '3',
      title: 'Fat',
      text:'25 g'  
    },
    {
      id: 4,
      // SNo: '4',
      title: 'Protein',
      text:'29 g'  
    },
    {
      id: 5,
      // SNo: '5',
      title: 'Cholesterol',
      text:'515 mg'  
    },
    {
      id: 6,
      // SNo: '5',
      title: 'Sodium',
      text:'975 mg'  
    },
    {
      id: 7,
      // SNo: '5',
      title: 'Potassium',
      text:'178 mg'  
    },
  ];
  // const [isShow, setShow] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor:Color.white,
      }} contentContainerStyle={{
        paddingBottom:moderateScale(40,0.6)
      }}>
        {/* <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: Color.white,
          }}> */}
          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.3,
              // backgroundColor:'green'
            }}>
            <ImageBackground
              imageStyle={{
                width: '100%',
                height: '100%',
                // bottom:moderateScale(50,0.3),
                // backgroundColor: Color.white,
              }}
              style={{
                height: windowHeight * 0.3,
                width: windowWidth,
                backgroundColor: 'red',
              }}
              source={require('../Assets/Images/cheesyeggclouds.png')}>
              <Header textstyle={{
                color:Color.black
              }}
        title={'Recipes'}
        showBack
        isRightIcon
        iconColor={Color.black}
        rightIconName={'dots-three-vertical'}
        rightIconFrom={Entypo}
        isLogout={false}
      />
            </ImageBackground>
          </View>
          <View style={styles.mainHeading}>
            <CustomText
              style={{
                fontSize: moderateScale(20, 0.3),
              }}
              isBold>
              Cheesy Egg Clouds
            </CustomText>
            <View style={styles.subtextStyle}>
              <CustomText
                style={{
                  fontSize: moderateScale(14, 0.3),
                  color: Color.black,
                }}>
                1.2g net carbs
              </CustomText>
              <View
                style={{
                  width: moderateScale(1.3, 0.3),
                  height: moderateScale(16, 0.3),
                  backgroundColor: Color.black,
                  top: moderateScale(2, 0.3),
                }}></View>
              <CustomText
                style={{
                  fontSize: moderateScale(14, 0.3),
                  color: Color.black,
                  marginLeft: moderateScale(3, 0.3),
                }}>
                25g fat
              </CustomText>
              <View
                style={{
                  width: moderateScale(1.3, 0.3),
                  height: moderateScale(16, 0.3),
                  backgroundColor: Color.black,
                  top: moderateScale(2, 0.3),
                }}></View>
              <CustomText
                style={{
                  fontSize: moderateScale(14, 0.3),
                  color: Color.black,
                  marginLeft: moderateScale(3, 0.3),
                }}>
                29g protein
              </CustomText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: windowWidth * 0.72,
              // backgroundColor:'red',
              alignSelf: 'center',
              gap: moderateScale(30, 0.3),
              paddingHorizontal: moderateScale(5, 0.6),
            }}>
            <View>
              <View style={styles.circle}>
                <Icon
                  as={AntDesign}
                  name="clockcircle"
                  color={Color.peach}
                  size={moderateScale(35, 0.3)}
                />
              </View>
              <CustomText
                style={{
                  fontSize: moderateScale(17, 0.3),
                  color: Color.black,
                }}>
                30 min
              </CustomText>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.circle}>
                <Icon
                  as={MaterialIcons}
                  name="food-bank"
                  color={Color.peach}
                  size={moderateScale(40, 0.3)}
                />
              </View>

              <CustomText
                style={{
                  fontSize: moderateScale(17, 0.3),
                  color: Color.black,
                }}>
                2 servings
              </CustomText>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.circle}>
                <Icon
                  as={FontAwesome6}
                  name="weight-scale"
                  color={Color.peach}
                  size={moderateScale(31, 0.3)}
                />
              </View>

              <CustomText
                style={{
                  fontSize: moderateScale(17, 0.3),
                  color: Color.black,
                }}>
                358 kcal
              </CustomText>
            </View>
          </View>
          <CustomText
            style={{
              fontSize: moderateScale(15, 0.3),
              color: Color.black,
              // backgroundColor:'red',
              width: windowWidth * 0.84,
              textAlign: 'center',
              alignSelf: 'center',
              marginTop: moderateScale(12, 0.3),
            }}>
            Cheese and bacon make for the perfect keto breakfast dish.
          </CustomText>
          <CustomText
                isBold
                style={{
                  fontSize: moderateScale(19, 0.3),
                  color: Color.black,
                  marginLeft:moderateScale(30,0.3),
                  marginTop:moderateScale(10,0.3)
                }}>
                Ingredients
              </CustomText>
          <FlatList 
          data={ingredientsList}
          renderItem={({item})=>{
            return(
              <View style={{
                flexDirection:'row',
                // alignItems:'center',
                width:windowWidth *0.9,
                alignSelf:'center',
                paddingHorizontal:moderateScale(10,0.6),
                // backgroundColor:'green'
              }}>
                <View style={styles.CountCircle}>
                <CustomText style={{
                  color:Color.black,
                  fontSize:moderateScale(10,0.3)
                }}>{item.SNo}</CustomText>
                </View>
              <View style={styles.textStyle}>
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.3),
                    color: Color.black,
                    marginLeft: moderateScale(10, 0.3),
                  }}>
                 {item.title}
                </CustomText>
              </View>
              </View>
            )
          }}
          />
          <CustomText
                isBold
                style={{
                  fontSize: moderateScale(19, 0.3),
                  color: Color.black,
                  marginLeft:moderateScale(30,0.3),
                  marginTop:moderateScale(10,0.3)
                }}>
                Instructions
              </CustomText>
              <FlatList 
          data={instructionList}
          renderItem={({item})=>{
            return(
              <View style={{
                flexDirection:'row',
                width:windowWidth *0.9,
                // top:moderateScale(3,0.3),
                // alignItems:'center',
                alignSelf:'center',
                paddingHorizontal:moderateScale(10,0.6),
                // backgroundColor:'green'
              }}>
              <View style={styles.CountCircle}>
                <CustomText style={{
                  color:Color.black,
                  fontSize:moderateScale(10,0.3)
                }}>{item.SNo}</CustomText>
                </View>
              <View style={styles.textStyle}>
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.3),
                    color: Color.black,
                    marginLeft: moderateScale(10, 0.3),
                  }}>
                 {item.title}
                </CustomText>
              </View>
              </View>
            )
          }}
          />
          <View style={{
            marginLeft:moderateScale(30,0.3),
            marginTop:moderateScale(10,0.3),
            borderBottomWidth:1,
            borderBottomColor:Color.lightest_grey,
            width:windowWidth *0.85,
            // backgroundColor:'red'
          }}>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(19, 0.3),
                color: Color.black,
                letterSpacing: 2,
                // marginLeft:moderateScale(30,0.3),
                  // marginTop:moderateScale(10,0.3)
              }}>
              Nutrition information
            </CustomText>
            <CustomText
              style={{
                fontSize: moderateScale(15, 0.3),
                color: Color.lightGrey,
                // letterSpacing: 2
              }}>
              1 serving
            </CustomText>
            </View>
          <FlatList
          data={informationList}
          renderItem={({item})=>{
            return(
              <View style={styles.dietPlanStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              {item.title}
            </CustomText>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              {item.text}
            </CustomText>
          </View>
            )
          }}
          />
          {/* <View style={styles.drawerTextStyle}>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(19, 0.3),
                color: Color.black,
              }}>
              Instructions
            </CustomText>
            <View
              style={{
                // marginVertical:moderateScale(10,0.6)
                paddingVertical: moderateScale(5, 0.3),
                gap: moderateScale(5, 0.3),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.CountCircle}>
                  <CustomText isBold>1</CustomText>
                </View>
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.3),
                    color: Color.black,
                    marginLeft: moderateScale(10, 0.3),
                  }}>
                  Preheat the oven to 400 °F (200 °C).
                </CustomText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.CountCircle}>
                  <CustomText isBold>2</CustomText>
                </View>
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.3),
                    color: Color.black,
                    marginLeft: moderateScale(10, 0.3),
                  }}>
                  Crack the eggs, placing all the egg whites in one bowl and
                  separating the egg yolks in individual containers so they stay
                  whole.
                </CustomText>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.CountCircle}>
                  <CustomText isBold>3</CustomText>
                </View>
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.3),
                    color: Color.black,
                    marginLeft: moderateScale(10, 0.3),
                  }}>
                  Whip the egg whites untill stiff (so you can turn the bowl
                  upside down without the batter flowing out). Lightly stir in
                  the parmesan, bacon and chives.
                </CustomText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.CountCircle}>
                  <CustomText isBold>4</CustomText>
                </View>
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.3),
                    color: Color.black,
                    marginLeft: moderateScale(10, 0.3),
                  }}>
                  Line a baking tray. Create four "clouds" with the egg mixture.
                  With a spoon, create a small wall with a pit in the middle of
                  the egg cloud.
                </CustomText>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.CountCircle}>
                  <CustomText isBold>5</CustomText>
                </View>
                <CustomText
                  style={{
                    fontSize: moderateScale(16, 0.3),
                    color: Color.black,
                    marginLeft: moderateScale(10, 0.3),
                  }}>
                  Bake in the oven for 3 minutes. Take them out and place one
                  yolk in the middle of each. Season with pepper and bake for
                  another 2-3 minutes, until the yolks are almost set.
                </CustomText>
              </View>
            </View>
          </View>
          <View style={styles.drawerTextStyle}>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(19, 0.3),
                color: Color.black,
                letterSpacing: 2,
              }}>
              Nutrition information
            </CustomText>
            <CustomText
              style={{
                fontSize: moderateScale(15, 0.3),
                color: Color.lightGrey,
                // letterSpacing: 2
              }}>
              1 serving
            </CustomText>
          </View>
          <View style={styles.dietPlanStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              Calories
            </CustomText>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              358 kcal
            </CustomText>
          </View>
          <View style={styles.dietPlanStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              Net carbs
            </CustomText>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              1.2 g
            </CustomText>
          </View>
          <View style={styles.dietPlanStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              Fat
            </CustomText>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              25 g
            </CustomText>
          </View>
          <View style={styles.dietPlanStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              Protein
            </CustomText>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              29 g
            </CustomText>
          </View>
          <View style={styles.dietPlanStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              Cholesterol
            </CustomText>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              515 mg
            </CustomText>
          </View>
          <View style={styles.dietPlanStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              Sodium
            </CustomText>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              975 mg
            </CustomText>
          </View>
          <View style={styles.dietPlanStyle}>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              Potassium
            </CustomText>
            <CustomText
              isBold
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
                // letterSpacing: 2
              }}>
              178 mg
            </CustomText>
          </View> */}
          {/* <Header/> */}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipedetail;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.black,
  },
  subtextStyle: {
    flexDirection: 'row',
    width: windowWidth * 0.7,
    gap: 5,
  },
  //   imageStyle: {

  //   },
  mainHeading: {
    paddingHorizontal: moderateScale(30, 0.3),
    paddingVertical: moderateScale(15, 0.3),
    // backgroundColor: 'red',
    // position:'absolute'
    // marginTop:moderateScale(55,0.3)
  },
  header_view: {
    backgroundColor: Color.peach,
    width: windowWidth,
    height: windowHeight * 0.32,
    borderBottomRightRadius: windowWidth * 0.5,
    borderBottomLeftRadius: windowWidth * 0.5,
  },
  circle: {
    width: windowWidth * 0.13,
    height: windowWidth * 0.13,
    borderRadius: (windowWidth * 0.13) / 2,
    borderWidth: 1,
    borderColor: Color.lightest_grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    // marginTop: moderateScale(10, 0.3),
    // backgroundColor:'red',
    // width:windowWidth *0.9,
    // alignSelf:'center',
    // paddingHorizontal: moderateScale(20, 0.6),
    paddingVertical:moderateScale(5,0.6)
  },
  CountCircle: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
    borderRadius: (windowWidth * 0.05) / 2,
    backgroundColor: Color.peach,
    top:moderateScale(8,0.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dietPlanStyle: {
    flexDirection: 'row',
    // backgroundColor:'red',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: moderateScale(9, 0.3),
    paddingHorizontal: moderateScale(30, 0.6),
  },
});
