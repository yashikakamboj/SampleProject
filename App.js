import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Homescreen';
import {Feather} from '@expo/vector-icons';
import {Touchable, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IndexScreen from './src/screens/IndexScreen';
import SecondScreen from './src/screens/SecondScreen';

const Navigation = createStackNavigator(
  {
        Home: HomeScreen,
        Index: IndexScreen,
        Second: SecondScreen,
  },
  {
        initialRouteName: "Index",
        defaultNavigationOptions: 
        
        {
          
            title: "App",
            //header : null,
            headerTitleStyle: {
              textAlign: 'left',
              
              fontSize: 30,
                           
          }
        }
  }
);

export default createAppContainer(Navigation);