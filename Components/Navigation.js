  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { createStackNavigator } from '@react-navigation/stack';

  import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
 
  import HomeScreen from '../Screens/Home'
  import HistoryScreen from '../Screens/History'
  import BookingScreen from '../Screens/Booking'
  import ProfileScreen from '../Screens/Profile'
  import SettingsScreen   from '../Screens/Settings'
  import TravelScreen from '../Screens/Travel'

  import {DrawerContents} from './DrawerContents'

  const { Navigator, Screen } = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const HomeIcon = (props) => (
    <Icon {...props} name='home-outline'/>
  );
  const HistoryIcon = (props) => (
    <Icon {...props} name='inbox-outline'/>
  );
  const TravelIcon = (props) => (
    <Icon {...props} name='navigation-2-outline'/>
  );
  const PersonIcon = (props) => (
    <Icon {...props} name='person-outline'/>
  );
  const SettingIcon = (props) => (
    <Icon {...props} name='settings-outline'/>
  );

  const HomeNavigator =()=>{
    
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
            
          }}>
        <Stack.Screen name="Homestack" component={TabNavigator} />
        {/* <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Travel" component={TravelScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        <Stack.Screen name="Booking" component={BookingScreen} 
          />
        </Stack.Navigator>
    )   
}
  
 
  const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon}/>
      <BottomNavigationTab icon={HistoryIcon}/>
      <BottomNavigationTab icon={TravelIcon}/>
      <BottomNavigationTab icon={PersonIcon}/>
      <BottomNavigationTab icon={SettingIcon}/>
      
    </BottomNavigation>
  );
 
  const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen name='Home' component={HomeScreen}/>
      <Screen name='History' component={HistoryScreen}/>
      <Screen name='Travel' component={TravelScreen}/>
      <Screen name='Profile' component={ProfileScreen}/>
      <Screen name='Settings' component={SettingsScreen}/>
     
    </Navigator>
  );


  const DrawerNavigator = ()=>{
    return(
    <Drawer.Navigator initialRouteName="Home" drawerContent ={props => <DrawerContents {...props}/> }>
        <Drawer.Screen name="HomeDrawer" component={HomeNavigator} />
       
     </Drawer.Navigator>
    )
}
 
  export const AppNavigator = () => (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );