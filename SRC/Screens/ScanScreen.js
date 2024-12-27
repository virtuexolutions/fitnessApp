import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Header from '../Components/Header';
import Entypo from 'react-native-vector-icons/Entypo';import CustomImage from '../Components/CustomImage';
import { moderateScale } from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import { Icon } from 'native-base';
import MaterialCommunityIcons from  "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from  "react-native-vector-icons/Ionicons";
;

const ScanScreen = () => {
  return (
    <ImageBackground
    style={styles.bgcImageStyle}
    source={require('../Assets/Images/bgcthemeimage.png')}
    imageStyle={{width: '100%', height: '100%'}}>
        <Header 
            // title={'Timmer'}
            showBack
            isRightIcon
            iconColor={Color.black}
            rightIconName={'dots-three-vertical'}
            rightIconFrom={Entypo}
        />
        <View style={styles.content}>

        <View style={styles.imageContainer}>

        <CustomImage
    source={require('../Assets/Images/scanItem.png')}
    style={{width: '100%', height: '100%'}}
    
    />
    </View>
    <CustomText style={{marginTop:moderateScale(22,0.2),  textAlign:"center"}}>Scan The Product Baracode</CustomText>
    <View style={styles.actions}>
        <View style={styles.actionBtn}>
        <Icon
            name="format-list-bulleted"
            as={MaterialCommunityIcons}
            size={moderateScale(20,0.2)}
            color={Color.black}
            />            
            <CustomText>List</CustomText>
        </View>
        <View style={styles.actionBtn}>
        <Icon
            name="search"
            as={Ionicons}
            size={moderateScale(20,0.2)}
            color={Color.black}
            />            
            <CustomText>Search</CustomText>

        </View>
        <View style={[styles.actionBtn, {backgroundColor:"#FBD7BD"}]}>
            <Icon
            name="line-scan"
            as={MaterialCommunityIcons}
            size={moderateScale(20,0.2)}
            color={Color.black}
            />
            <CustomText>Scan</CustomText>
        </View>
    </View>
    </View>

    </ImageBackground>
  )
}

export default ScanScreen

const styles = StyleSheet.create({
    bgcImageStyle: {
        width: windowWidth,
        height: windowHeight,
        // gap: moderateScale(30, 0.2),
        // justifyContent: 'space-between',
      },
      imageContainer:{
        width: windowWidth * 0.56,
        height: windowWidth * 0.56,
        overflow:"hidden",
        borderRadius:moderateScale(20,0.2),
    
      },
      actions:{
        width: windowWidth * 0.8,
        borderRadius:moderateScale(30,0.2),
        backgroundColor:Color.white,
        flexDirection:'row',
        marginTop:moderateScale(82,0.2),
        paddingHorizontal:moderateScale(12,0.2),
        paddingVertical:moderateScale(5,0.2),
        gap:moderateScale(16,0.2)
      },
      actionBtn:{
        flexDirection:'row',
        gap:moderateScale(5,0.3),
        padding:moderateScale(12,0.2),
        borderRadius:moderateScale(20,0.2)
      },
      content:{
        width: windowWidth,
        height: windowHeight * 0.8,
        alignItems:"center",
        justifyContent:"center"
      }
})