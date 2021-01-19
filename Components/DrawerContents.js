import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Drawer, DrawerItem, Icon, Avatar, Text} from '@ui-kitten/components';



const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);
const HistoryIcon = (props) => (
  <Icon {...props} name='inbox-outline'/>
);
const BookingIcon = (props) => (
  <Icon {...props} name='calendar-outline'/>
);
const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);
const SettingIcon = (props) => (
  <Icon {...props} name='settings-outline'/>
);

const ForwardIcon = (props) => (
  <Icon {...props} name='arrow-ios-forward'/>
);
const LogoutIcon = (props) => (
  <Icon {...props} name='log-out-outline'/>
);

const Header = (props) => (
  <React.Fragment>
    <View style={{alignItems: 'center',flexDirection: 'row',paddingTop:45,paddingLeft:25,paddingBottom:25 }}>
      <Avatar size='giant' source={require('../assets/image-app-icon.png')}/>
      <Text style={{margin:20}} category='h5'>Shahanad Vs</Text>
    </View>
    <Divider/>
  </React.Fragment>
);

const goBackBtn=({navigation})=>{
  navigation.goBack();
}


const Footer =(props)=> (
  <React.Fragment>
    <Divider/>
    <DrawerItem
        title='Logout'
        accessoryLeft={LogoutIcon}
        onPress={goBackBtn}
      />
    
    
  </React.Fragment>
);

export const DrawerContents = ({ navigation, state }) => {

  
  
  const goHome =()=>{
    navigation.navigate('Home');
  }
  const goProfile =()=>{
    navigation.navigate('Profile');
  }
  const goBooking =()=>{
    navigation.navigate('Booking');
  }
  const goHistory =()=>{
    navigation.navigate('History');
  }
  const goSettings =()=>{
    navigation.navigate('Settings');
  }

  return (
    <Drawer
      header={Header}
      footer={Footer}
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}
      
     >
      <DrawerItem
        title='Home'
        accessoryLeft={HomeIcon}
        accessoryRight={ForwardIcon}
        onPress={goHome}
      />
      <DrawerItem
        title='Profile'
        accessoryLeft={PersonIcon}
        accessoryRight={ForwardIcon}
        onPress={goProfile}
      />
       <DrawerItem
        title='Book A caraven'
        accessoryLeft={BookingIcon}
        accessoryRight={ForwardIcon}
        onPress={goBooking}
      />
       <DrawerItem
        title='History'
        accessoryLeft={HistoryIcon}
        accessoryRight={ForwardIcon}
        onPress={goHistory}
      />
       <DrawerItem
        title='Settings'
        accessoryLeft={SettingIcon}
        accessoryRight={ForwardIcon}
        onPress={goSettings}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
});