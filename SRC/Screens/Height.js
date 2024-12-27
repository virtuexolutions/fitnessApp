import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Ruler from 'react-native-animated-ruler';

const Height = () => {
  const [selec_btn, setSelectedBtn] = useState('FT');
  const [value, setValue] = useState(100);
  return (
    <SafeAreaView style={styles.safe_are_view}>
      <Header
        showBack
        isRightIcon
        title={'Height'}
        iconColor={Color.black}
        rightIconName={'dots-three-vertical'}
        rightIconFrom={Entypo}
        headerColor={Color.peach}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: windowWidth,
          height: windowHeight,
        }}>
        <ImageBackground
          source={require('../Assets/Images/background3.png')}
          style={styles.image_background_view}
          imageStyle={styles.image_background_image}>
          <View style={styles.main_view}>
            <CustomText style={styles.heading}>How tall are you?</CustomText>
            <CustomText style={styles.text2}>
              Curabitur imperdiet enim sit amet justo faucibus, nec pulvinar
              erat venenatis.
            </CustomText>
            <View style={styles.btn_main_view}>
              <TouchableOpacity
                onPress={() => setSelectedBtn('CM')}
                style={[
                  styles.btn_view,
                  {
                    backgroundColor:
                      selec_btn === 'CM' ? Color.white : 'transparent',
                  },
                ]}>
                <CustomText style={styles.btn_text}>CM</CustomText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedBtn('FT')}
                style={[
                  styles.btn_view,
                  {
                    backgroundColor:
                      selec_btn === 'FT' ? Color.white : 'transparent',
                  },
                ]}>
                <CustomText style={styles.btn_text}>FT</CustomText>
              </TouchableOpacity>
            </View>
            <View style={styles.text_view}>
              <CustomText
                isBold
                style={{
                  fontSize: moderateScale(30, 0.6),
                  color: Color.darkGray,
                }}>
                {value}
              </CustomText>
              <CustomText style={styles.text3}>CM</CustomText>
            </View>
            <Ruler
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                shadowOpacity: 0.46,
                shadowRadius: 11.14,
                elevation: 17,
                marginTop: moderateScale(100, 0.6),
                borderRadius: moderateScale(20, 0.6),
              }}
              onChangeValue={txt => setValue(txt)}
              width={350}
              height={200}
              vertical={true}
              minimum={100}
              maximum={190}
              indicatorColor={Color.peach}
              indicatorWidth={moderateScale(200, 0.6)}
              indicatorHeight={70}
              indicatorBottom={20}
              step={5}
              stepColor={Color.darkGray}
              stepHeight={70}
              normalColor={Color.lightest_grey}
              normalHeight={30}
              backgroundColor={Color.white}
              numberFontFamily="System"
              numberSize={20}
              numberColor={Color.black}
              unitBottom={15}
              unitColor="#888888"
              unitSize={13}
              unit={selec_btn === 'CM' ? 'cm' : 'ft'}
            />
            <CustomButton
              text={'Skip'}
              textColor={Color.grey}
              fontSize={moderateScale(15, 0.6)}
              bgColor={Color.peach}
              width={windowWidth * 0.8}
              style={[styles.buttonStyle]}
              textTransform={'Uppercase'}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Height;

const styles = StyleSheet.create({
  safe_are_view: {
    width: windowWidth,
    height: windowHeight,
  },
  scroll_view: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Color.peach,
  },
  main_view: {
    paddingHorizontal: moderateScale(15, 0.6),
    height: windowHeight * 0.9,
  },
  heading: {
    fontSize: moderateScale(18, 0.6),
    textAlign: 'center',
    color: Color.darkGray,
    fontWeight: '700',
  },
  text: {
    fontSize: moderateScale(12, 0.6),
    textAlign: 'center',
    color: Color.black,
  },
  text2: {
    fontSize: moderateScale(13, 0.6),
    textAlign: 'center',
    color: Color.darkGray,
    marginTop: moderateScale(7, 0.6),
  },
  header_view: {
    backgroundColor: Color.peach,
    width: windowWidth,
    height: windowHeight * 0.32,
    borderBottomRightRadius: windowWidth * 0.5,
    borderBottomLeftRadius: windowWidth * 0.5,
  },
  image_background_view: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    width: windowWidth,
    height: windowHeight,
  },
  image_background_image: {
    width: '100%',
    height: '45%',
    top: -150,
  },
  btn_main_view: {
    height: windowHeight * 0.08,
    width: windowWidth * 0.9,
    backgroundColor: '#EAECEB',
    borderRadius: windowWidth,
    marginTop: moderateScale(100, 0.6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text3: {
    fontSize: moderateScale(12, 0.6),
    marginTop: moderateScale(10, 0.6),
    marginLeft: moderateScale(7, 0.6),
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Color.darkGray,
  },
  buttonStyle: {
    width: windowWidth * 0.8,
    height: moderateScale(50, 0.6),
    borderRadius: moderateScale(25, 0.6),
    marginTop: moderateScale(90, 0.6),
    backgroundColor: Color.peach,
    borderWidth: 0.8,
    borderColor: '#FEF3DD',
    shadowColor: Color.peach,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  button_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.8,
    marginTop: moderateScale(10, 0.6),
    alignItems: 'center',
    backgroundColor: Color.peach,
    borderRadius: windowWidth,
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(15, 0.6),
    alignSelf: 'center',
  },
  text_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: windowWidth * 0.9,
    alignItems: 'center',
    marginTop: moderateScale(10, 0.6),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: windowWidth,
  },
  btn_view: {
    paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: windowWidth,
    marginHorizontal: 5,
    width: windowWidth * 0.43,
    height: windowHeight * 0.07,
  },
  image_view: {
    width: moderateScale(20, 0.6),
    height: moderateScale(20, 0.6),
  },
  btn_text: {
    fontSize: moderateScale(14, 0.6),
    marginLeft: moderateScale(3, 0.6),
    color: '#F4BC9B',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});
