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
import QuestionnaireAlcoholicDrinks from './SRC/Screens/QuestionnaireAlcoholicDrinks';
import QuestionnaireYogurt from './SRC/Screens/QuestionnaireYogurt';
import QuestionnaireEggs from './SRC/Screens/QuestionnaireEggs';
import QuestionnaireExcercise from './SRC/Screens/QuestionnaireExerciseMod';
import QuestionnaireExercise from './SRC/Screens/QuestionnaireExerciseMod';
import QuestionnaireExerciseHigh from './SRC/Screens/QuestionnaireExerciseHigh';
import QuestionnaireVegetables from './SRC/Screens/QuestionnaireVegetables';
import QuestionnaireFruitJuice from './SRC/Screens/QuestionnaireFruitJuice';
import QuestionnaireMeat from './SRC/Screens/QuestionnaireMeat';
import QuestionnaireColorfulVegetables from './SRC/Screens/QuestionnaireColorfulVegetables';
import QuestionnaireExerciseStrength from './SRC/Screens/QuestionnaireExerciseStrength';
import QuestionnaireFriedFood from './SRC/Screens/QuestionnaireFriedFood';
import QuestionnaireRedMeat from './SRC/Screens/QuestionnaireRedMeat';
import QuestionnaireSugaryDrinks from './SRC/Screens/QuestionnaireSugaryDrinks';
import QuestionnairePoultry from './SRC/Screens/QuestionnairePoultry';
import QuestionnaireCheese from './SRC/Screens/QuestionnaireCheese';
import QuestionnaireGreenVegetables from './SRC/Screens/QuestionnaireGreenVegetables';
import QuestionnaireRootVegetables from './SRC/Screens/QuestionnaireRootVegetables.';
import QuestionnaireSeaFood from './SRC/Screens/QuestionnaireSeaFood';
import QuestionnaireSeeds from './SRC/Screens/QuestionnaireSeeds';
import QuestionnaireDiaryProducts from './SRC/Screens/QuestionnaireDiaryProducts';
import ChooseMealsVariety from './SRC/Screens/ChooseMealsVariety';
import RemaindersScreen from './SRC/Screens/RemaindersScreen';
import ScanScreen from './SRC/Screens/ScanScreen';
import HealthPlanOnboarding from './SRC/Screens/HealthPlanOnboarding';
import TrackerScreen from './SRC/Screens/TrackerScreen';
import WeightTrackerScreen from './SRC/Screens/WeightTrackerScreen';
import Startedscreen from './SRC/Screens/Startedscreen';

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
  return <Yourplan />;
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
