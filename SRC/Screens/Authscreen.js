import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {ImageBackground} from 'react-native';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import {
  height,
  resizeMode,
  width,
} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Icon} from 'native-base';
import CustomText from '../Components/CustomText';
import Signup from './Signup';

const Authscreen = () => {
    const [activeButton,setActivebutton] = useState('')
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.bgcImageStyle}
        source={require('../Assets/Images/bgcthemeimage.png')}
        imageStyle={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.logoImage}>
            <CustomImage
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
              source={require('../Assets/Images/Tomato.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: moderateScale(5, 0.6),
            }}>
            <CustomButton onPress={()=>{
                setActivebutton('SIGN UP')
            }}
              style={styles.signbuttonStyle}
              text={'Sign up'}
              textColor={[Color.lightBlue]}
              fontSize={moderateScale(12, 0.6)}
              
            />
            <CustomButton
              style={styles.signbuttonStyle}
              text={'Sign in'}
              textColor={Color.white}
              fontSize={moderateScale(12, 0.6)}
            />
          </View>
          <View style={styles.formStyle}>
            <TextInputWithTitle
              placeholder={'Your Email'}
              placeholderColor={Color.grey}
              // iconName={'message'}
              // iconType={EvilIcons}
            />
            <TextInputWithTitle
              placeholder={'Your Password'}
              placeholderColor={Color.grey}
            //   fontSize={moderateScale(10,0.6)}
              // iconName={'message'}
              // iconType={EvilIcons}
            />
            <TextInputWithTitle
              placeholder={'Your Address'}
              placeholderColor={Color.grey}
              fontSize={moderateScale(10,0.6)}
              // iconName={'message'}
              // iconType={EvilIcons}
            />
            <CustomButton
              style={styles.buttonStyle}
              text={'Sign Up'}
              // textstyle={{fontSize: moderateScale(18, 0.6)}}
              fontSize={moderateScale(15, 0.6)}
              textColor={Color.grey}
            />
          </View>
          <CustomText style={styles.bottomText}>
            By Creating An Account You Agree To Our Terms And Conditions.
          </CustomText>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Authscreen;

const styles = StyleSheet.create({
  bgcImageStyle: {
    width: windowWidth,
    height: windowHeight,
  },
  logoImage: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.2,
    marginTop: moderateScale(80, 0.6),
    // backgroundColor:'green'
  },
  container: {
    alignItems: 'center',
  },
  signbuttonStyle: {
    width: windowWidth * 0.26,
    height: moderateScale(37, 0.6),
    borderRadius: moderateScale(20, 0.6),
    backgroundColor: Color.white,
    borderWidth: 1.5,
    borderColor: Color.white,
    marginTop: moderateScale(30, 0.6),
  },
  buttonStyle: {
    width: windowWidth * 0.89,
    height: moderateScale(50, 0.6),
    borderRadius: moderateScale(25, 0.6),
    //   marginTop: moderateScale(15, 0.6),
    backgroundColor: Color.white,
  },
  formStyle: {
    // backgroundColor:'green',
    paddingVertical: moderateScale(15, 0.6),
    gap: moderateScale(15, 0.6),
  },
  bottomText:{
    fontSize:moderateScale(12,0.6),
    color:Color.grey,
    width:windowWidth*0.7,
    textAlign:'center',
    // backgroundColor:'red',
    marginTop:moderateScale(50,0.6)
  },
  
});
