import React from 'react'
import {Text,Toggle,Divider, Icon,TopNavigation, TopNavigationAction,Menu, MenuItem} from '@ui-kitten/components';
import { View, StyleSheet, StatusBar,SafeAreaView } from 'react-native';




const SettingsScreen =({navigation})=>{
  
    const DrawerIcon = (props) => (
        <Icon name='options-2-outline' {...props} />
      );
      const BackIcon = (props) => (
        <Icon name='arrow-back-outline' {...props} />
      );
      const ForwardIcon = (props) => (
        <Icon name='arrow-ios-forward-outline' {...props} />
      );
      const drawerToggle = ()=>{
        navigation.toggleDrawer();
      };
      const [checked, setChecked] = React.useState(false);

      const onCheckedChange = (isChecked) => {
       setChecked(isChecked);
      };
      const ToggleBtn=()=>(
        <Toggle style={{paddingRight:12}} checked={checked} onChange={onCheckedChange}/>
      
      );

      const goBack=()=>{
        navigation.goBack();
      }
      const Version=()=>(
        <Text style={{paddingRight:12,fontSize:13}} >V1.001</Text>
      );
      
     
      const DrawerAction = () => (
        <TopNavigationAction icon={DrawerIcon} onPress={drawerToggle} />
      )
      const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={goBack} />
      )
     
      
    return (
       <SafeAreaView style={styles.container}>
         
         <TopNavigation  accessoryLeft={BackAction} accessoryRight={DrawerAction} />
         <Divider/>
         <Menu style={styles.menu} >
            <MenuItem title='Notifications' accessoryRight={ToggleBtn}/>
            <MenuItem title='Edit Profile' accessoryRight={ForwardIcon}/>
            <MenuItem title='Change Password' accessoryRight={ForwardIcon}/>
            <MenuItem title='About Laverna' accessoryRight={ForwardIcon}/>
            <MenuItem title='Developers' accessoryRight={ForwardIcon}/>
            <MenuItem title='Privacy' accessoryRight={ForwardIcon}/>
            <MenuItem title='Version'  accessoryRight={Version}/>
         </Menu>
         

       </SafeAreaView>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'stretch',
    paddingTop:25,
    backgroundColor:'#F9FAFF'
  }
})