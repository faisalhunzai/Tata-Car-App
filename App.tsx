import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';
import BottomTab from './src/components/BottomTab';
import 'react-native-gesture-handler';
import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import loction from './src/Screens/LoctionScreen';
import AddScreen from './src/Screens/AddScreen';
import AddScreens from './src/Screens/AddScreens';
import PopupScreen from './src/Screens/PopupScreen';
import Popups from './src/Screens/Popups';
import StatusScreen from './src/Screens/StatusScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView> 
      <SheetProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BottomTab"
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="loction"
              component={loction}
              options={{ headerShown: false }}
            />
                <Stack.Screen
              name="AddScreen"
              component={AddScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="AddScreens"
              component={AddScreens}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="PopupScreen"
              component={PopupScreen}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="Popups"
              component={Popups}
              options={{ headerShown: false }}
            />
               <Stack.Screen
              name="StatusScreen"
              component={StatusScreen}
              options={{ headerShown: false }}
            />
           
          </Stack.Navigator>
        </NavigationContainer>
      </SheetProvider>
    </GestureHandlerRootView>
  );
}
export default App
