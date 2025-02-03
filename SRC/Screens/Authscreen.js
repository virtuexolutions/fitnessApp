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

const Authscreen = () => {
  const dispatch = useDispatch();
  const [activeButton, setActivebutton] = useState(true);
  console.log('🚀 ~ Authscreen ~ activeButton:', activeButton);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sign_loading, setSignupLoading] = useState(false);
  const token = useSelector(state => state.authReducer.token);
  console.log('🚀 ~ Authscreen ~ token:', token);
  const [isLoading, setIsLoading] = useState(false);

  const onPressLogin = async () => {
    const url = 'login';
    const body = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    const response = await Post(url, body, apiHeader());
    console.log('🚀 ~ onPressLogin ~ response:', response?.data);
    setIsLoading(false);
    if (response != undefined) {
      setIsLoading(false);
      dispatch(setUserToken({token: response?.data?.token}));
      dispatch(setUserData(response?.data?.user_info));
    }
  };

  const onPressSignup = async () => {
    const url = 'register';
    const body = {
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };
    setSignupLoading(true);
    const response = await Post(url, body, apiHeader());
    console.log('🚀 ~ onPressLogin ~ response:', response?.data?.token);
    setSignupLoading(false);
    if (response != undefined) {
      setSignupLoading(false);
      dispatch(setUserData(response?.data?.user_info));
      dispatch(setUserToken({token: response?.data?.token}));
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
          <View
            style={{
              flexDirection: 'row',
              gap: moderateScale(5, 0.6),
            }}>
            <CustomButton
              onPress={() => {
                setActivebutton(true);
              }}
              style={[
                activeButton
                  ? {backgroundColor: Color.white}
                  : {backgroundColor: Color.transparent},
                styles.signbuttonStyle,
              ]}
              text={'Sign in'}
              textColor={activeButton ? Color.lightBlue : Color.white}
              fontSize={moderateScale(12, 0.6)}
            />
            <CustomButton
              onPress={() => {
                setActivebutton(false);
              }}
              style={[
                activeButton == false
                  ? {backgroundColor: Color.white}
                  : {backgroundColor: Color.transparent},
                styles.signbuttonStyle,
              ]}
              text={'Sign up'}
              textColor={!activeButton ? Color.lightBlue : Color.white}
              fontSize={moderateScale(12, 0.6)}
            />
          </View>

          {activeButton ? (
            <View style={styles.formStyle}>
              <TextInputWithTitle
                placeholder={'Your Email'}
                placeholderColor={Color.grey}
                setText={setEmail}
                values={email}
                inputWidth={windowWidth * 0.7}
              />
              <TextInputWithTitle
                placeholder={'Your Password'}
                placeholderColor={Color.grey}
                setText={setPassword}
                values={password}
                inputWidth={windowWidth * 0.7}
              />
              <CustomButton
                style={styles.buttonStyle}
                text={'Sign in'}
                fontSize={moderateScale(15, 0.6)}
                textColor={Color.grey}
                onPress={() => onPressLogin()}
                loader={isLoading}
                loaderColor={Color.peach}
              />
            </View>
          ) : (
            <View style={styles.formStyle}>
              <TextInputWithTitle
                placeholder={'Your Email'}
                placeholderColor={Color.grey}
                value={email}
                setText={setEmail}
                inputWidth={windowWidth * 0.7}
              />
              <TextInputWithTitle
                placeholder={'Your Password'}
                placeholderColor={Color.grey}
                values={password}
                setText={setPassword}
                inputWidth={windowWidth * 0.7}
              />
              <TextInputWithTitle
                placeholder={'comfirm password'}
                placeholderColor={Color.grey}
                fontSize={moderateScale(10, 0.6)}
                values={confirmPassword}
                setText={setConfirmPassword}
                inputWidth={windowWidth * 0.7}
              />
              <CustomButton
                style={styles.buttonStyle}
                text={'Sign Up'}
                fontSize={moderateScale(15, 0.6)}
                textColor={Color.grey}
                loader={sign_loading}
                onPress={() => onPressSignup()}
                loaderColor={Color.peach}
              />
            </View>
          )}
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
