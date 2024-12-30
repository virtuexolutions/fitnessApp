/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NativeBaseProvider} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from './SRC/Screens/SplashScreen';
import {store} from './SRC/Store/index';
import AppNavigator from './SRC/appNavigation';

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
  return <AppNavigator />;
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
