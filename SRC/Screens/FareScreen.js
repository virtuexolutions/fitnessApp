import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import SearchbarComponent from '../Components/SearchbarComponent';
import Feather from 'react-native-vector-icons/Feather';
import CustomButton from '../Components/CustomButton';
import AskLocation from '../Components/AskLocation';
import {Icon} from 'native-base';
import navigationService from '../navigationService';
import PaymentMethodCard from '../Components/PaymentMethodCard';
import Header from '../Components/Header';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useSelector} from 'react-redux';

const FareScreen = props => {
  console.log('🚀 ~ FareScreen ~ props:', props?.route?.params);
  console.log('🚀 ~ FareScreen ~ props:', props);
  const fare = props?.route?.params?.fare;
  const pickupLocation = props?.route?.params?.pickup;
  console.log('🚀 ~ FareScreen ~ pickupLocation:', pickupLocation);
  const dropoffLocation = props?.route?.params?.dropoff;
  console.log('🚀 ~ FareScreen ~ dropoffLocation:', dropoffLocation);
  const distance = props?.route?.params?.distance;
  const currentPosition = props?.route?.params?.currentPosition;
  console.log('🚀 ~ FareScreen ~ distance:', distance, currentPosition);
  const [paymentMethod, setPaymentMethod] = useState('Card');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPaymentCom, setPaymentCom] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const pickupLocatin = useSelector(
  //   state => state.commonReducer.pickupLocatinName,
  // );
  // const dropoffLocation = useSelector(
  //   state => state.commonReducer.dropoffLocationName,
  // );

  return (
    <SafeAreaView style={styles.safearea_view}>
      <Header title={'Offer your Fare'} />
      <View style={styles.main_view}>
        {isPaymentCom === true ? (
          <>
            <AskLocation
              pickupLocation={pickupLocation}
              dropLocation={dropoffLocation}
              pickupLocationName={pickupLocatinName}
              dropLocationName={dropoffLocationName}
              heading={'Where are you Going?'}
              isIcon
              islocation
            />
            <TouchableOpacity style={styles.map_view}>
              <View style={styles.map_icon_view}>
                <Icon
                  name="map-pin"
                  as={Feather}
                  size={moderateScale(12, 0.6)}
                  color={Color.white}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <CustomText style={styles.text}>Choose On Map</CustomText>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <PaymentMethodCard
              fare={fare}
              setIsEnabled={setIsEnabled}
              isEnabled={isEnabled}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
            <View style={styles.search_conatiner}>
              <CustomText style={[styles.des, {marginTop: 0}]}>
                Searching For You On The Map
              </CustomText>
              <SearchbarComponent
                SearchStyle={{
                  width: windowWidth * 0.85,
                  height: windowHeight * 0.05,
                  borderWidth: 0.7,
                }}
                placeholderName={null}
                isLeftIcon={true}
                name={'search'}
                as={Feather}
                color={Color.grey}
              />
            </View>
          </>
        )}
        <View style={{position: 'absolute', bottom: moderateScale(70, 0.6)}}>
          <CustomButton
            width={windowWidth * 0.9}
            height={windowHeight * 0.07}
            bgColor={Color.themeBlack}
            borderRadius={moderateScale(30, 0.3)}
            textColor={Color.white}
            textTransform={'none'}
            text={'CONFIRM NOW'}
            marginBottom={moderateScale(20, 0.6)}
            isBold
            onPress={() => {
              if (isPaymentCom === true) {
                navigationService.navigate('MapScreen', {
                  pickupLocation: pickupLocation,
                  dropoffLocation: dropoffLocation,
                  fare: fare,
                  paymentMethod: paymentMethod,
                  isEnabled: isEnabled,
                  distance: distance,
                  currentPosition: currentPosition,
                });
              } else {
                setPaymentCom(true);
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FareScreen;

const styles = StyleSheet.create({
  safearea_view: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
  },
  main_view: {
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: moderateScale(20, 0.6),
    paddingVertical: moderateScale(20, 0.6),
    alignItems: 'center',
  },
  search_conatiner: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.11,
    backgroundColor: 'white',
    marginTop: moderateScale(20, 0.6),
    borderRadius: moderateScale(15, 0.6),
    borderWidth: 0.2,
    borderColor: Color.themeBlack,
    paddingVertical: moderateScale(15, 0.6),
    paddingHorizontal: moderateScale(15, 0.6),
  },
  map_view: {
    width: windowWidth * 0.9,
    height: moderateScale(55, 0.6),
    backgroundColor: Color.white,
    borderRadius: windowWidth,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  map_icon_view: {
    width: moderateScale(25, 0.6),
    height: moderateScale(25, 0.6),
    backgroundColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: windowWidth,
    marginRight: moderateScale(10, 0.6),
  },
});
