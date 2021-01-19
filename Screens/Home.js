import React from 'react'
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native'
import {Text, Icon,TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';



const HomeScreen =({navigation})=>{
    const DrawerIcon = (props) => (
        <Icon name='options-2-outline' {...props} />
      );
      const StartIcon = (props) => (
        <Icon name='navigation-2-outline' {...props} />
      );
      const BookIcon = (props) => (
        <Icon name='calendar-outline' {...props} />
      );
      const FareIcon = (props) => (
        <Text category='h4' style={{color:'white'}}>₹</Text>
      );
      const drawerToggle = ()=>{
        navigation.toggleDrawer();
      };
    
      const DrawerAction = () => (
        <TopNavigationAction icon={DrawerIcon} onPress={drawerToggle} />
      )
      const Title =()=>(
        <Text category='h4' >Laverna Travels</Text>
      )

    return (
        
        <SafeAreaView style={{
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            backgroundColor:'#F9FAFF',
            paddingTop:25

          }}>
            <View style={styles.upperHead}>
                    <View>
                    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {true}/>
                    <TopNavigation style={styles.topNav} accessoryLeft={Title} accessoryRight={DrawerAction} />
                    </View>
                    <View style={{justifycontent:'center',alignItems:'center'}}>
                    <Button style={styles.btn} size='giant' accessoryRight={StartIcon} >
                        Start Your Journey 
                   </Button>
                   <Button style={styles.btn} size='giant' accessoryRight={BookIcon} >
                        Book A Caraven
                   </Button>
                   <Button style={{width:280,height:18,marginTop:30}} size='giant' accessoryRight={FareIcon}>
                        Calculate Fare
                   </Button>
                    </View>

            </View>
            <View style={{flex:1}}>

            </View>
            
          </SafeAreaView>
          
        
    )
}

export default HomeScreen


const styles= StyleSheet.create({
    upperHead:{
         flex:1.25,
         backgroundColor: '#ffffff',
         borderBottomLeftRadius: 30,
         borderBottomRightRadius: 30,
         shadowColor: "#000",
         shadowOffset: {
	      width: 0,
	      height: 5,
        },
         shadowOpacity: 0.25,
        shadowRadius: 1.5,
        elevation: 10,

        
    },
    topNav:{
        backgroundColor: '#ffffff',
        paddingLeft:20,
        paddingRight:15,
        paddingTop:15,
    },
    btn:{
      marginTop:30,
      width: 280,
    }
})