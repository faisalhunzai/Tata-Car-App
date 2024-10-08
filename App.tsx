import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';
import BottomTab from './src/components/BottomTab';
import 'react-native-gesture-handler';
import { SheetProvider } from 'react-native-actions-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import mapScreen from './src/Screens/mapScreen';
import CarAddScreen from './src/Screens/CarAddScreen';
import riesterScreen from './src/Screens/riesterSrceen';
import BookingTimeScreen from './src/Screens/BookingTimeScreen';
import BookingReviewScreen from './src/Screens/BookingReviewScreen';
import StatusScreen from './src/Screens/StatusScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView> 
      <SheetProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
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
              name="mapScreen"
              component={mapScreen}
              options={{ headerShown: false }}
            />
                <Stack.Screen
              name="CarAddScreen"
              component={CarAddScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="riesterScreen"
              component={riesterScreen}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="PopupScreen"
              component={BookingTimeScreen}
              options={{ headerShown: false }}
            />
              <Stack.Screen
              name="BookingReviewScreen"
              component={BookingReviewScreen}
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
