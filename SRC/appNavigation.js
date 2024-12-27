import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import navigationService from './navigationService';
import DietPlanScreen from './Screens/DietPlanScreen';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import Progress from './Screens/Progress';
import ProgressTracking from './Screens/ProgressTracking';
import Recipes from './Screens/Recipes';
import SupportingScreen from './Screens/SupportingScreen';
import TimmerSCreen from './Screens/TimmerSCreen';
import Category from './Screens/Category';
import PickItems from './Screens/PickItems';
import AvailableFood from './Screens/AvailableFood';
import PickItems2 from './Screens/pickItems2';
import Height from './Screens/Height';
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
          initialRouteName={'ProgressTracking'}
          // initialRouteName={'Walletscreen'}
          // initialRouteName={'RateScreen'}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen
            name="SupportingScreen"
            component={SupportingScreen}
          />
          <RootNav.Screen name="DietPlanScreen" component={DietPlanScreen} />
          <RootNav.Screen name="TimmerSCreen" component={TimmerSCreen} />
          <RootNav.Screen name="Home" component={Home} />
          <RootNav.Screen name="Recipes" component={Recipes} />
          <RootNav.Screen name="Progress" component={Progress} />
          <RootNav.Screen name="Category" component={Category} />
          <RootNav.Screen name="PickItems" component={PickItems} />
          <RootNav.Screen name="PickItems2" component={PickItems2} />
          <RootNav.Screen name="AvailableFood" component={AvailableFood} />
          <RootNav.Screen name="Height" component={Height} />
          <RootNav.Screen
            name="ProgressTracking"
            component={ProgressTracking}
          />
        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

// export const TabNavigation = () => {
//   const Tabs = createBottomTabNavigator();
//   return (
//     <Tabs.Navigator
//       // tabBar={(props) => {
//       //   return (
//       //     <LinearGradient
//       //       colors={['red', 'blue']}

//       //       start={[1, 0]}
//       //       end={[0, 0]}
//       //     >
//       //       <BottomTabBar
//       //         {...props}
//       //         style={{ backgroundColor: 'transparent' }}
//       //       />
//       //     </LinearGradient>
//       //   );
//       // }}
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           // backgroundColor:'pink',
//           // backgroundColor: Color.red,
//           // borderTopLeftRadius:15,
//           // borderTopRightRadius:15,
//           // paddingVertical:5
//         },
//         tabBarIcon: ({focused}) => {
//           let iconName;
//           let color = Color.theme2;
//           let size = moderateScale(20, 0.3);
//           let type = Ionicons;

//           // if (route.name === 'HomeScreen') {
//           //   iconName = focused ? 'home' : 'home-outline';

//           //   color = focused ? Color.theme2 : Color.white;
//           //   size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           // } else
//           if (route.name === 'Donation') {
//             iconName = focused ? 'donate' : 'donate';
//             type = FontAwesome5;
//             color = focused ? Color.theme2 : Color.white;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else if (route.name === 'StoreScreen') {
//             iconName = focused ? 'cart' : 'cart';
//             color = focused ? Color.theme2 : Color.white;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else if (route?.name == 'Campaigns') {
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else {
//             iconName = focused ? 'settings-sharp' : 'settings-outline';
//             color = focused ? Color.theme2 : Color.white;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           }
//           return route.name == 'Campaigns' ? (
//             <View
//               style={{
//                 borderWidth: 5,
//                 borderColor: Color.lightGrey,
//                 height: moderateScale(60, 0.3),
//                 width: moderateScale(60, 0.3),
//                 borderRadius: moderateScale(30, 0.3),
//                 backgroundColor: Color.theme2,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginTop: moderateScale(-30, 0.3),
//               }}>
//               <Icon
//                 name={'search'}
//                 as={Feather}
//                 color={Color.white}
//                 size={size}
//               />
//             </View>
//           ) : (
//             <Icon name={iconName} as={type} color={color} size={size} />
//           );
//         },
//         tabBarShowLabel: false,
//         tabBarBackground: () => (
//           <View style={{flex: 1}}>
//             <LinearGradient
//               start={{x: 0, y: 0}}
//               end={{x: 0, y: 1}}
//               colors={Color.tabBarGradient}
//               style={{height: windowHeight * 0.1}}
//             />
//           </View>
//         ),
//       })}>
//       {/* <Tabs.Screen name={'HomeScreen'} component={HomeScreen} /> */}
//       {/* <Tabs.Screen name={'Donation'} component={Donation} />
//       <Tabs.Screen name={'Campaigns'} component={Campaigns} />
//       {/* <Tabs.Screen name={'BibleCategories'} component={BibleCategories} /> */}
//       {/* <Tabs.Screen name={'StoreScreen'} component={StoreScreen} /> */}
//       <Tabs.Screen name={'Settings'} component={Settings} />
//     </Tabs.Navigator>
//   );
// };

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
