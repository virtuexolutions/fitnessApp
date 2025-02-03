import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../Assets/Utilities/Color';
import {Post} from '../Axios/AxiosInterceptorFunction';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {setUserData} from '../Store/slices/common';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import navigationService from '../navigationService';
import {setUserToken} from '../Store/slices/auth';

const ConformationCode = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const token = useSelector(state => state.authReducer.token);

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
          <CustomText
            isBold
            style={{
              fontSize: moderateScale(20, 0.6),
              marginTop: moderateScale(30, 0.6),
              color: Color.white,
            }}>
            Forget Password
          </CustomText>
          <View style={styles.formStyle}>
            <TextInputWithTitle
              placeholder={'Enter your email here'}
              placeholderColor={Color.grey}
              value={email}
              setText={setEmail}
              inputWidth={windowWidth * 0.7}
            />
            <CustomButton
              style={styles.buttonStyle}
              text={'Submit'}
              fontSize={moderateScale(15, 0.6)}
              textColor={Color.grey}
              // loader={sign_loading}
              onPress={() => onPressSignup()}
              loaderColor={Color.peach}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ConformationCode;

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
    // backgroundColor: Color.white,
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
  bottomText: {
    fontSize: moderateScale(12, 0.6),
    color: Color.grey,
    width: windowWidth * 0.7,
    textAlign: 'center',
    // backgroundColor:'red',
    marginTop: moderateScale(50, 0.6),
  },
});
