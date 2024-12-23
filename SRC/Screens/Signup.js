import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import ImagePickerModal from '../Components/ImagePickerModal';
import ScreenBoiler from '../Components/ScreenBoiler';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {Formik} from 'formik';
import {boolean} from 'yup';
import {SignupSchema} from '../Constant/schema';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {setUserToken} from '../Store/slices/auth';
import {setUserData} from '../Store/slices/common';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Signup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [imagePicker, setImagePicker] = useState(false);
  const [image, setImage] = useState({});
  console.log('🚀 ~ Signup ~ image:', image);
  const [term, setTerm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log('🚀 ~ Signup ~ isLoading:', isLoading);
  const {user_type} = useSelector(state => state.authReducer);
  console.log(user_type, 'userrtypeeeeee');

  const register = async values => {
    const body = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.contact,
      agree_terms_condition: values.termsAccepted,
      confirm_password: values.confirmPassword,
      role: user_type,
    };
    const url = 'register';
    setIsLoading(true);
    const response = await Post(url, body, apiHeader());
    setIsLoading(false);
    if (response != undefined) {
      dispatch(setUserToken({token: response?.data?.token}));
      dispatch(setUserData(response?.data?.user_info));
    }
  };

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <ScrollView
        style={{
          height: windowHeight,
          width: windowWidth,
          backgroundColor: 'white',
        }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: moderateScale(90, 0.6),
        }}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: windowHeight * 0.15,
            width: windowHeight * 0.25,
            marginTop: windowHeight * 0.04,
          }}>
          <CustomImage
            resizeMode="contain"
            source={require('../Assets/Images/logo.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <CustomText isBold style={styles.text}>
          Sign up
        </CustomText>
        <Formik
          initialValues={{
            name: '',
            email: '',
            contact: 0,
            password: '',
            termsAccepted: false,
            model: '',
            number: '',
            seats: '',
            category: '',
            image: {},
          }}
          validationSchema={SignupSchema}
          onSubmit={register}>
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            setFieldValue,
          }) => {
            return (
              <View
                style={[
                  user_type === 'Rider'
                    ? styles.fields_box
                    : styles.input_container,
                ]}>
                <TextInputWithTitle
                  title={'name *'}
                  placeholder={'James W. Brown'}
                  setText={handleChange('name')}
                  value={values.name}
                  viewHeight={user_type === 'Rider' ? 0.055 : 0.06}
                  viewWidth={user_type === 'Rider' ? 0.82 : 0.85}
                  inputWidth={0.8}
                  border={1}
                  borderRadius={30}
                  backgroundColor={'transparent'}
                  borderColor={Color.lightGrey}
                  marginTop={moderateScale(8, 0.3)}
                  placeholderColor={Color.mediumGray}
                  titleStlye={{right: 10}}
                />
                {touched.name && errors.name && (
                  <CustomText style={styles.schemaText}>
                    {errors.name}
                  </CustomText>
                )}
                <TextInputWithTitle
                  title={'email Id *'}
                  titleText={'Username'}
                  placeholder={'Email '}
                  setText={handleChange('email')}
                  value={values.email}
                  viewHeight={user_type === 'Rider' ? 0.055 : 0.06}
                  viewWidth={user_type === 'Rider' ? 0.82 : 0.85}
                  inputWidth={0.8}
                  border={1}
                  borderRadius={30}
                  backgroundColor={'transparent'}
                  borderColor={Color.lightGrey}
                  marginTop={moderateScale(8, 0.3)}
                  placeholderColor={Color.mediumGray}
                  titleStlye={{right: 10}}
                />
                {touched.email && errors.email && (
                  <CustomText
                    textAlign={'left'}
                    style={{
                      fontSize: moderateScale(10, 0.6),
                      color: Color.red,
                      alignSelf: 'flex-start',
                    }}>
                    {errors.email}
                  </CustomText>
                )}
                {/* {touched.email && errors.email && (
                <CustomText style={styles.schemaText}>
                  {errors.email}
                </CustomText>
              )} */}
                <TextInputWithTitle
                  title={'contact * '}
                  titleText={'Username'}
                  placeholder={'phone number'}
                  setText={handleChange('contact')}
                  value={values.contact}
                  viewHeight={user_type === 'Rider' ? 0.055 : 0.06}
                  viewWidth={user_type === 'Rider' ? 0.82 : 0.85}
                  inputWidth={0.8}
                  border={1}
                  borderRadius={30}
                  backgroundColor={'transparent'}
                  borderColor={Color.lightGrey}
                  marginTop={moderateScale(8, 0.3)}
                  placeholderColor={Color.mediumGray}
                  titleStlye={{right: 10}}
                />
                {touched.contact && errors.contact && (
                  <CustomText style={styles.schemaText}>
                    {errors.contact}
                  </CustomText>
                )}
                <TextInputWithTitle
                  showPassword
                  title={'password *'}
                  placeholder={'password'}
                  setText={handleChange('password')}
                  value={values.password}
                  viewHeight={user_type === 'Rider' ? 0.055 : 0.06}
                  viewWidth={user_type === 'Rider' ? 0.82 : 0.85}
                  inputWidth={0.8}
                  border={1}
                  secureText={true}
                  borderRadius={30}
                  backgroundColor={'transparent'}
                  borderColor={Color.lightGrey}
                  marginTop={moderateScale(8, 0.3)}
                  // color={Color.white}
                  placeholderColor={Color.mediumGray}
                  titleStlye={{right: 10}}
                />
                {touched.password && errors.password && (
                  <CustomText style={styles.schemaText}>
                    {errors.password}
                  </CustomText>
                )}
                <TextInputWithTitle
                  showPassword
                  title={'confirm Password *'}
                  placeholder={'Confirm Password'}
                  setText={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  viewHeight={user_type === 'Rider' ? 0.055 : 0.06}
                  viewWidth={user_type === 'Rider' ? 0.82 : 0.85}
                  inputWidth={0.8}
                  border={1}
                  secureText={true}
                  borderRadius={30}
                  backgroundColor={'transparent'}
                  borderColor={Color.lightGrey}
                  marginTop={moderateScale(8, 0.3)}
                  // color={Color.white}
                  placeholderColor={Color.mediumGray}
                  titleStlye={{right: 10}}
                />
                {touched.password && errors.password && (
                  <CustomText style={styles.schemaText}>
                    {errors.password}
                  </CustomText>
                )}
                <TextInputWithTitle
                  showPassword
                  title={'Car Model '}
                  placeholder={'Enter your model number'}
                  setText={handleChange('confirmPassword')}
                  value={values.model}
                  viewHeight={user_type === 'Rider' ? 0.055 : 0.06}
                  viewWidth={user_type === 'Rider' ? 0.82 : 0.85}
                  inputWidth={0.8}
                  border={1}
                  borderRadius={30}
                  backgroundColor={'transparent'}
                  borderColor={Color.lightGrey}
                  marginTop={moderateScale(8, 0.3)}
                  // color={Color.white}
                  placeholderColor={Color.mediumGray}
                  titleStlye={{right: 10}}
                />

                <TextInputWithTitle
                  showPassword
                  title={'Car number '}
                  placeholder={'Enter your car number'}
                  setText={handleChange('confirmPassword')}
                  value={values.number}
                  viewHeight={user_type === 'Rider' ? 0.055 : 0.06}
                  viewWidth={user_type === 'Rider' ? 0.82 : 0.85}
                  inputWidth={0.8}
                  border={1}
                  borderRadius={30}
                  backgroundColor={'transparent'}
                  borderColor={Color.lightGrey}
                  marginTop={moderateScale(8, 0.3)}
                  // color={Color.white}
                  placeholderColor={Color.mediumGray}
                  titleStlye={{right: 10}}
                />
                <TextInputWithTitle
                  showPassword
                  title={'availble seats'}
                  placeholder={'Seats'}
                  setText={handleChange('confirmPassword')}
                  value={values.seats}
                  viewHeight={user_type === 'Rider' ? 0.055 : 0.06}
                  viewWidth={user_type === 'Rider' ? 0.82 : 0.85}
                  inputWidth={0.8}
                  border={1}
                  borderRadius={30}
                  backgroundColor={'transparent'}
                  borderColor={Color.lightGrey}
                  marginTop={moderateScale(8, 0.3)}
                  // color={Color.white}
                  placeholderColor={Color.mediumGray}
                  titleStlye={{right: 10}}
                />
                <TextInputWithTitle
                  showPassword
                  title={'Category '}
                  placeholder={'Enter the category of car'}
                  setText={handleChange('confirmPassword')}
                  value={values.category}
                  viewHeight={user_type === 'Rider' ? 0.055 : 0.06}
                  viewWidth={user_type === 'Rider' ? 0.82 : 0.85}
                  inputWidth={0.8}
                  border={1}
                  borderRadius={30}
                  backgroundColor={'transparent'}
                  borderColor={Color.lightGrey}
                  marginTop={moderateScale(8, 0.3)}
                  // color={Color.white}
                  placeholderColor={Color.mediumGray}
                  titleStlye={{right: 10}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    alignSelf: 'flex-start',
                  }}>
                  <View
                    style={[
                      styles.edit,
                      {marginRight: moderateScale(15, 0.6)},
                    ]}>
                    <CustomImage
                      resizeMode="cover"
                      source={
                        image?.uri
                          ? {uri: image?.uri}
                          : require('../Assets/Images/riderphoto.png')
                      }
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: moderateScale((windowHeight * 0.13) / 2),
                      }}
                    />
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.edit}
                    onPress={() => {
                      setImagePicker(true);
                    }}>
                    <Icon
                      name="plus"
                      as={FontAwesome}
                      style={styles.icon2}
                      color={Color.black}
                      size={moderateScale(13, 0.3)}
                      onPress={() => {
                        setImagePicker(true);
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => {
                      setFieldValue('termsAccepted', !values.termsAccepted);
                    }}
                    style={styles.check_box}>
                    {values.termsAccepted && (
                      <Icon
                        as={Feather}
                        size={moderateScale(15, 0.6)}
                        color={Color.themeBlack}
                        name="check"
                      />
                    )}
                  </TouchableOpacity>
                  <CustomText style={styles.term_text}>
                    By Click You Agree To Our
                    <CustomText
                      style={{fontSize: moderateScale(11, 0.6), color: 'red'}}>
                      {' '}
                      terms & conditions{' '}
                    </CustomText>{' '}
                    As Well As Our
                    <CustomText
                      style={{fontSize: moderateScale(11, 0.6), color: 'red'}}>
                      {' '}
                      Privacy Policy.
                    </CustomText>
                  </CustomText>
                </View>
                {touched.termsAccepted && errors.termsAccepted && (
                  // console.log('=====================' , errors)
                  <CustomText style={styles.schemaText}>
                    {errors.termsAccepted}
                  </CustomText>
                )}
                <CustomButton
                  onPress={handleSubmit}
                  text={
                    isLoading ? (
                      <ActivityIndicator color={Color.white} size={'small'} />
                    ) : (
                      'sign in '
                    )
                  }
                  fontSize={moderateScale(14, 0.3)}
                  textColor={Color.white}
                  borderWidth={1.5}
                  borderColor={
                    user_type === 'Rider' ? Color.darkBlue : Color.white
                  }
                  borderRadius={moderateScale(30, 0.3)}
                  width={windowWidth * 0.8}
                  marginTop={moderateScale(10, 0.3)}
                  height={windowHeight * 0.075}
                  bgColor={
                    user_type === 'Rider' ? Color.darkBlue : Color.btn_Color
                  }
                  textTransform={'capitalize'}
                  elevation
                  // isBold
                />
              </View>
            );
          }}
        </Formik>
        <CustomText style={styles.do_text}>
          Already have an account?
          <CustomText
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            isBold
            style={styles.Sign_text}>
            {' '}
            Sign in
          </CustomText>
        </CustomText>
        <ImagePickerModal
          show={imagePicker}
          setShow={setImagePicker}
          setFileObject={setImage}
        />
      </ScrollView>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(22, 0.6),
    color: Color.themeBlack,
    paddingVertical: moderateScale(10, 0.6),
  },
  fields_box: {
    borderWidth: 0.3,
    borderColor: '#28272369',
    borderRadius: 20,
    // height: windowHeight * 0.65,
    paddingVertical: moderateScale(10, 0.6),
    width: windowWidth * 0.9,
    alignItems: 'center',
    paddingTop: moderateScale(15, 0.6),
    backgroundColor: Color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    paddingHorizontal: moderateScale(20, 0.6),
    elevation: 8,
  },
  input_container: {
    borderWidth: 1,
    borderColor: Color.mediumGray,
    borderRadius: 20,
    paddingVertical: moderateScale(10, 0.6),
    // height: windowHeight * 0.65,
    width: windowWidth * 0.9,
    alignItems: 'center',
    paddingTop: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(20, 0.6),
  },
  row: {
    flexDirection: 'row',
    paddingVertical: moderateScale(15, 0.6),
    width: '85%',
  },
  check_box: {
    height: windowHeight * 0.02,
    width: windowWidth * 0.04,
    borderWidth: 1,
    borderColor: Color.black,
    borderRadius: 2,
    marginTop: moderateScale(2, 0.3),
  },
  do_text: {
    paddingVertical: moderateScale(35, 0.6),
    textTransform: 'none',
    letterSpacing: 1,
  },
  Sign_text: {
    color: Color.themeBlack,
    paddingRight: moderateScale(5, 0.6),
  },
  term_text: {
    paddingHorizontal: moderateScale(5, 0.6),
    fontSize: moderateScale(11, 0.6),
  },
  schemaText: {
    fontSize: moderateScale(10, 0.6),
    color: 'red',
    alignSelf: 'flex-start',
    // backgroundColor: 'red',
  },
  edit: {
    backgroundColor: Color.white,
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: moderateScale(10, 0.3),
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20, 0.6),
    alignSelf: 'flex-start',
  },
});

export default Signup;
