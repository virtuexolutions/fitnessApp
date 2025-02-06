import React, {useState} from 'react';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {Post} from '../Axios/AxiosInterceptorFunction';
import navigationService from '../navigationService';

const EnterCode = ({route}) => {
  const {data} = route.params;
  console.log('user', data);
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
  const [abcd, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  const token = useSelector(state => state.authReducer.token);
  const onPressSubmit = async () => {
    const url = 'password/code/check';
    const body = {
      code: code,
    };
    setIsLoading(true);
    const response = await Post(url, body, apiHeader());
    console.log('checkCode', response.data);
    setIsLoading(false);
    if (response != undefined) {
      navigationService.navigate('ResetPassword', {email:data?.email});
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
            Enter OTP
          </CustomText>
          <CustomText style={styles.txt3}>
            Enter the code here we send you
            {
              <CustomText isBold style={{color: Color.black}}>
                {/* {email}s */}
              </CustomText>
            }
          </CustomText>
          <CodeField
            placeholder={'0'}
            ref={ref}
            value={code}
            onChangeText={setCode}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <CustomText
                  style={[styles.cellText, isFocused && {color: Color.black}]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </CustomText>
              </View>
            )}
          />
          <View style={styles.formStyle}>
            <CustomButton
              style={styles.buttonStyle}
              text={'Submit'}
              fontSize={moderateScale(15, 0.6)}
              textColor={Color.grey}
              onPress={() => onPressSubmit()}
              loader={isLoading}
              loaderColor={Color.peach}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EnterCode;

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
  codeFieldRoot: {
    marginTop: moderateScale(20, 0.3),
    marginBottom: moderateScale(15, 0.3),
    width: windowWidth * 0.65,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: moderateScale(55, 0.3),
    height: moderateScale(55, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.white,
    borderWidth: 2,
    borderRadius: moderateScale(5, 0.3),
  },
  focusCell: {
    backgroundColor: Color.white,
  },
  cellText: {
    color: Color.white,
    fontSize: moderateScale(20, 0.3),
    textAlign: 'center',
  },
});
