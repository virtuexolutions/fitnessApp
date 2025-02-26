import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import Feather from 'react-native-vector-icons/Feather';
import {Icon} from 'native-base';
import {propsFlattener} from 'native-base/lib/typescript/hooks/useThemeProps/propsFlattener';
import {position} from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../Components/CustomButton';

const DietaryNeeds = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [allergies, setallergies] = useState({
    nuts: false,
        fish: false,
        shellfish: false,
        egg: false,
        milk: false,
        lactose: false,
        gluten: false,
        wheat: false,
  });
  const handleToggle = allergies => {
    setallergies(prev => ({...prev, [allergies]: !prev[allergies]}));
  };
  const FoodPreferList = [
    {
      id: 1,
      title: 'Vegan',
    },
    {
      id: 2,
      title: 'Vegetarian',
    },
    {
      id: 3,
      title: 'Pascetarian',
    },
  ];
  const AllergiesList = [
    {
      id: 1,
      title: 'Allergic to nuts',
    },
    {
      id: 2,
      title: 'Allergic to fish',
    },
    {
      id: 3,
      title: 'Allergic to shellfish',
    },
    {
      id: 4,
      title: 'Allergic to egg',
    },
    {
      id: 5,
      title: 'Allergic to milk',
    },
    {
      id: 6,
      title: 'Lactose intolerant',
    },
    {
      id: 7,
      title: 'Gluten intolerant',
    },
    {
      id: 8,
      title: 'Whete intolerant',
    },
    {
        id: 9,
        title: 'Whete intolerant',
      },
  ];

  return (
    <SafeAreaView>
      <Header showBack title={'Dietary Needs & Preferences'} />
      <ScrollView style={styles.container}>
        <View style={styles.mainContainer}>
          <CustomText isBold style={styles.Text}>
            Food Preferences
          </CustomText>
          <FlatList
            contentContainerStyle={{
              height: windowHeight * 0.21,
              // backgroundColor:'red'
            }}
            data={FoodPreferList}
            renderItem={({item}) => {
              return (
                <View style={styles.boxStyle}>
                  <CustomText style={styles.foodCategory}>
                    {item?.title}
                  </CustomText>
                  <TouchableOpacity
                    onPress={() => {
                      setIsCheck(item?.id);
                    }}
                    style={styles.checkBox}>
                    {isCheck === item?.id ? (
                      <Icon
                        as={Feather}
                        name="check"
                        size={moderateScale(12, 0.3)}
                        color={Color.black}
                      />
                    ) : null}
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          {/* <View> */}
          <CustomText isBold style={styles.Text}>
            ALLERGIES
          </CustomText>
          <FlatList
            data={AllergiesList}
            renderItem={({item}) => {
              return (
                <View style={{top: moderateScale(10, 0.3)}}>
                  <View style={styles.boxStyle}>
                    <CustomText style={styles.AllergicText}>
                      {item?.title}
                    </CustomText>
                    <Switch
                      trackColor={{false: '#767577', true: Color.green}}
                      thumbColor={allergies[allergies] ? Color.white : '#f4f3f4'}
                      onValueChange={() => handleToggle(allergies)}
                      value={allergies[allergies]}
                    />
                  </View>
                </View>
              );
            }}
          />
          {/* </View> */}
          
        </View>
    </ScrollView>
    <CustomButton
              style={
                styles.buttonStyle}
              text={'Save'}
              textColor={Color.black}
              fontSize={moderateScale(12, 0.6)}
            />
    </SafeAreaView>
  );
};

export default DietaryNeeds;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight *0.77,
    paddingBottom:moderateScale(20,0.3)
  },
  mainContainer: {
    paddingHorizontal: moderateScale(20, 0.6),
    // backgroundColor:'green'
  },
  Text: {
    fontSize: moderateScale(16, 0.3),
    color: Color.grey,
    letterSpacing: 1,
  },
  boxStyle: {
    width: windowWidth * 0.9,
    height: moderateScale(40, 0.3),
    marginTop: moderateScale(5, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
    // alignItems:'center',
    // justifyContent:'space-between',
    // paddingHorizontal:moderateScale(15,0.6),
    // top:moderateScale(12,0.3)
  },
  foodCategory: {
    fontSize: moderateScale(14, 0.3),
    color: Color.black,
    width: windowWidth * 0.83,
  },
  checkBox: {
    width: moderateScale(16, 0.3),
    height: moderateScale(16, 0.3),
    borderWidth: 1.5,
    borderColor: Color.green,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'green'
  },
  AllergicText: {
    fontSize: moderateScale(15, 0.3),
    color: Color.black,
    width: windowWidth * 0.79,
  },
  buttonStyle: {
      width: windowWidth * 0.9,
      height: moderateScale(40, 0.6),
      borderRadius: moderateScale(20, 0.6),
      // backgroundColor: Color.white,
      backgroundColor:Color.peach,
      marginTop: moderateScale(20, 0.6),
    },
});
