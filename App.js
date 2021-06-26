import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Homescreen';
import {Feather} from '@expo/vector-icons';
import {Touchable, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Navigation = createStackNavigator(
  {
        Home: HomeScreen,
  },
  {
        initialRouteName: "Home",
        defaultNavigationOptions: 
        
        {
          
            title: "Profile",
            //headerShown: "False",
            header : null,
            headerTitleStyle: {
              textAlign: 'left',
              color: 'white',
              backgroundColor: 'black',
              fontSize: 30,
                           
          },
          headerRight:
          <TouchableOpacity style={{backgroundColor: 'black',}}>
              {/*<Feather name="bell" size={30} color="white"/> */}
              <MaterialCommunityIcons name="bell" size={24} color="white" />
          </TouchableOpacity>
        }
  }
);

export default createAppContainer(Navigation);