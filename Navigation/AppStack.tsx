import React, { FC } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Dashboard, Home, AddWatch, TimeLine } from "../ScreensOptions";

const Tab = createBottomTabNavigator();

const { Navigator, Screen } = createStackNavigator();

const AppStack : FC = () => {
    return (

      <View>
      <Text>Hello inside App</Text>
  </View>      // <Tab.Navigator>
        //     <Tab.Screen
        //         name="Home"
        //         component={Home}
        //         options={{
        //             tabBarLabel: 'Home',
        //             tabBarIcon: ({ color, size }) => (
        //               <MaterialCommunityIcons name="home" color={color} size={size} />
        //             ),
        //           }}
        //     />
        //     <Tab.Screen
        //         name="Network"
        //         component={TimeLine}
        //         options={{
        //             tabBarLabel: 'Timeline',
        //             tabBarIcon: ({ color, size }) => (
        //               <MaterialCommunityIcons name="table-network" color={'green'} size={size} />
        //             ),
        //           }}
        //     />
        //     <Tab.Screen
        //         name="Add"
        //         component={AddWatch}
        //         options={{
        //             tabBarLabel: 'Add',
        //             tabBarIcon: ({ color, size }) => (
        //               <MaterialCommunityIcons name="plus-outline" color={'red'} size={45} />
        //             ),
        //           }}
        //     />
        //     <Tab.Screen
        //         name="Profile"
        //         component={Dashboard}
        //         options={{
        //             tabBarLabel: 'Home',
        //             tabBarIcon: ({ color, size }) => (
        //               <MaterialCommunityIcons name="account-settings" color={'blue'} size={size} />
        //             ),
        //           }}
                
        //     />
        // </Tab.Navigator>

    )
}

export default AppStack;