import React from 'react'
import {Text, Layout, Button,Icon,TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {BottomTab} from '../Components/BottomTab'



const TravelScreen =({navigation})=>{
    const DrawerIcon = (props) => (
        <Icon name='options-2-outline' {...props} />
      );
      const drawerToggle = ()=>{
        navigation.toggleDrawer();
      };
    
      const DrawerAction = () => (
        <TopNavigationAction icon={DrawerIcon} onPress={drawerToggle} />
      )
    return (
        <Layout style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <TopNavigation  title='Laverna Travels' accessoryRight={DrawerAction} />
        <Text>

            Settings Screen

        </Text>
        <Button onPress={()=>navigation.goBack()}>
            go back
        </Button>
        <BottomTab/>
    </Layout>
    )
}

export default TravelScreen