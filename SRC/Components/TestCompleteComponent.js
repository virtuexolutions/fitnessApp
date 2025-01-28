import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';

const TestCompleteComponent = ({isModalVisible, style}) => {
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
          height: windowHeight * 0.25,
          borderRadius: moderateScale(15, 0.6),
          paddingHorizontal: moderateScale(15, 0.6),
          paddingVertical: moderateScale(15, 0.6),
        }}>
        <View></View>
        <CustomText>All set</CustomText>
      </View>
    </Modal>
  );
};

export default TestCompleteComponent;

const styles = StyleSheet.create({});
