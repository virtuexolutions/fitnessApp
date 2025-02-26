import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import {
  background,
  color,
} from 'native-base/lib/typescript/theme/styled-system';
import Height from './Height';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import {Icon} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../Components/CustomText';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Createrecipe from '../Components/Createrecipe';
import navigationService from '../navigationService';

const Breakfast = () => {
  const [activeScreen, setactiveScreen] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
      <Header
        showBack
        isRightIcon
        title={'Breakfast'}
        iconColor={Color.black}
        rightIconName={'dots-three-vertical'}
        rightIconFrom={Entypo}
        onPressRightIcon={()=>{
          navigationService.navigate('CreateRecipe')
        }}
        // headerColor={Color.peach}
      />
        <View style={styles.searchbox_style}>
          <View style={styles.textinput_Box}>
            <Icon
              as={EvilIcons}
              name="search"
              size={moderateScale(22, 0.3)}
              color={Color.grey}
            />
            <TextInput
              style={{
                marginLeft: moderateScale(10, 0.3),
                fontSize: moderateScale(14, 0.3),
              }}
              placeholder="Food, meal or brand"
              placeholderTextColor={Color.grey}
            />
          </View>
          <Icon
            as={MaterialCommunityIcons}
            name="qrcode-scan"
            color={Color.green}
            size={moderateScale(27, 0.3)}
          />
        </View>
      </View>
      <View style={styles.calories_Box}>
        <View style={styles.mainText_Style}>
          <CustomText isBold style={styles.intake_Text}>
            Daily intake
          </CustomText>
          <CustomText isBold style={styles.kcal_Text}>
            0 / 2655 kcal
          </CustomText>
        </View>
        <View style={styles.bottom_Line}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: moderateScale(15, 0.3),
          }}>
          <View style={styles.adjustStyle}>
            <CustomText style={styles.TextStyle}>Carbs</CustomText>
            <View style={styles.calories_Bottomline}></View>
            <CustomText style={styles.countcalories_Text}>
              0 g / 332 g
            </CustomText>
          </View>
          <View style={styles.adjustStyle}>
            <CustomText style={styles.TextStyle}>Protein</CustomText>
            <View style={styles.calories_Bottomline}></View>
            <CustomText style={styles.countcalories_Text}>
              0 g / 133 g
            </CustomText>
          </View>
          <View style={styles.adjustStyle}>
            <CustomText style={styles.TextStyle}>Fats</CustomText>
            <View style={styles.calories_Bottomline}></View>
            <CustomText style={styles.countcalories_Text}>
              0 g / 89 g
            </CustomText>
          </View>
        </View>
        <View style={styles.lightbottom_Line}></View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            alignSelf: 'center',
            marginTop: moderateScale(10, 0.3),
          }}>
          <CustomText isBold style={styles.adjustnutrients_Text}>
            ADJUST MACRONUTRIENTS
          </CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity
          onPress={() => {
            setactiveScreen('Lasttrack');
          }}
          style={[
            {
              borderBottomColor:
                activeScreen === "Lasttrack" ? Color.green : Color.lightestwhite_Grey,
            },
            styles.screen_Button,
          ]}>
          <Icon
            style={{
              bottom: moderateScale(10, 0.3),
              alignSelf: 'center',
            }}
            as={Entypo}
            name="back-in-time"
            size={moderateScale(25, 0.3)}
            color={[activeScreen === "Lasttrack" ? Color.green : Color.grey]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setactiveScreen('Favorites');
          }}
          style={[
            {
              borderBottomColor:
                activeScreen === 'Favorites' ? Color.green : Color.lightestwhite_Grey,
            },
            styles.screen_Button,
          ]}>
          <Icon
            style={{
              bottom: moderateScale(10, 0.3),
              alignSelf: 'center',
            }}
            as={AntDesign}
            name="hearto"
            size={moderateScale(25, 0.3)}
            color={[activeScreen === 'Favorites' ? Color.green : Color.grey]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setactiveScreen('addItems');
          }}
          style={[
            {
              borderBottomColor:
                activeScreen === 'addItems' ? Color.green : Color.lightestwhite_Grey,
            },
            styles.screen_Button,
          ]}>
          <Icon
            style={{
              bottom: moderateScale(10, 0.3),
              alignSelf: 'center',
            }}
            as={Entypo}
            name="add-to-list"
            size={moderateScale(25, 0.3)}
            color={[activeScreen === 'addItems' ? Color.green : Color.grey]}
          />
        </TouchableOpacity>
      </View>
      <>
        {activeScreen === 'Lasttrack' ? (
          <View style={styles.trackscreen_Container}>
            <CustomText isBold style={styles.trackText}>
              Last Tracked
            </CustomText>
            <View style={styles.lastItem_Box}>
               <View style={{
                flexDirection:'row',
                alignItems:'center',
                // backgroundColor:'green'
                // width:windowWidth*0.9
               }}>
               <View style={{
                width:windowWidth *0.73
               }}>
                <CustomText
                  isBold
                  style={{
                    fontSize: moderateScale(12, 0.3),
                    color: Color.black,
                  }}>
                  Milk
                </CustomText>
                <View
                  style={{
                    flexDirection: 'row',
                    width: windowWidth * 0.2,
                    alignItems: 'center',
                    // backgroundColor:'green',
                    gap: moderateScale(5, 0.3),
                  }}>
                  <CustomText
                    style={{
                      fontSize: moderateScale(11, 0.3),
                      color: Color.grey,
                    }}>
                    0 kcal
                  </CustomText>
                  <Icon
                    as={AntDesign}
                    name="checkcircle"
                    color={Color.darkBlue}
                    size={moderateScale(10, 0.6)}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: windowWidth * 0.2,
                    alignItems: 'center',
                    gap: moderateScale(5, 0.3),
                  }}>
                  <Icon
                    as={FontAwesome5}
                    name="pencil-alt"
                    color={Color.grey}
                    size={moderateScale(10, 0.6)}
                  />
                  <CustomText
                    style={{
                      fontSize: moderateScale(11, 0.3),
                      color: Color.grey,
                    }}>
                    1 serving
                  </CustomText>
                </View>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.addItemCircle}>
      <Icon as={Ionicons} name='add' size={moderateScale(17,0.3)}
      color={Color.grey}/>
      </TouchableOpacity>
      </View>
            </View>
          </View>
        ) : activeScreen === 'Favorites' ? (
          <ScrollView contentContainerStyle={{
            paddingBottom:moderateScale(40,0.3)
          }}>
          <View style={styles.SecondScreen_container}>
          <CustomText isBold style={styles.foodText}>Food</CustomText>
          <View style={styles.favourite_Box}>
          <View style={{
            flexDirection:'row',
            alignItems:'center'
          }}>
          <View style={styles.favourite_Circle}>
          <Icon as={AntDesign} name='heart' size={moderateScale(20,0.3)}
          color={Color.green}/>
          </View>
          <View style={{
            marginLeft:moderateScale(10,0.3),
            width:windowWidth *0.7,
            // backgroundColor:'green'
          }}>
            <CustomText style={{
              fontSize:moderateScale(14,0.3),
              color:Color.black
            }}>No Favourite Food Yet</CustomText>
            <CustomText style={{
              fontSize:moderateScale(10,0.3),
              color:Color.grey,marginTop:moderateScale(6,0.3)
            }}>As You track, save your favourite items like
              tomato, egg or banana
            </CustomText>
          </View>
          </View>
          </View>
          <CustomText isBold style={{
            fontSize:moderateScale(16,0.3),
            color:Color.grey,
            marginTop:moderateScale(10,0.3)
          }}>Meals</CustomText>
          <Createrecipe style={{marginTop:moderateScale(10,0.3)}} image={require("../Assets/Images/lunch.png")} 
          title={'Create Meals'} subtext={'Create and save your usual meals as favorites'}/>
          <CustomText isBold style={{
            fontSize:moderateScale(16,0.3),
            color:Color.grey,
            marginTop:moderateScale(10,0.3)
          }}>Recipes</CustomText>
          <Createrecipe style={{marginTop:moderateScale(10,0.3)}} image={require("../Assets/Images/lunch.png")} 
          title={'Create Recipes'} subtext={'Create and save your usual recipes as favorites'}/>  
          </View>
          </ScrollView>
        ) : activeScreen === 'addItems' ? (
          <View>
            <Text>ali</Text>
          </View>
        ) : null}
      </>
    </SafeAreaView>
  );
};

