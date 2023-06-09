import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from "@react-navigation/native-stack"
import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import { createContext, useReducer, useState } from 'react';
import cartReducer from './src/utils/CartReducer';
import { AppContext } from './src/contexts/AppContext';
import CheckoutScreen from './src/screens/CheckoutScreen';
import CartScreen from './src/screens/CartScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [cart, cartDispatch] = useReducer(cartReducer, [])

  return (
    <AppContext.Provider value={{
      cart, cartDispatch,
    }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} options={{
            presentation: "modal",
            headerShown: false,
          }} />
          <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
