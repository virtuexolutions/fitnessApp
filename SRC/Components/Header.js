import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import React, {useState} from 'react';
import {Alert, Dimensions, TouchableOpacity, View} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import navigationService from '../navigationService';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
const {height, width} = Dimensions.get('window');

const Header = props => {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.commonReducer.notification);
  const cartData = useSelector(state => state.commonReducer.cart);
  // const navigationN = useNavigation();
  // const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);
  const {
    title,
    showBack,
    showList,
    headerColor,
    titleColor,
    close,
    navigateTO,
    index,
    cart,
    Notify,
    isRightIcon,
    isImage,
    textstyle,
    isFilledButton,
    islastIcon,
    rightIconFrom,
    rightIconName,
    iconColor,
    isRightImage,
  } = props;

  const [searchText, setSearchText] = useState('');
  const user = useSelector(state => state.commonReducer.userData);
  const userRole = useSelector(state => state.commonReducer.selectedRole);
  const token = useSelector(state => state.authReducer.token);
  const statusArray = [
    {label: 'Change Password', value: 'ChangePassword'},
    {label: 'Terms & Conditions', value: 'TermsAndConditions'},
    {label: 'Financial Breakdown', value: 'FinancialBreakDown'},
    {label: 'Logout', value: 'Logout'},
  ];

  const Confirm = () => {
    Alert.alert('Action required', 'Login to Continue', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Login',
        onPress: () => {
          navigationService.navigate('LoginScreen');
        },
      },
    ]);
    return true;
  };

  return (
    <View
      style={[
        styles.header2,
        {backgroundColor: headerColor ? headerColor : 'transparent'},
      ]}>
      <View
        style={{
          height: moderateScale(30, 0.3),
          width: moderateScale(30, 0.3),
          // borderRadius: moderateScale(5, 0.3),
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: showBack || showList ? 'white' : 'transparent',
        }}>
        {showBack ? (
          <Icon
            name={'arrow-back'}
            as={Ionicons}
            size={moderateScale(25, 0.3)}
            color={Color.black}
            onPress={() => {
              navigationN.goBack();
            }}
          />
        ) : (
          <>
            {isImage ? (
              <View
                style={{
                  width: moderateScale(50, 0.6),
                  height: moderateScale(50, 0.6),
                }}>
                <CustomImage source={require('../Assets/Images/profile.png')} />
              </View>
            ) : (
              <>
                {isFilledButton ? (
                  <Icon
                    name={'menu'}
                    as={Feather}
                    size={moderateScale(24, 0.3)}
                    color={Color.black}
                  />
                ) : (
                  <Icon
                    style={styles.menu}
                    name={'menu'}
                    as={Feather}
                    size={moderateScale(28, 0.3)}
                    color={Color.black}
                    onPress={() => {
                      console.log('hello mg ');
                      navigationN.toggleDrawer();

                      // dispatch(setUserLogOut())
                      // dispatch(SetUserRole(''));

                      // navigation.openDrawer()
                      // navigationN.dispatch(DrawerActions.toggleDrawer());
                    }}
                  />
                )}
              </>
            )}
          </>
        )}
      </View>
      {title ? (
        <CustomText style={[styles.text, textstyle]}>{title}</CustomText>
      ) : (
        <>
          {isImage ? (
            <View
              style={{
                width: windowWidth * 0.21,
                height: windowHeight * 0.07,
                borderRadius: windowWidth,
              }}>
              <CustomImage
                style={{
                  width: '100%',
                  borderRadius: windowWidth,
                  height: '100%',
                }}
                resizeMode={'contain'}
                source={require('../Assets/Images/header_logo.png')}
              />
            </View>
          ) : (
            <></>
          )}
        </>
      )}

      {/* {/ <CustomText isBold style={{color : Color.white , fontSize : moderateScale(20,0.6)}} >Hola!!</CustomText> /} */}
      {isRightIcon ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name={rightIconName ? rightIconName : 'search1'}
            as={rightIconFrom ? rightIconFrom : AntDesign}
            size={moderateScale(22, 0.3)}
            color={iconColor ? iconColor : Color.lightGrey}
          />
          {islastIcon && (
            <Icon
              style={{
                marginLeft: moderateScale(10, 0.6),
              }}
              name="notifications-none"
              as={MaterialIcons}
              size={moderateScale(25, 0.3)}
              color={Color.lightGrey}
            />
          )}
        </View>
      ) : (
        // <View
        //   style={{
        //     // backgroundColor: 'red',
        //     flexDirection: 'row',
        //     justifyContent: 'center',
        //     paddingTop: moderateScale(6, 0.6),
        //   }}>
        //   {cartData?.length > 0 && (
        //     <View
        //       style={{
        //         width: moderateScale(14, 0.6),
        //         height: moderateScale(14, 0.6),
        //         borderRadius: moderateScale(7, 0.6),
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         backgroundColor: 'red',
        //         position: 'absolute',
        //         right: -4,
        //         zIndex: 1,
        //         top: 0,
        //       }}>
        //       <CustomText
        //         style={{
        //           fontSize: 8,
        //         }}>
        //         {cartData?.length < 10 ? cartData?.length : '9+'}
        //       </CustomText>
        //     </View>
        //   )}
        //   <Icon
        //     name={'shopping-cart'}
        //     as={Feather}
        //     size={moderateScale(27, 0.3)}
        //     color={Color.black}
        //     onPress={() => {
        //       if (token == null) {
        //         Confirm();
        //         // navigationService.navigate('LoginScreen')
        //       } else if (cartData?.length > 0) {
        //         navigationService.navigate('CartScreen');
        //       } else {
        //         return Platform.OS == 'android'
        //           ? ToastAndroid.show('No Item in cart', ToastAndroid.SHORT)
        //           : Alert('No Item in cart');
        //       }
        //     }}
        //   />
        // </View>
        <View
          style={{
            width: moderateScale(50, 0.6),
            height: moderateScale(50, 0.6),
          }}>
          <CustomImage source={require('../Assets/Images/profile.png')} />
        </View>
      )}
    </View>
  );
};
const styles = ScaledSheet.create({
  header1: {
    width: windowWidth,
    height: windowHeight * 0.9,
    backgroundColor: Color.white,
    marginBottom: moderateScale(5, 0.3),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  text: {
    fontSize: moderateScale(18, 0.6),
    color: Color.darkGray,
    fontWeight: '700',
  },
  menu: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    borderRadius: (windowHeight * 0.05) / 2,
    textAlign: 'center',
    backgroundColor: 'white',
    paddingTop: moderateScale(7, 0.6),
  },
  shadowporp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  statusModal: {
    alignSelf: 'flex-end',
    paddingVertical: moderateScale(15, 0.3),
    paddingHorizontal: moderateScale(10, 0.3),
    backgroundColor: Color.white,
    marginTop: moderateScale(60, 0.3),
    borderColor: Color.green,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },
  header2: {
    width: windowWidth,
    // height:windowHeight * 0.1,
    backgroundColor: Color.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20, 0.3),
    paddingVertical: moderateScale(10, 0.3),
    alignItems: 'center',
  },
  notificationCircle: {
    position: 'absolute',
    height: moderateScale(10, 0.3),
    width: moderateScale(10, 0.3),
    borderRadius: moderateScale(5, 0.3),
    backgroundColor: Color.green,
    right: moderateScale(5, 0.3),
  },
  filledButton: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: (windowWidth * 0.1) / 2,
    backgroundColor: Color.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Header;
