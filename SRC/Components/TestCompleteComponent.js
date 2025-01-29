import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
import CustomButton from './CustomButton';
import navigationService from '../navigationService';
import {useNavigation} from '@react-navigation/native';

const TestCompleteComponent = ({isModalVisible, onPressGoBack, style}) => {
  const navigation = useNavigation();
  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection="up"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: windowWidth * 0.85,
          backgroundColor: Color.white,
          height: windowHeight * 0.4,
          borderRadius: moderateScale(15, 0.6),
          paddingHorizontal: moderateScale(15, 0.6),
          paddingVertical: moderateScale(15, 0.6),
          alignItems: 'center',
        }}>
        <View
          style={{
            width: windowWidth * 0.4,
            height: windowWidth * 0.4,
            borderRadius: windowWidth,
          }}>
          <CustomImage
            source={require('../Assets/Images/completed.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <CustomText
          isBold
          textAlign={'center'}
          style={{
            fontSize: moderateScale(16, 0.6),
            marginTop: moderateScale(20, 0.6),
          }}>
          The test has been successfully Submited!
        </CustomText>
        <CustomButton
          onPress={onPressGoBack}
          style={styles.buttonStyle}
          text={'go to home'}
          fontSize={moderateScale(13, 0.6)}
          textColor={Color.white}
          loaderColor={Color.peach}
          marginTop={moderateScale(10, 0.6)}
        />
      </View>
    </Modal>
  );
};

export default TestCompleteComponent;

const styles = StyleSheet.create({
  buttonStyle: {
    width: windowWidth * 0.6,
    height: moderateScale(40, 0.6),
    borderRadius: moderateScale(25, 0.6),
    backgroundColor: Color.peach,
  },
});
