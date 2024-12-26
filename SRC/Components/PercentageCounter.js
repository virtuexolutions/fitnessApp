import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import {windowWidth} from '../Utillity/utils';

const PercentageCounter = ({percentage, style, text}) => {
  return (
    <View style={[styles.container, style]}>
      <AnimatedCircularProgress
        size={150}
        width={40}
        fill={percentage}
        tintColor={Color.peach}
        backgroundColor={Color.white}
        lineCap="round">
        {fill => (
          <Text style={styles.text}>
            {text ? text : `${Math.round(fill)}%`}
          </Text>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderRadius: windowWidth,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginTop: moderateScale(50, 0.6),
  },
  text: {
    fontSize: moderateScale(22, 0.6),
    color: Color.grey,
  },
});

export default PercentageCounter;
