import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {Collapse} from 'native-base';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../Components/CustomButton';

const Weightcategoryscreen = () => {
  const [selected, setSelected] = useState('Lose Weight');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topText}>
        <CustomText
          style={{
            fontSize: moderateScale(13, 0.6),
            color: Color.grey,
          }}>
          Let's Get To Know You Better!
        </CustomText>
        <CustomText
          isBold
          style={{
            fontSize: moderateScale(20, 0.6),
            color: Color.grey,
          }}>
          What goad do you have in mind
        </CustomText>
      </View>
      <TouchableOpacity
        onPress={() => {
          setSelected('Lose Weight');
        }}
        style={[
          selected === 'Lose Weight'
            ? {backgroundColor: Color.peach}
            : {
                backgroundColor: Color.white,
              },
          styles.buttonStyle,
        ]}>
        <CustomText
          style={{
            fontSize: moderateScale(14, 0.6),
            color: Color.grey,
          }}>
          Lose Weight
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelected('Maintain Weight');
        }}
        style={[
          selected === 'Maintain Weight'
            ? {backgroundColor: Color.peach}
            : {
                backgroundColor: Color.white,
              },
          styles.buttonStyle,
        ]}>
        <CustomText
          style={{
            fontSize: moderateScale(14, 0.6),
            color: Color.grey,
          }}>
          Maintain Weight
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelected('Gain Weight');
        }}
        style={[
          selected === 'Gain Weight'
            ? {backgroundColor: Color.peach}
            : {
                backgroundColor: Color.white,
              },
          styles.buttonStyle,
        ]}>
        <CustomText
          style={{
            fontSize: moderateScale(14, 0.6),
            color: Color.grey,
          }}>
          Gain Weight
        </CustomText>
      </TouchableOpacity>
      <CustomText style={{
        fontSize:moderateScale(12,0.6),
        color:Color.grey,
        width:windowWidth*0.88,textAlign:'center',
        marginTop:moderateScale(40,0.3)
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel tortor
        eros. Fusce sit amet tempus eli.
      </CustomText>
      <CustomButton
          style={styles.nextButton}
          text={'Next'}
          textColor={Color.grey}
          fontSize={moderateScale(14, 0.6)}
        />
    </SafeAreaView>
  );
};

export default Weightcategoryscreen;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
    alignItems: 'center',
  },
  topText: {
    marginTop: moderateScale(80, 0.6),
    alignItems: 'center',
  },
  buttonStyle: {
    width: windowWidth * 0.88,
    height: moderateScale(50, 0.6),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(15, 0.6),
    borderWidth: 1,
    borderColor: Color.lightest_grey,
    // backgroundColor: Color.peach,
  },
  nextButton: {
              width: windowWidth * 0.88,
              height: moderateScale(50, 0.6),
          
              borderRadius: moderateScale(25, 0.6),
              marginTop: moderateScale(15, 0.6),
          
              backgroundColor: Color.peach,
            },
});
