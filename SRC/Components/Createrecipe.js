import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomImage from './CustomImage';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';

const Createrecipe = ({title,subtext,image,style}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}
      style={[styles.mainBox, style]}>
      <View style={styles.recipeImageStyle}>
        <CustomImage
          style={{
            height: '100%',
            width: '100%',
            
          }}
          source={image}
        />
      </View>
      <View style={styles.CreateMeal_Box}>
        <CustomText style={styles.mealText}>{title}</CustomText>
        <CustomText style={styles.subtext_Style}>{subtext}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default Createrecipe;

const styles = StyleSheet.create({
  recipeImageStyle: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    // resizeMode:'stretch',
    // borderRadius:windowWidth,
    // marginTop:moderateScale(10,)
    backgroundColor: Color.lightestwhite_Grey,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.16,
    shadowRadius: 1.51,
    elevation: 1
  },
  CreateMeal_Box: {
    width: windowWidth * 0.64,
    height: windowHeight * 0.13,
    backgroundColor: Color.white,
    borderRadius: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(15, 0.6),
    justifyContent:'center',
    gap:moderateScale(5,0.3)
    // marginVertical:moderateScale
  },
  mealText:{
    fontSize:moderateScale(15,0.3),
    color:Color.black
  },
  subtext_Style:{
    fontSize:moderateScale(12,0.3),
    color:Color.grey
  },
  mainBox:{
    flexDirection:'row'
  }
});
