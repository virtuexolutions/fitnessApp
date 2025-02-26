import {
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';
import {moderateScale} from 'react-native-size-matters';

import ImagePickerModal from '../Components/ImagePickerModal';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {color} from 'native-base/lib/typescript/theme/styled-system';

const CreateRecipe = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [recipeName, setRecipeName] = useState();
  const [recipeDescription, setRecipeDescription] =useState();
  const [istime, setIsTime] = useState();
  const [servings, setServings] = useState();
  const [kcal, setKcal] = useState();
  const [image, setImage] = useState({});
  console.log(image, 'checkkkkk');
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.image_BOX}>
          <CustomButton
            onPress={() => {
              setModalVisible(true);
              console.log(true);
            }}
            isBold
            style={styles.buttonStyle}
            text={'Upload Picture'}
            textColor={Color.black}
            fontSize={moderateScale(10, 0.6)}
          />
          <ImageBackground
            imageStyle={{
              width: windowWidth,
              height: windowHeight * 0.28,
              // backgroundColor:'green'
            }}
            source={{uri: image.uri}}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
        <View style={styles.fieldContainer}>
        <TextInputWithTitle
          setText={setRecipeName}
          value={recipeName}
          placeholder={'Recipe Name'}
          placeholderColor={Color.grey}
          multiline
          fieldStyle={{
            borderWidth: 1,
            borderColor: Color.lightestwhite_Grey,
            backgroundColor: Color.white,
            marginTop: moderateScale(20, 0.3),
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          }}
        />
        <TextInputWithTitle
          setText={setRecipeDescription}
          value={recipeDescription}
          placeholder={'Short Description'}
          placeholderColor={Color.grey}
          multiline
          fieldStyle={{
            borderWidth: 1,
            borderColor: Color.lightestwhite_Grey,
            backgroundColor: Color.white,
            marginTop: moderateScale(20, 0.3),
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          }}
        />
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          gap:moderateScale(5,0.3),
          // backgroundColor:'green'
        }}>
         <TextInputWithTitle
          setText={setIsTime}
          value={istime}
          placeholder={'Time'}
          placeholderColor={Color.grey}
          multiline
          fieldStyle={{
            borderWidth: 1,
            width:windowWidth *0.29,
            borderColor: Color.lightestwhite_Grey,
            backgroundColor: Color.white,
            marginTop: moderateScale(20, 0.3),
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          }}
        />
        <TextInputWithTitle
          setText={setServings}
          value={servings}
          placeholder={'Servings'}
          placeholderColor={Color.grey}
          multiline
          fieldStyle={{
            borderWidth: 1,
            width:windowWidth *0.29,
            borderColor: Color.lightestwhite_Grey,
            backgroundColor: Color.white,
            marginTop: moderateScale(20, 0.3),
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          }}
        />
        <TextInputWithTitle
          setText={setKcal}
          value={kcal}
          placeholder={'Kcal'}
          placeholderColor={Color.grey}
          multiline
          fieldStyle={{
            borderWidth: 1,
            width:windowWidth *0.29,
            borderColor: Color.lightestwhite_Grey,
            backgroundColor: Color.white,
            marginTop: moderateScale(20, 0.3),
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 3.05,
            elevation: 4,
          }}
        />
        </View>
        </View>
      </View>
      <ImagePickerModal
        show={modalVisible}
        setShow={setModalVisible}
        setFileObject={setImage}
      />
    </SafeAreaView>
  );
};

export default CreateRecipe;

const styles = StyleSheet.create({
  mainContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
    // paddingHorizontal:moderateScale(10,0.6)
  },
  image_BOX: {
    width: windowWidth,
    // backgroundColor:'red',
    height: windowHeight * 0.28,
    borderWidth: 1,
    borderColor: Color.lightestwhite_Grey,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  buttonStyle: {
    width: windowWidth * 0.35,
    height: moderateScale(45, 0.6),
    borderRadius: moderateScale(10, 0.6),
    backgroundColor: '#e8b997',
    zIndex: 1,
    // justifyContent:'center'
    position: 'absolute',
    // marginTop:moderateScale(30,0.3)
  },
  fieldContainer:{
    paddingHorizontal:moderateScale(20,0.6)
    // alignSelf:'center'
  }
});
