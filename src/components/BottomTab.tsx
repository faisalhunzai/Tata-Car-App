import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '../components/Icon';
import LoginScreen from '../Screens/LoginScreen';
import Home from '../Screens/HomeScreen';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      detachInactiveScreens={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let iconComponent;

          switch (route.name) { 
            case 'Home':
              iconName = 'home';
              break;
            
            default:
              break;
          }

          if (!iconComponent) {
            iconComponent = (
              <View
                style={{
                  backgroundColor: focused ? 'white' : 'red',
                  padding: 1,
                  flexDirection: 'row',
                  
                  borderRadius: 5,
                } }
              >
                <Icon.AntDesign name={iconName} size={29} color={color} />
                {focused ? <Text>{route.name}</Text> : null}
              </View>
            );
          }

          return iconComponent;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarHideOnKeyboard: true,
        tabBarLabel: () => null,
      })}
    >
    
      
      <Tab.Screen name="H" component={Home} />
      
      
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
    
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, 
   width :70,
   height :40
  },
});
