import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackScreen from './../navigation/StackNavigator';
import DrawerScreen from './../screens/DrawerScreen/index';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Root = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerScreen {...props}/>} >
      <Stack.Screen
        name="StackScreen"
        component={StackScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Root;
