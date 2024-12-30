import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from './CustomImage';
import CustomText from './CustomText';

const RecipesCard = ({data, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.main_view}>
      <View style={styles.image_view}>
        <CustomImage source={data?.image} style={styles.image} />
      </View>
      <CustomText style={styles.heading}>{data?.heading}</CustomText>
      <CustomText numberOfLines={4} style={styles.text}>
        {data?.text}
      </CustomText>
      <CustomText style={[styles.text, {fontSize: moderateScale(12, 0.6)}]}>
        {data?.cal + ' Cal'}
      </CustomText>
    </TouchableOpacity>
  );
};

export default RecipesCard;

const styles = StyleSheet.create({
  main_view: {
    width: windowWidth * 0.45,
    height: windowHeight * 0.25,
    backgroundColor: Color.peach,
    marginRight: moderateScale(12, 0.6),
    borderRadius: moderateScale(25, 0.6),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image_view: {
    width: windowWidth * 0.45,
    height: windowHeight * 0.12,
    backgroundColor: 'red',
    borderTopEndRadius: moderateScale(25, 0.6),
    borderTopStartRadius: moderateScale(25, 0.6),
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopStartRadius: moderateScale(25, 0.6),
    borderTopEndRadius: moderateScale(25, 0.6),
  },
  heading: {
    fontSize: moderateScale(12, 0.6),
    color: Color.grey,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 12,
  },
  text: {
    fontSize: moderateScale(8, 0.6),
    color: Color.grey,
    marginBottom: moderateScale(10, 0.6),
    marginLeft: 12,
    alignSelf: 'flex-start',
  },
});
