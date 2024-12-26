import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { windowHeight, windowWidth } from '../Utillity/utils';

const CustomBackground = () => {
  return (
    <SafeAreaView style={styles.safe_are_view}>
        <ImageBackground >

        </ImageBackground>
    </SafeAreaView>
  );
};

export default CustomBackground;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
  },
});
