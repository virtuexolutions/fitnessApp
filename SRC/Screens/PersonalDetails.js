import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import ListComponent from '../Components/ListComponent';
import {isDark} from 'native-base/lib/typescript/theme/tools';
import {useSelector} from 'react-redux';
import CustomButton from '../Components/CustomButton';
import {Post} from '../Axios/AxiosInterceptorFunction';

const PersonalDetails = () => {
  const userData = useSelector(state => state.commonReducer.userData);
  console.log('here in personal deatails', userData?.user_profile?.height);
  const token = useSelector(state => state.authReducer.token);
  const [goal, setGoal] = useState(userData?.user_profile?.goal || '');
  const [Weight, setGainWeight] = useState(
    userData?.user_profile?.weight || '',
  );
  const [firstName, setFirstName] = useState(
    userData?.user_profile?.first_name || '',
  );
  const [currentWeight, setCurrentWeight] = useState(
    userData?.user_profile?.current_weight || '',
  );
  const [Height, setHeight] = useState(userData?.user_profile?.height || '');
  const [dob, setDob] = useState(userData?.user_profile?.dob || '');
  const [gender, setGender] = useState(userData?.user_profile?.gender || '');
  const [activeDiet, setActiveDiet] = useState(
    userData?.user_profile?.active_diet || '',
  );
  const [activityLevel, setActivityLevel] = useState(
    userData?.user_profile?.activity_level || '',
  );
  const [loading, setLoading] = useState(false);

  const userDetails = [
    {
      id: 1,
      title: 'First Name',
      // text: 'None',
      isRightTextInput: true,
      value: firstName,
      onChangeText: setFirstName,
      placeholder: 'None',
    },
    {
      id: 2,
      title: 'Current Weight',
      // text: '62 kg',
      isRightTextInput: true,
      value: currentWeight,
      onChangeText: setCurrentWeight,
      placeholder: 'None',
      // isRightText:true
    },
    {
      id: 3,
      title: 'Height',
      // text:userData?.user_profile?.height + " ft",
      isRightTextInput: true,
      value: Height,
      onChangeText: setHeight,
      placeholder: userData?.user_profile?.height + ' ft',
    },
    {
      id: 4,
      title: 'Date Of Birth',
      // text: 'None',
      isRightTextInput: true,
      value: dob,
      onChangeText: setDob,
      placeholder: 'DOB',
      // isRightText:true
    },
    {
      id: 5,
      title: 'Gender',
      // text:userData?.user_profile?.gender,
      isRightTextInput: true,
      value: gender,
      onChangeText: setGender,
      placeholder: userData?.user_profile?.gender,
    },
    {
      id: 6,
      title: 'Active Diet',
      // text: 'None',
      isRightTextInput: true,
      value: activeDiet,
      onChangeText: setActiveDiet,
      placeholder: 'Active Diet',
      // isRightText:true
    },
    {
      id: 7,
      title: 'Activity Level',
      // text: 'None',
      isRightTextInput: true,
      value: activityLevel,
      onChangeText: setActivityLevel,
      placeholder: 'Activity Level',
      // isRightText:true
    },
  ];

  const onPressSubmit = async () => {
    const url = 'auth/user-profile';
    const body = {
      first_name: firstName,
      current_weight: currentWeight,
      dob: dob,
      active_diet: activeDiet,
      activity_level: activityLevel,
      goal: goal,
      weight: Weight,
      height: Height,
      gender: gender,
    };
    console.log(body, 'bodyyyyyyyyyyyyyyyyyyyyyyyyy');
    setLoading(true);
    const response = await Post(url, body, apiHeader(token));
    setLoading(false);
    console.log(' check data', response?.data);
  };
  // if (response != undefined) {
  //       setLoading(false);
  //       dispatch(setUserToken({token: response?.data?.token}));
  //       // dispatch(setUserData(response?.data?.user_info));
  //     }
    

  return (
    
    <SafeAreaView style={{width: windowWidth, height: windowHeight}}>
      <Header showBack title={'Personal Details'} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: moderateScale(20, 0.6),
        }}>
        <View style={styles.mainContainer}>
          <CustomText isBold style={styles.goalText}>
            Your Goal
          </CustomText>
          <View
            style={{
              marginTop: moderateScale(10, 0.3),
            }}>
            <ListComponent
              isRightText={true}
              text={userData?.user_profile?.goal}
              value={goal}
              placeholder={'None'}
              title={'Goal'}
            />
            <ListComponent
              isRightText={true}
              text={userData?.user_profile?.weight + ' kg'}
              value={Weight}
              placeholder={userData?.user_profile?.weight + ' kg'}
              title={'Gain Weight'}
            />
          </View>
          <View
            style={{
              marginTop: moderateScale(10, 0.3),
            }}>
            <CustomText isBold style={styles.goalText}>
              Details
            </CustomText>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={userDetails}
            renderItem={({item}) => {
              console.log(item?.value);
              return (
                <ListComponent
                  Placeholder={`${item?.placeholder}`}
                  title={item?.title}
                  isRightTextInput={item?.isRightTextInput}
                  value={item?.value}
                  // placeholder={item?.placeholder}
                  // console.log()
                  text={item?.text}
                  // onChangeText={item.onChangeText}
                  // value={item?.value}
                />
              );
            }}
          />
        </View>
        <CustomButton
          onPress={() => onPressSubmit()}
          loader={loading}
          style={styles.buttonStyle}
          text={'Submit'}
          textColor={Color.black}
          fontSize={moderateScale(12, 0.6)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
export default PersonalDetails;

const styles = ScaledSheet.create({
  mainContainer: {
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: moderateScale(20, 0.6),
  },
  goalText: {
    fontSize: moderateScale(16, 0.3),
    color: Color.grey,
  },
  buttonStyle: {
    width: windowWidth * 0.9,
    height: moderateScale(40, 0.6),
    borderRadius: moderateScale(20, 0.6),
    // backgroundColor: Color.white,
    backgroundColor: Color.peach,
    marginTop: moderateScale(20, 0.6),
    marginBottom: moderateScale(10, 0.6),
  },
});
