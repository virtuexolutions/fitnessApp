import React, {useState} from 'react';
import {ImageBackground, Platform, SafeAreaView, StyleSheet, ToastAndroid, View} from 'react-native';
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
import Header from '../Components/Header';

const ResetPassword = ({route}) => {
  const {email} = route.params;
  console.log('check', email);
  const dispatch = useDispatch();
  const [password, setpassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState('');

  const token = useSelector(state => state.authReducer.token);
  const onPressPassword = async () => {
    // console.log("check")
    const url = 'password/reset';
    const body = {
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };
    setIsLoading(true);
    const response = await Post(url, body, apiHeader());
    console.log('password', response.data);
    setIsLoading(false);
    if (response != undefined) {
      navigationService.navigate("AuthScreen")
      Platform.OS == 'android'
        ? ToastAndroid.show(response?.data?.message, ToastAndroid.SHORT)
        : Alert(response?.data?.message);
    }
  };

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
          <CustomText isBold style={styles.txt2}>
            Reset Password
          </CustomText>
          <View style={styles.formStyle}>
            <TextInputWithTitle
              placeholder={'Enter your new password'}
              placeholderColor={Color.grey}
              value={password}
              setText={setpassword}
              inputWidth={windowWidth * 0.7}
            />
            <TextInputWithTitle
              placeholder={'Confirm your new password'}
              placeholderColor={Color.grey}
              value={confirmPassword}
              setText={setconfirmPassword}
              inputWidth={windowWidth * 0.7}
            />
            <CustomButton
              style={styles.buttonStyle}
              text={'Submit'}
              fontSize={moderateScale(15, 0.6)}
              textColor={Color.grey}
              onPress={() => onPressPassword()}
              loader={isLoading}
              loaderColor={Color.peach}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ResetPassword;

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
  txt2: {
    color: Color.white,
    fontSize: moderateScale(22, 0.6),
    textTransform: 'uppercase',
    marginTop: moderateScale(20, 0.6),
  },
  txt3: {
    color: Color.white,
    fontSize: moderateScale(12, 0.6),
    textAlign: 'center',
    width: '80%',
    marginTop: moderateScale(10, 0.3),
    lineHeight: moderateScale(20, 0.3),
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
