import React from 'react'
import {Text,ButtonGroup,Button,Avatar, Icon,TopNavigation, TopNavigationAction,Menu, MenuItem} from '@ui-kitten/components';
import {View, StyleSheet, SafeAreaView } from 'react-native';




const ProfileScreen =({navigation})=>{
  
      const DrawerIcon = (props) => (
        <Icon name='options-2-outline' {...props} />
      );
      const BackIcon = (props) => (
        <Icon name='arrow-back-outline' {...props} />
      );

      const EditIcon = (props) => (
        <Icon name='edit-2-outline' {...props} />
      );
      const LogoutIcon = (props) => (
        <Icon name='log-out-outline' {...props} />
      );
      
      const drawerToggle = ()=>{
        navigation.toggleDrawer();
      };
      
      
      const goBack=()=>{
        navigation.goBack();
      }
      const FirstName=()=>(
        <Text style={{paddingRight:12,fontSize:13}} >Shahanad</Text>
      );
      const LastName=()=>(
        <Text style={{paddingRight:12,fontSize:13}} >VS</Text>
      );
      const Gender=()=>(
        <Text style={{paddingRight:12,fontSize:13}} >MAle</Text>
      );
      const Age=()=>(
        <Text style={{paddingRight:12,fontSize:13}} >22</Text>
      );
      const Place=()=>(
        <Text style={{paddingRight:12,fontSize:13}} >Puthanathani</Text>
      );
      const PhoneNumber=()=>(
        <Text style={{paddingRight:12,fontSize:13}} >+91 7736560326</Text>
      );
      const Email=()=>(
        <Text style={{paddingRight:12,fontSize:13}} >shahanadvs@gmail.com</Text>
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
         <View style={styles.avatarBackground}>
          <Avatar style={styles.avatar} size='giant' source={require('../assets/image-app-icon.png')}/>
         </View>
         <View styles={{flex:1,}}>
         <Menu style={styles.menu} >
            <MenuItem style={styles.menuItems} title='First Name' disabled={true} accessoryRight={FirstName}/>
            <MenuItem style={styles.menuItems} title='Last Name' disabled={true} accessoryRight={LastName}/>
            <MenuItem style={styles.menuItems} title='Gender' disabled={true} accessoryRight={Gender}/>
            <MenuItem style={styles.menuItems} title='Age' disabled={true} accessoryRight={Age}/>
            <MenuItem style={styles.menuItems} title='Place' disabled={true} accessoryRight={Place}/>
            <MenuItem style={styles.menuItems} title='Phone Number' disabled={true} accessoryRight={PhoneNumber}/>
            <MenuItem style={styles.menuItems} title='Email' disabled={true}  accessoryRight={Email}/>
         </Menu>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <ButtonGroup style={{margin:15}} status='primary'>
            <Button style={styles.btn} accessoryLeft={EditIcon}>Edit</Button>
            <Button style={styles.btn} accessoryLeft={LogoutIcon}>Sign Out</Button>
        </ButtonGroup>
         </View>
         </View>
         

       </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'stretch',
    paddingTop:25,
    backgroundColor:'#F9FAFF'
  },
  avatarBackground:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar:{
    margin:25,
    width:120,
    height:120
  },
  btn:{
    width:150,
  },
  menuItems:{
    paddingTop:15,
    paddingBottom:15
  }
})