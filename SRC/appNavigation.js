import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import Color from './Assets/Utilities/Color';
import navigationService from './navigationService';
import Authscreen from './Screens/Authscreen';
import AvailableFood from './Screens/AvailableFood';
import Category from './Screens/Category';
import ChangePassword from './Screens/ChangePassword';
import ChoooseAdditionalGoal from './Screens/ChoooseAdditionalGoal';
import Choosegender from './Screens/Choosegender';
import ChooseMealsVariety from './Screens/ChooseMealsVariety';
import DietPlanScreen from './Screens/DietPlanScreen';
import HealthPlanOnboarding from './Screens/HealthPlanOnboarding';
import Height from './Screens/Height';
import Home from './Screens/Home';
import Introscreen from './Screens/Introscreen';
import Lifescorescreen from './Screens/Lifescorescreen';
import MealInDay from './Screens/MealInDay';
import PickItems from './Screens/PickItems';
import PickItems2 from './Screens/pickItems2';
import Preferencesscreen from './Screens/Preferencesscreen';
import Profile from './Screens/Profile';
import Progress from './Screens/Progress';
import ProgressTracking from './Screens/ProgressTracking';
import QuestionnaireAlcoholicDrinks from './Screens/QuestionnaireAlcoholicDrinks';
import QuestionnaireBerries from './Screens/QuestionnaireBerries';
import QuestionnaireBread from './Screens/QuestionnaireBread';
import QuestionnaireBread2 from './Screens/QuestionnaireBread2';
import QuestionnaireCandy from './Screens/QuestionnaireCandy';
import QuestionnaireCereal from './Screens/QuestionnaireCereal';
import QuestionnaireCheese from './Screens/QuestionnaireCheese';
import QuestionnaireColorfulVegetables from './Screens/QuestionnaireColorfulVegetables';
import QuestionnaireCookingOil from './Screens/QuestionnaireCookingOil';
import QuestionnaireDessert from './Screens/QuestionnaireDessert';
import QuestionnaireDiaryProducts from './Screens/QuestionnaireDiaryProducts';
import QuestionnaireEggs from './Screens/QuestionnaireEggs';
import QuestionnaireExerciseHigh from './Screens/QuestionnaireExerciseHigh';
import QuestionnaireExerciseMod from './Screens/QuestionnaireExerciseMod';
import QuestionnaireExerciseStrength from './Screens/QuestionnaireExerciseStrength';
import QuestionnaireFastFood from './Screens/QuestionnaireFastFood';
import QuestionnaireFriedFood from './Screens/QuestionnaireFriedFood';
import QuestionnaireFrozenMeals from './Screens/QuestionnaireFrozenMeals';
import QuestionnaireFruit from './Screens/QuestionnaireFruit';
import QuestionnaireFruitJuice from './Screens/QuestionnaireFruitJuice';
import QuestionnaireGreenVegetables from './Screens/QuestionnaireGreenVegetables';
import QuestionnaireMeat from './Screens/QuestionnaireMeat';
import QuestionnaireNoodles from './Screens/QuestionnaireNoodles';
import QuestionnaireOatMeals from './Screens/QuestionnaireOatMeals';
import QuestionnairePastaNoodles from './Screens/QuestionnairePastaNoodles';
import QuestionnairePoultry from './Screens/QuestionnairePoultry';
import QuestionnaireProtien from './Screens/QuestionnaireProtien';
import QuestionnaireRedMeat from './Screens/QuestionnaireRedMeat';
import QuestionnaireRice from './Screens/QuestionnaireRice';
import QuestionnaireRootVegetables from './Screens/QuestionnaireRootVegetables.';
import QuestionnaireSaltySnacks from './Screens/QuestionnaireSaltySnacks';
import QuestionnaireSeaFood from './Screens/QuestionnaireSeaFood';
import QuestionnaireSeeds from './Screens/QuestionnaireSeeds';
import QuestionnaireSugaryDrinks from './Screens/QuestionnaireSugaryDrinks';
import QuestionnaireVegetables from './Screens/QuestionnaireVegetables';
import QuestionnaireWater from './Screens/QuestionnaireWater';
import QuestionnaireWholeGrainRice from './Screens/QuestionnaireWholeGrainRice';
import QuestionnaireWholeGrains from './Screens/QuestionnaireWholeGrains';
import QuestionnaireYogurt from './Screens/QuestionnaireYogurt';
import Recipes from './Screens/Recipes';
import RemaindersScreen from './Screens/RemaindersScreen';
import ResetPassword from './Screens/ResetPassword';
import ScanScreen from './Screens/ScanScreen';
import Signup from './Screens/Signup';
import Socialscreen from './Screens/Socialscreen';
import SplashScreen from './Screens/SplashScreen';
import Startedscreen from './Screens/Startedscreen';
import SupportingScreen from './Screens/SupportingScreen';
import TimmerSCreen from './Screens/TimmerSCreen';
import TrackerScreen from './Screens/TrackerScreen';
import WalkThroughScreen from './Screens/WalkthroughScreen';
import Weightcategoryscreen from './Screens/Weightcategoryscreen';
import WeightTrackerScreen from './Screens/WeightTrackerScreen';
import Yourplan from './Screens/Yourplan';