export default Breakfast;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  headerView: {
    height: windowHeight * 0.195,
    width: windowWidth,
    backgroundColor: Color.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    // marginTop:moderateScale(10,0.3)
    // paddingHorizontal:moderateScale(15,0.6)
  },
  textinput_Box: {
    width: windowWidth * 0.77,
    // height:moderateScale(2,0.3),
    borderRadius: moderateScale(20, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.lightestwhite_Grey,
    paddingHorizontal: moderateScale(10, 0.6),
    // backgroundColor:'green',
  },
  searchbox_style: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(15, 0.3),
    alignSelf: 'center',
    marginTop: moderateScale(10, 0.3),
  },
  calories_Box: {
    width: windowWidth * 0.88,
    height: windowHeight * 0.23,
    borderRadius: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(12, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    backgroundColor: Color.white,
    marginTop: moderateScale(18, 0.3),
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  intake_Text: {
    fontSize: moderateScale(14, 0.3),
    color: Color.black,
  },
  kcal_Text: {
    fontSize: moderateScale(14, 0.3),
    color: Color.black,
  },
  mainText_Style: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.81,
  },
  bottom_Line: {
    width: windowWidth * 0.81,
    height: moderateScale(5, 0.3),
    backgroundColor: Color.lightestwhite_Grey,
    borderRadius: moderateScale(5, 0.3),
    marginTop: moderateScale(5, 0.3),
  },
  TextStyle: {
    fontSize: moderateScale(12, 0.3),
    color: Color.black,
    textAlign: 'center',
  },
  calories_Bottomline: {
    width: windowWidth * 0.2,
    height: moderateScale(5, 0.3),
    backgroundColor: Color.lightestwhite_Grey,
    borderRadius: moderateScale(5, 0.3),
    marginTop: moderateScale(5, 0.3),
  },
  countcalories_Text: {
    fontSize: moderateScale(10, 0.3),
    color: Color.black,
    marginTop: moderateScale(7, 0.3),
    textAlign: 'center',
  },
  adjustStyle: {
    // backgroundColor:'green',
    width: windowWidth * 0.2,
  },
  lightbottom_Line: {
    width: windowWidth * 0.81,
    height: moderateScale(1.8, 0.3),
    backgroundColor: Color.lightestwhite_Grey,
    borderRadius: moderateScale(5, 0.3),
    marginTop: moderateScale(20, 0.3),
  },
  adjustnutrients_Text: {
    fontSize: moderateScale(16, 0.3),
    color: Color.green,
  },
  screen_Button: {
    width: windowWidth * 0.34,
    borderBottomWidth: 2,
    // borderBottomColor:Color.green
  },
  buttonStyle: {
    marginTop: moderateScale(25, 0.3),
    flexDirection: 'row',
  },
  trackText: {
    fontSize: moderateScale(14, 0.3),
    color: Color.grey,
    letterSpacing: 1,
    marginTop: moderateScale(10, 0.3),
  },
  trackscreen_Container: {
    paddingHorizontal: moderateScale(20, 0.6),
  },
  lastItem_Box: {
    width: windowWidth * 0.88,
    height: windowHeight * 0.12,
    backgroundColor: Color.white,
    marginTop: moderateScale(13, 0.3),
    justifyContent:'center',
    // alignItems:'center',
    borderRadius: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(15, 0.6),
    // paddingVertical:moderateScale(12,0.3)
  },
  addItemCircle: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    borderRadius: windowWidth,
    backgroundColor: Color.lightestwhite_Grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodText:{
    fontSize:moderateScale(16,0.3),
    color:Color.grey,marginTop:moderateScale(10,0.3)
  },
  SecondScreen_container:{
    paddingHorizontal:moderateScale(20,0.6),
  },
  favourite_Box:{
    width:windowWidth *0.88,
    height:windowHeight *0.12,
    borderRadius:moderateScale(10,0.3),
    marginTop:moderateScale(10,0.3),
    alignItems:'center',
    justifyContent:'center',
    // paddingHorizontal:moderateScale(15,0.3),
    backgroundColor:Color.lightest_grey
  },
  favourite_Circle:{
    width:windowWidth *0.1,
    height:windowWidth *0.1,
    borderRadius:windowWidth,
    backgroundColor:Color.white,
    alignItems:'center',
    justifyContent:'center'
  }
});
