import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  // Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {Icon, View} from 'native-base';
import CustomImage from '../Components/CustomImage';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import ListComponent from '../Components/ListComponent';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';
import CustomButton from '../Components/CustomButton';
import { useSelector } from 'react-redux';
import { Post } from '../Axios/AxiosInterceptorFunction';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [reset, setReset] = useState('2655');
  const [modal_visible, setModalVisible] = useState(false);
  const [calories, setCalories] = useState('')
  const userData = useSelector(state => state.commonReducer.userData)
  console.log(userData, "userdata")
  const token = useSelector(state => state.authReducer.token);
  const [setLoading , setIsLoading] = useState(false)
  const componentList = [
    {
      id: 1,
      title: 'Personal Details',
      iconName: 'user',
      iconType: FontAwesome,
      iconSize: moderateScale(20, 0.6),
      onpress: () => {navigation.navigate('PersonalDetails')}
    },
    {
      id: 2,
      title: 'Adjust MacroNutrients',
      subText: 'Carbs, fat and Protein',
      isSubText: true,
      iconName: 'lock',
      iconType: FontAwesome,
      iconSize: moderateScale(18, 0.6),
    },
    {
      id: 3,
      title: 'Adjust Calories',
      subText: '2655 kcal/day',
      iconName: 'lock',
      isSubText: true,
      iconType: FontAwesome,
      iconSize: moderateScale(18, 0.6),
      onpress: () => {
        setModalVisible(true);
      },
    },
    {
      id: 4,
      title: 'Dietary Needs & Preferences',
      iconName: 'bell-concierge',
      iconType: FontAwesome6,
      iconSize: moderateScale(18, 0.6),
      onpress: () => navigation.navigate('DietaryNeeds'),
    },
    {
      id: 5,
      title: 'Set Your Habits',
      iconName: 'location-pin',
      iconType: FontAwesome6,
      iconSize: moderateScale(20, 0.6),
      onpress: () => navigation.navigate('HabitsScreen'),
    },
  ];
  const onPressCalories = async () => {
    const url = 'auth/user-profile'
    const body = {
      calories : calories
    }
    setIsLoading(true)
    const response = await Post(url,body,apiHeader(token))
    console.log("helooooooooooo" , response?.data)
    setIsLoading(false)
  }
  return (
    <>
    
      <SafeAreaView style={styles.safe_are_view}>
       
        <View style={styles.header_view}>
          <Header showBack isRightIcon />
          <View style={styles.row_view}>
            <View style={styles.image_view}>
              <CustomImage
                style={styles.image}
                source={require('../Assets/Images/no_profile_image.png')}
              />
            </View>
            <View
              style={{
                width: moderateScale(20, 0.6),
                height: moderateScale(20, 0.6),
                backgroundColor: Color.green,
                borderRadius: windowHeight,
                top: moderateScale(-20, 0.6),
                left: moderateScale(25, 0.6),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={'plus'}
                as={Feather}
                size={moderateScale(15, 0.3)}
                color={Color.white}
              />
            </View>
            <View>
              <CustomText isBold style={styles.name_text}>
                User Name
              </CustomText>
              <CustomText style={styles.age_text}>19 Years Old</CustomText>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.box_view}>
              <CustomText isBold style={styles.box_text}>
                Current weight
              </CustomText>
              <CustomText style={styles.detail_text}>{userData?.user_profile?.weight + ' kg'}</CustomText>
            </View>
            <View
              style={{
                width: moderateScale(1, 0.3),
                height: moderateScale(33, 0.3),
                backgroundColor: Color.grey,
              }}></View>
            <View style={styles.box_view}>
              <CustomText isBold style={styles.box_text}>
                Goal
              </CustomText>
              <CustomText style={styles.detail_text}>{userData?.user_profile?.goal}</CustomText>
            </View>
            <View
              style={{
                width: moderateScale(1, 0.3),
                height: moderateScale(33, 0.3),
                backgroundColor: Color.grey,
              }}></View>
            <View style={styles.box_view}>
              <CustomText isBold style={styles.box_text}>
                Active Diet
              </CustomText>
              <CustomText style={styles.detail_text}>
                Lifesum Standard
              </CustomText>
            </View>
          </View>
        </View>
        {/* <View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingHorizontal: moderateScale(20, 0.6),
            marginTop: moderateScale(10, 0.3),
            height: windowHeight *0.71,
            top: moderateScale(35, 0.3),
            // backgroundColor:'green'
            // marginBottom:moderateScale(40,0.3)
          }}>
          <CustomText
            isBold
            style={{
              fontSize: moderateScale(17, 0.3),
              color: Color.darkGray,
            }}>
            Customization
          </CustomText>
          <FlatList
            data={componentList}
            renderItem={({item}) => {
              console.log(item, 'check');
              return (
                <View
                  style={{
                    marginTop: moderateScale(10, 0.3),
                  }}>
                  <ListComponent
                    iconName={item?.iconName}
                    iconType={item?.iconType}
                    title={item?.title}
                    subText={item?.subText}
                    iconSize={item?.iconSize}
                    onpress={item?.onpress}
                    isLeftIcon={true}
                    isSUbText={item?.isSubText}
                  />
                </View>
              );
            }}
          />
        </View>
        </ScrollView>
        {/* </ScrollView> */}
        {/* </View> */}
      </SafeAreaView>
      <Modal
        visible={modal_visible}
        // visible={modal_visible}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // width:windowWidth,
          // height:windowHeight
        }}>
        <View
          style={{
            backgroundColor: 'rgba(109, 115, 122, 0.4)',
            width: windowWidth,
            height: windowHeight,
            alignItems: 'center',
            justifyContent: 'center',
            // opacity:0.5
          }}>
          <View
            style={{
              backgroundColor: Color.white,
              width: windowWidth * 0.85,
              minHeight: windowHeight * 0.48,
              maxHeight: windowHeight * 0.48,
              borderRadius: moderateScale(12, 0.6),
              paddingHorizontal: moderateScale(7, 0.6),
              // paddingVertical: moderateScale(20, 0.6),
              alignItems: 'center',
              overflow: 'visible',
            }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              activeOpacity={0.5}
              style={{
                alignSelf: 'flex-end',
                top: moderateScale(15, 0.3),
              }}>
              <Icon
                as={Entypo}
                name="cross"
                size={moderateScale(20, 0.3)}
                color={Color.black}
              />
            </TouchableOpacity>
            <CustomText
              style={{
                fontSize: moderateScale(17, 0.3),
                color: Color.black,
              }}>
              Calories / day
            </CustomText>

            <View
              style={{
                marginTop: moderateScale(10, 0.3),
                alignItems: 'center',
              }}>
              <TextInput
                style={{
                  fontSize: moderateScale(20, 0.3),
                  color: Color.black,
                }}
                value={reset}
                onChangeText={text => setReset(text)}
                keyboardType="numeric"
                placeholder="2655"
                placeholderTextColor={Color.lightGrey}></TextInput>
              <View
                style={{
                  width: windowWidth * 0.45,
                  borderBottomWidth: 1,
                  borderBottomColor: Color.lightest_grey,
                  bottom: moderateScale(8, 0.3),
                }}></View>
            </View>
            <View
              style={{
                marginTop: moderateScale(70, 0.3),
              }}>
              <CustomText
                style={{
                  fontSize: moderateScale(18, 0.3),
                  color: Color.black,
                }}>
                Adjust Your Calorie Intake?
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(12, 0.3),
                  color: Color.black,
                  width: windowWidth * 0.58,
                  marginTop: moderateScale(10, 0.3),
                  // backgroundColor:'green'
                }}>
                Set your daily calorie goal on your own
              </CustomText>
            </View>
            <CustomButton
            onPress= {()=>onPressCalories()}
            loader={setLoading}
              isBold
              style={styles.buttonStyle}
              text={'Adjust Calories'}
              textColor={Color.black}
              fontSize={moderateScale(12, 0.6)}
            />
            <TouchableOpacity
              onPress={() => {
                setReset('2655');
              }}
              activeOpacity={0.5}
              style={{
                marginTop: moderateScale(15, 0.3),
              }}>
              <CustomText
                style={{
                  fontSize: moderateScale(18, 0.3),
                  color: Color.black,
                  letterSpacing: 1,
                }}>
                RESET TO DEFAULT
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
  },
  header_view: {
    backgroundColor: Color.peach,
    width: windowWidth,
    height: windowHeight * 0.32,
  },
  row_view: {
    alignItems: 'center',
  },
  image_view: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    backgroundColor: 'red',
    borderRadius: windowHeight,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: windowHeight,
  },
  name_text: {
    fontSize: moderateScale(14, 0.6),
    color: Color.darkGray,
  },
  age_text: {
    fontSize: moderateScale(12, 0.6),
    color: Color.lightGrey,
  },
  box: {
    width: windowWidth * 0.87,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(12, 0.3),
    backgroundColor: Color.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
    alignSelf: 'center',
    marginTop: moderateScale(10, 0.3),
    paddingVertical: moderateScale(10, 0.3),
    // opacity: 0.5
  },
  box_view: {
    paddingHorizontal: moderateScale(12, 0.3),
  },
  box_text: {
    fontSize: moderateScale(12, 0.3),
    textAlign: 'center',
    color: Color.black,
  },
  detail_text: {
    fontSize: moderateScale(12, 0.3),
    color: Color.black,
    textAlign: 'center',
  },
  buttonStyle: {
    width: windowWidth * 0.76,
    height: moderateScale(55, 0.6),
    borderRadius: moderateScale(10, 0.6),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8b997',
    // marginTop:moderateScale(30,0.3)
  },
});
