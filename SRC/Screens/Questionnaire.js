import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import { moderateScale } from 'react-native-size-matters';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import Color from '../Assets/Utilities/Color';
import { FlatList } from 'native-base';
import CustomButton from '../Components/CustomButton';

const Questionnaire = () => {
    const daysList = [
        {
            id: 1,
            text: 'No'
        },
        {
            id: 2,
            text: 'Yes, Friday, Saturday And Sunday'
        },
        {
            id: 3,
            text: 'Yes, Saturday And Sunday'
        },
        {
            id: 4,
            text: 'Yes Saturday'
        },
        {
            id: 5,
            text: 'Yes Sunday'
        }
    ]
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.bgcImageStyle}
        source={require('../Assets/Images/bgcthemeimage.png')}
        imageStyle={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <CustomText isBold style={{
            fontSize:moderateScale(20,0.6),
            color:Color.darkGray,marginTop:moderateScale(60,0.6),
            letterSpacing:1
          }}>Do You Eat More On Weekends?</CustomText>
          <FlatList contentContainerStyle={{
            gap:moderateScale(10,0.6),
            height:windowHeight *0.68
        
          }} style={{marginTop:moderateScale(40,0.6)}} data={daysList}
          renderItem={({item})=>{
            return(
                <View style={styles.fieldBox}>
                    <CustomText style={{
                        fontSize:moderateScale(13,0.6),
                        color:Color.grey
                    }}>{item.text}</CustomText>
                    </View>
            )
          }}/>
          <CustomButton style={styles.nextButton} text={'Next'}
          textColor={Color.grey} fontSize={moderateScale(14,0.6)}/>
       </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Questionnaire;

const styles = StyleSheet.create({
  bgcImageStyle: {
    width: windowWidth,
    height: windowHeight,
    // alignItems:'center'
  },
  container:{
    alignItems:'center'
  },
  fieldBox:{
    width:windowWidth *0.9,
    height:moderateScale(32,0.6),
    backgroundColor:Color.white,
    borderRadius:moderateScale(20,0.6),
    paddingHorizontal:moderateScale(18,0.6),
    justifyContent:'center',
    // gap:moderateScale(5,0.6)
  },
  nextButton:{
    width:windowWidth*0.9,
    height:moderateScale(50,0.6),
    borderWidth:1.5,
    borderRadius:moderateScale(25,0.6),
    borderColor:Color.grey,
    // bottom:0,
    // position:'absolute'
  }
});
