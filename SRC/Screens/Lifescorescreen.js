import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Color from '../Assets/Utilities/Color'
import Header from '../Components/Header'
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../Components/CustomText'
import { moderateScale } from 'react-native-size-matters'
import { color } from 'native-base/lib/typescript/theme/styled-system'
import CustomButton from '../Components/CustomButton'

const Lifescorescreen = () => {
    const [selected,setSelected] = useState('None')
    const dietList = [
        {
            id: 1,
            text: 'None'
        },
        {
            id: 2,
            text: 'Gluten'
        },
        {
            id: 3,
            text: 'Lactose'
        },
        {
            id: 4,
            text: 'Milk'
        },
        {
            id: 5,
            text: 'Egg'
        },
        {
            id: 6,
            text: 'Shellfish'
        },
        {
            id: 7,
            text: 'Shellfish'
        }
    ]
  return (
    <SafeAreaView>
     <ImageBackground imageStyle={{
          height: '30%',
          width: windowWidth,
        }}
        source={require('../Assets/Images/Rectangleimage.png')}
        style={styles.bgcImage}>
       <Header
       title={'Life Score'}
       textstyle={{color:Color.grey,fontWeight:'bold'}}
          showBack
          isRightIcon
          iconColor={Color.black}
          rightIconName={'dots-three-vertical'}
          rightIconFrom={Entypo}
        />
        <CustomText isBold style={styles.genderText}>
        Any allergies or intolerances?
        </CustomText>
        <View style={{height:windowHeight*0.56,
            marginTop:moderateScale,marginTop:moderateScale(120,0.6)
        }}>
        <FlatList
        contentContainerStyle={{
            gap:moderateScale(10,0.6)
        }} data={dietList}
        renderItem={({item})=>{
            return(
                <TouchableOpacity onPress={()=>{
                    setSelected(item?.text)
                }} style={[selected === item?.text ? {backgroundColor:Color.peach} : {
                    backgroundColor:Color.white,borderWidth:1, borderColor:Color.lightest_grey
                },styles.buttonStyle]}>
                 <CustomText style={{
                    color:Color.grey,fontSize:moderateScale(14,0.6)
                 }}>{item?.text}</CustomText>
                </TouchableOpacity>
            )
        }}/>
        </View>
        <CustomButton
          style={styles.nextButton}
          text={'Next'}
          textColor={Color.grey}
          fontSize={moderateScale(14, 0.6)}
        />
     </ImageBackground>
    </SafeAreaView>
  )
}

export default Lifescorescreen

const styles = StyleSheet.create({
    bgcImage: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: Color.white,
        alignItems:'center'
        // paddingHorizontal:moderateScale(0,0.6)
      },
      genderText: {
          fontSize: moderateScale(18, 0.6),
          color: Color.grey,
          width: windowWidth * 0.85,
          marginTop: moderateScale(10, 0.6),
          alignSelf: 'center',
          textAlign: 'center',
        },
        buttonStyle:{
            width:windowWidth *0.88,
            height:windowHeight *0.08   ,
            borderRadius:moderateScale(35,0.6),
            // borderWidth:1,
            // borderColor:Color.peach,
            // backgroundColor:Color.peach,
            justifyContent:'center',
            // marginTop:moderateScale(120,0.6),
            paddingHorizontal:moderateScale(25,0.6)
        },
        nextButton: {
            width: windowWidth * 0.88,
            height: moderateScale(50, 0.6),
        
            borderRadius: moderateScale(25, 0.6),
            marginTop: moderateScale(15, 0.6),
        
            backgroundColor: Color.peach,
          },
})