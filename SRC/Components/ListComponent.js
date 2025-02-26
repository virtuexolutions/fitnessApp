import {Icon} from 'native-base';
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../Assets/Utilities/Color';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import TextInputWithTitle from './TextInputWithTitle';

const ListComponent = ({
  iconType,
  iconName,
  title,
  subText,
  iconSize,
  onpress,
  isLeftIcon,
  isRightTextInput,
  isSUbText,
  text,
  Style,
  Placeholder,
  value,
  onChangeText,
}) => {
  console.log(value, 'listttttttttttt');
  return (
    <TouchableOpacity
      onPress={onpress}
      activeOpacity={0.5}
      style={[styles.box, Style]}>
      <View
        style={{
          // justifyContent: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          width: '60%',
          // backgroundColor:'green'
        }}>
        {isLeftIcon && (
          <Icon
            style={{right: moderateScale(3, 0.3)}}
            as={iconType}
            name={iconName}
            size={moderateScale(18, 0.3)}
            color={Color.green}
          />
        )}
        <View
          style={{
            marginLeft: moderateScale(10, 0.6),
          }}>
          <CustomText
            style={{
              fontSize: moderateScale(15, 0.3),
              color: Color.black,
              // top:moderateScale(3,0.3)
            }}>
            {title}
          </CustomText>
          {isSUbText && (
            <CustomText
              style={{
                fontSize: moderateScale(12, 0.3),
                color: Color.grey,
              }}>
              {subText}
            </CustomText>
          )}
        </View>
      </View>
      <View
        style={{
          // alignItems: 'flex-end',
          // top:moderateScale(10,0.3),
          // justifyContent: 'center',
          // paddingRight: moderateScale(10, 0.6),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {isRightTextInput && (
          <View
            style={{
              // width: '40%',
              // width:windowWidth *0.02,
              // marginRight: moderateScale(10, 0.6),
              flexDirection: 'row',
              // justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            {/* <TextInput
              style={{
                fontSize: moderateScale(14, 0.3),
                color: Color.grey,
                textAlign: 'right',
                width: '100%',
              }}
              placeholder={Placeholder}
              placeholderTextColor={Color.lightGrey}
              value={`${value}`}
              onChangeText={text => onChangeText(text)}
            /> */}
            <TextInputWithTitle
              placeholder={Placeholder}
              placeholderColor={Color.grey}
              setText={onChangeText}
              values={`${value}`}
              fieldStyle={{width: windowWidth * 0.3,
              }}
              
              

              // fieldSet={{backgroundColor:'red'}}
              // inputWidth={'100%'}
            />
            <Icon
              style={{left: 6}}
              as={AntDesign}
              name="right"
              size={moderateScale(15, 0.3)}
            />
          </View>
        )}
        : (
        {/* <> */}
          <View
            style={{
              width: windowWidth * 0.3,
              // marginLeft: moderateScale(25, 0.3),
            }}>
            <CustomText
              style={{
                fontSize: moderateScale(14, 0.3),
                color: Color.grey,
                textAlign: 'right',
              }}>
              {text}
            </CustomText>
          </View>
          <Icon
            style={{left: 6}}
            as={AntDesign}
            name="right"
            size={moderateScale(15, 0.3)}
          />
        {/* </> */}
        )
      </View>
    </TouchableOpacity>
    // <TouchableOpacity
    //   onPress={onpress}
    //   activeOpacity={0.5}
    //   style={[styles.box, Style]}>
    //   {isLeftIcon && (
    //     // <View style={styles.iconCircle}>
    //       <Icon
    //       style={{left:moderateScale(10,0.3)}}
    //         as={iconType}
    //         name={iconName}
    //         size={moderateScale(18, 0.3)}
    //         color={Color.green}
    //       />
    //     // </View>
    //   )}
    //   <View
    //     style={{
    //       width: windowWidth * 0.46,
    //       backgroundColor:'green',
    //       // marginLeft:moderateScale(10,0.3)
    //     }}>
    //     <CustomText
    //       style={{
    //         fontSize: moderateScale(15, 0.3),
    //         color: Color.black,
    //         // top:moderateScale(3,0.3)
    //       }}>
    //       {title}
    //     </CustomText>
    //     {isSUbText && (
    //       <CustomText
    //         style={{
    //           fontSize: moderateScale(12, 0.3),
    //           color: Color.grey,
    //         }}>
    //         {subText}
    //       </CustomText>
    //     )}
    //   </View>
    //   <>
    //   {isRightTextInput && (
    //     <View
    //       style={{
    //         // width: windowWidth * 0.1,
    //         backgroundColor:'white',
    //         // marginLeft:moderateScale(15,0.3)
    //       }}>
    //       <TextInput
    //         style={{
    //           fontSize: moderateScale(14, 0.3),
    //           color: Color.grey,
    //           // textAlign: 'right',
    //         }} placeholder={Placeholder} placeholderTextColor={Color.lightGrey} value={value} onChangeText={onChangeText}>
    //          {/* {text} */}
    //       </TextInput>
    //     </View>
    //   )} : (
    //     <View
    //       style={{
    //         width: windowWidth * 0.22,
    //         backgroundColor:'green',
    //         marginLeft:moderateScale(25,0.3)
    //         // alignSelf:'flex-end'
    //       }}>
    //       <CustomText
    //         style={{
    //           fontSize: moderateScale(14, 0.3),
    //           color: Color.grey,
    //           textAlign: 'right',
    //         }}>
    //          {text}
    //       </CustomText>
    //     </View>
    //   )
    //   </>
    //   <Icon
    //     style={{left: 6}}
    //     as={AntDesign}
    //     name="right"
    //     size={moderateScale(15, 0.3)}
    //   />
    // </TouchableOpacity>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    height: windowHeight * 0.1,
    backgroundColor: Color.white,
    borderRadius: moderateScale(10, 0.3),
    flexDirection: 'row',
    width: windowWidth * 0.87,
    paddingHorizontal: moderateScale(10, 0.3),
    // alignItems: 'center',
    // justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Color.lightest_grey,
  },
  // boxStyle: {
  //   // flexDirection:'row',
  //   // backgroundColor:'red',
  //   // paddingHorizontal: moderateScale(15, 0.6),
  //   // justifyContent: 'space-between',
  //   // alignItems:'center'
  // },
  iconCircle: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    borderRadius: (windowWidth * 0.06) / 2,
    backgroundColor: Color.lightest_grey,
    // alignSelf: 'center',
    // display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
