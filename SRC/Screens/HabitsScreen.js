import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { windowHeight, windowWidth } from '../Utillity/utils'
import ListComponent from '../Components/ListComponent'
import Color from '../Assets/Utilities/Color'

const HabitsScreen = () => {
  return (
    <SafeAreaView style= {styles.mainContainer}>
        <Header showBack title={'Set Your Habits'} />
        
        <ListComponent isRightText={true} text={"On"} title={"Water Tracker"}/>
          <ListComponent isRightText={true} text={"On"} title={"Fasting"}/>
          <ListComponent isRightText={true} text={"Off"} title={"Vegetable Tracker"}/>
          <ListComponent isRightText={true} text={"Off"} title={"SeaFood Tracker"}/>
          {/* <ListComponent isRightText={true} text={"Off"} title={"SeaFood Tracker"}/> */}
        
    </SafeAreaView>
  )
}

export default HabitsScreen

const styles = StyleSheet.create({
    mainContainer:{
        height:windowHeight,
        width:windowWidth,
        backgroundColor:Color.white
        
    }
})