// enableScreens();
const AppNavigator = () => {
  const isGoalCreated = useSelector(state => state.authReducer.isGoalCreated);
  const walkThrough = useSelector(state => state.authReducer.userWalkThrough);
  const role = useSelector(state => state.authReducer.role);
  const isVerified = useSelector(state => state.authReducer.isVerified);
  const token = useSelector(state => state.authReducer.token);

  const RootNav = createNativeStackNavigator();
  const RootNavLogged = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
    const firstScreen =
      walkThrough == false
        ? 'WalkThroughScreen'
        : token == null
        ? 'Start'
        : 'MyDrawer';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={'StartedScreen'}
          // initialRouteName={'Walletscreen'}
          // initialRouteName={'RateScreen'}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen name="AuthScreen" component={Authscreen} />
          <RootNav.Screen name="AvailableFood" component={AvailableFood} />
          <RootNav.Screen name="Category" component={Category} />
          <RootNav.Screen name="ChangePassword" component={ChangePassword} />
          <RootNav.Screen
            name="ChooseAdditionalGoal"
            component={ChoooseAdditionalGoal}
          />
          <RootNav.Screen name="ChooseGender" component={Choosegender} />
          <RootNav.Screen
            name="ChooseMealsVariety"
            component={ChooseMealsVariety}
          />
          <RootNav.Screen name="DietPlanScreen" component={DietPlanScreen} />
          <RootNav.Screen
            name="HealthPlanOnboarding"
            component={HealthPlanOnboarding}
          />
          <RootNav.Screen name="Height" component={Height} />
          <RootNav.Screen name="Home" component={Home} />
          <RootNav.Screen name="IntroScreen" component={Introscreen} />
          <RootNav.Screen name="LifeScoreScreen" component={Lifescorescreen} />
          {/* <RootNav.Screen name="LoginScreen" component={LoginScreen} /> */}
          <RootNav.Screen name="MealInDay" component={MealInDay} />
          <RootNav.Screen name="PickItems" component={PickItems} />
          <RootNav.Screen name="PickItems2" component={PickItems2} />
          <RootNav.Screen
            name="PreferenceScreen"
            component={Preferencesscreen}
          />
          <RootNav.Screen name="Profile" component={Profile} />
          <RootNav.Screen name="Progress" component={Progress} />
          <RootNav.Screen
            name="ProgressTracking"
            component={ProgressTracking}
          />

          <RootNav.Screen
            name="QuestionnaireAlcoholicDrinks"
            component={QuestionnaireAlcoholicDrinks}
          />
          <RootNav.Screen
            name="QuestionnaireBerries"
            component={QuestionnaireBerries}
          />
          <RootNav.Screen
            name="QuestionnaireBread2"
            component={QuestionnaireBread2}
          />
          <RootNav.Screen
            name="QuestionnaireBread"
            component={QuestionnaireBread}
          />
          <RootNav.Screen
            name="QuestionnaireCandy"
            component={QuestionnaireCandy}
          />
          <RootNav.Screen
            name="QuestionnaireCereal"
            component={QuestionnaireCereal}
          />
          <RootNav.Screen
            name="QuestionnaireCheese"
            component={QuestionnaireCheese}
          />
          <RootNav.Screen
            name="QuestionnaireColorfulVegetables"
            component={QuestionnaireColorfulVegetables}
          />
          <RootNav.Screen
            name="QuestionnaireCookingOil"
            component={QuestionnaireCookingOil}
          />
          <RootNav.Screen
            name="QuestionnaireDessert"
            component={QuestionnaireDessert}
          />
          <RootNav.Screen
            name="QuestionnaireDiaryProducts"
            component={QuestionnaireDiaryProducts}
          />
          <RootNav.Screen
            name="QuestionnaireEggs"
            component={QuestionnaireEggs}
          />
          <RootNav.Screen
            name="QuestionnaireExerciseHigh"
            component={QuestionnaireExerciseHigh}
          />
          <RootNav.Screen
            name="QuestionnaireExerciseMod"
            component={QuestionnaireExerciseMod}
          />
          <RootNav.Screen
            name="QuestionnaireExerciseStrength"
            component={QuestionnaireExerciseStrength}
          />
          <RootNav.Screen
            name="QuestionnaireFastFood"
            component={QuestionnaireFastFood}
          />
          <RootNav.Screen
            name="QuestionnaireFriedFood"
            component={QuestionnaireFriedFood}
          />
          <RootNav.Screen
            name="QuestionnaireFrozenMeals"
            component={QuestionnaireFrozenMeals}
          />
          <RootNav.Screen
            name="QuestionnaireFruit"
            component={QuestionnaireFruit}
          />
          <RootNav.Screen
            name="QuestionnaireFruitJuice"
            component={QuestionnaireFruitJuice}
          />
          <RootNav.Screen
            name="QuestionnaireGreenVegetables"
            component={QuestionnaireGreenVegetables}
          />
          <RootNav.Screen
            name="QuestionnaireMeat"
            component={QuestionnaireMeat}
          />
          <RootNav.Screen
            name="QuestionnaireNoodles"
            component={QuestionnaireNoodles}
          />
          <RootNav.Screen
            name="QuestionnaireOatMeals"
            component={QuestionnaireOatMeals}
          />
          <RootNav.Screen
            name="QuestionnairePastaNoodles"
            component={QuestionnairePastaNoodles}
          />
          <RootNav.Screen
            name="QuestionnairePoultry"
            component={QuestionnairePoultry}
          />
          <RootNav.Screen
            name="QuestionnaireProtien"
            component={QuestionnaireProtien}
          />
          <RootNav.Screen
            name="QuestionnaireRedMeat"
            component={QuestionnaireRedMeat}
          />
          <RootNav.Screen
            name="QuestionnaireRice"
            component={QuestionnaireRice}
          />
          <RootNav.Screen
            name="QuestionnaireRootVegetables"
            component={QuestionnaireRootVegetables}
          />
          <RootNav.Screen
            name="QuestionnaireSaltySnacks"
            component={QuestionnaireSaltySnacks}
          />
          <RootNav.Screen
            name="QuestionnaireSeaFood"
            component={QuestionnaireSeaFood}
          />
          <RootNav.Screen
            name="QuestionnaireSeeds"
            component={QuestionnaireSeeds}
          />
          <RootNav.Screen
            name="QuestionnaireSugaryDrinks"
            component={QuestionnaireSugaryDrinks}
          />
          <RootNav.Screen
            name="QuestionnaireVegetables"
            component={QuestionnaireVegetables}
          />
          <RootNav.Screen
            name="QuestionnaireWater"
            component={QuestionnaireWater}
          />
          <RootNav.Screen
            name="QuestionnaireWholeGrainRice"
            component={QuestionnaireWholeGrainRice}
          />
          <RootNav.Screen
            name="QuestionnaireWholeGrains"
            component={QuestionnaireWholeGrains}
          />
          <RootNav.Screen
            name="QuestionnaireYogurt"
            component={QuestionnaireYogurt}
          />
          <RootNav.Screen
            name="RemaindersScreen"
            component={RemaindersScreen}
          />
          <RootNav.Screen name="ResetPassword" component={ResetPassword} />
          <RootNav.Screen name="ScanScreen" component={ScanScreen} />
          <RootNav.Screen name="Signup" component={Signup} />
          <RootNav.Screen name="SocialScreen" component={Socialscreen} />
          <RootNav.Screen name="SplashScreen" component={SplashScreen} />
          <RootNav.Screen name="StartedScreen" component={Startedscreen} />
          <RootNav.Screen
            name="SupportingScreen"
            component={SupportingScreen}
          />
          <RootNav.Screen name="TimmerScreen" component={TimmerSCreen} />
          <RootNav.Screen name="TrackerScreen" component={TrackerScreen} />
          <RootNav.Screen
            name="WalkthroughScreen"
            component={WalkThroughScreen}
          />
          <RootNav.Screen
            name="WeightCategoryScreen"
            component={Weightcategoryscreen}
          />
          <RootNav.Screen
            name="WeightTrackerScreen"
            component={WeightTrackerScreen}
          />
          <RootNav.Screen name="Recipes" component={Recipes} />
          <RootNav.Screen name="YourPlan" component={Yourplan} />
          <RootNav.Screen name="TabNavigation" component={TabNavigation} />
        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

export const TabNavigation = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      tabBar={props => {
        return (
          <BottomTabBar {...props} style={{backgroundColor: 'transparent'}} />
        );
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopStartRadius: moderateScale(40, 0.6),
          borderTopEndRadius: moderateScale(40, 0.6),
          backgroundColor: 'transparent',
          paddingHorizontal: moderateScale(10, 0.6),
        },
        tabBarIcon: ({focused}) => {
          let iconName;
          let color = Color.theme2;
          let size = moderateScale(24, 0.3);
          let type = Ionicons;
          if (route.name === 'Diary') {
            iconName = 'notebook';
            type = MaterialCommunityIcons;
            color = Color.darkGray;
            size = moderateScale(20, 0.3);
          } else if (route.name === 'WorkOut') {
            iconName = 'dumbbell';
            type = MaterialCommunityIcons;
            color = Color.darkGray;
            size = moderateScale(20, 0.3);
          } else if (route?.name == 'Recipes') {
            iconName = 'shopping-basket';
            type = Entypo;
            size = moderateScale(20, 0.3);
          } else {
            iconName = 'bar-graph';
            color = Color.darkGray;
            size = moderateScale(20, 0.3);
            type = Entypo;
          }
          return route.name == 'Scan' ? (
            <View
              style={{
                backgroundColor: Color.peach,
                borderColor: Color.lightGrey,
                height: moderateScale(60, 0.3),
                width: moderateScale(60, 0.3),
                borderRadius: moderateScale(30, 0.3),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: moderateScale(-30, 0.3),
                shadowColor: Color.peach,
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                elevation: 12,
              }}>
              <Icon
                name={'plus'}
                as={Entypo}
                color={Color.darkGray}
                size={moderateScale(30, 0.6)}
              />
            </View>
          ) : (
            <View
              style={{
                backgroundColor: Color.peach,
                borderColor: Color.lightGrey,
                height: moderateScale(45, 0.3),
                width: moderateScale(45, 0.3),
                borderRadius: moderateScale(30, 0.3),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: moderateScale(-30, 0.3),
              }}>
              <Icon name={iconName} as={type} color={color} size={size} />
            </View>
          );
        },
        tabBarLabelStyle: {
          fontSize: moderateScale(10, 0.6),
          fontWeight: '600',
          color: Color.darkGray,
          top: -3,
        },
        tabBarShowLabel: true,
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: Color.white,
              borderTopStartRadius: moderateScale(40, 0.6),
              borderTopEndRadius: moderateScale(40, 0.6),
              paddingHorizontal: moderateScale(10, 0.6),
            }}></View>
        ),
      })}>
      <Tabs.Screen name={'Diary'} component={DietPlanScreen} />
      <Tabs.Screen name={'WorkOut'} component={Yourplan} />
      <Tabs.Screen name={'Scan'} component={ScanScreen} />
      <Tabs.Screen name={'Progress'} component={Progress} />
      <Tabs.Screen name={'Recipes'} component={Recipes} />
    </Tabs.Navigator>
  );
};

