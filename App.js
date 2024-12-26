/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useDispatch} from 'react-redux';
import {NativeBaseProvider, View} from 'native-base';
import {store, persistor} from './SRC/Store/index';
import {
  requestCameraPermission,
  requestLocationPermission,
  requestWritePermission,
} from './SRC/Utillity/utils';
import SplashScreen from './SRC/Screens/SplashScreen';
import AppNavigator from './SRC/appNavigation';
import Signup from './SRC/Screens/Signup';
import LoginScreen from './SRC/Screens/LoginScreen';
import Startedscreen from './SRC/Screens/Startedscreen';
import Authscreen from './SRC/Screens/Authscreen';
import Questionnaire from './SRC/Screens/Questionnaire';
import Introscreen from './SRC/Screens/Introscreen';
import Choosegender from './SRC/Screens/Choosegender';
import Lifescorescreen from './SRC/Screens/Lifescorescreen';
import Preferencesscreen from './SRC/Screens/Yourplan';
import Yourplan from './SRC/Screens/Yourplan';
import Weightcategoryscreen from './SRC/Screens/Weightcategoryscreen';

const App = () => {
  const [publishableKey, setPublishableKey] = useState('');

  const fetchPublishableKey = async () => {
    const key = await fetchKey(); // fetch key from your server here
    setPublishableKey(key);
  };

  console.reportErrorsAsExceptions = false;
  return (
    //   <StripeProvider
    //   publishableKey={"pk_test_51NjQZRBqyObuQCkVVZujGGQ9w7PjZegPiZvL9MEH12KsxQmTsLpBxsXdeyN8Tu3mYkN8YZt8WutsTCEexDwIOxaB00a6zjjE12"}
    //   // merchantIdentifier="merchant.identifier" // required for Apple Pay
    //   // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    // >
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NativeBaseProvider>
        {/* <SafeAreaView>
            <Text>hello

            </Text>
          </SafeAreaView> */}
        <MainContainer />
        {/* <SendTripRecieptScreen/> */}
      </NativeBaseProvider>
      {/* </PersistGate> */}
    </Provider>
    // </StripeProvider>
  );
};

const MainContainer = () => {
  // const isFocused = useIsFocused()
  // const dispatch = useDispatch();

/**
 * 
 */
  const [isloading] = useloader(true);
  if (isloading == true) {
    return <SplashScreen />;
  }
  // return <ChooseDeclineReasonScreen/>;
  return <Weightcategoryscreen/>
  // <AppNavigator />;
};

const useloader = value => {
  const [isloading, setIsloading] = useState(value);
  const [loadingTime] = useState(5000);
  useEffect(() => {
    setTimeout(() => setIsloading(false), loadingTime);
  }, []);
  return [isloading];
};
export default App;