// export const MyDrawer = () => {
//   const DrawerNavigation = createDrawerNavigator();
//   const firstScreen = 'HomeScreen';
//   return (
//     <DrawerNavigation.Navigator
//       drawerContent={props => <Drawer {...props} />}
//       initialRouteName={'Home'}
//       screenOptions={{
//         headerShown: false,
//         drawerStyle: {
//           width: '80%',
//           borderTopRightRadius: moderateScale(120, 0.6),
//           borderBottomRightRadius: moderateScale(120, 0.6),
//         },
//       }}>
//       <DrawerNavigation.Screen name="Home" component={Home} />
//       <DrawerNavigation.Screen name="Walletscreen" component={Walletscreen} />
//       <DrawerNavigation.Screen
//         name="Earningsscreen"
//         component={Earningsscreen}
//       />
//       <DrawerNavigation.Screen name={'RateScreen'} component={RateScreen} />
//       <DrawerNavigation.Screen name="RideRequest" component={RideRequest} />
//       <DrawerNavigation.Screen name="RideScreen" component={RideScreen} />
//       <DrawerNavigation.Screen name="PaymentScreen" component={PaymentScreen} />

//       <DrawerNavigation.Screen
//         name="RecieptScreen"
//         component={SendTripRecieptScreen}
//       />
//       <DrawerNavigation.Screen
//         name="PassengerDetails"
//         component={PassengerDetails}
//       />
//       <DrawerNavigation.Screen
//         name="GoOnlineScreen"
//         component={GoOnlineScreen}
//       />
//       <DrawerNavigation.Screen name="MapScreen" component={MapScreen} />
//     </DrawerNavigation.Navigator>
//   );
// };

export default AppNavigator;
