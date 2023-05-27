import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useNavigation } from '@react-navigation/native';
import { CLEAR_CART } from '../utils/CartReducer';

const CheckoutScreen = () => {
  const { cart, cartDispatch, } = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Image source={{
        uri: "https://links.papareact.com/wru",
      }}
        className="h-40 bg-green-300" />
      <View className="items-center">
        <Text className="self-start font-extrabold text-3xl m-3">Checkout</Text>
        <View className="self-stretch">
          {
            cart.map(item => (<View key={item.id} className="flex-row items-center justify-between self-stretch m-2 rounded-md bg-white p-2 shadow-md shadow-gray-200">
              <View>
                <Text className="font-bold text-xl ">{item.title}</Text>
                <View className="flex-row space-x-2 mt-2">
                  <Text>₹{item.price}</Text>
                  <Text>x <Text className="font-bold">{item.quantity}</Text></Text>
                </View>
              </View>
              <Text className="text-lg font-bold">
                ₹{item.price * item.quantity}
              </Text>
            </View>))
          }
          <View className="flex-row items-center justify-between p-3 border-y bg-white">
            <Text className="font-bold text-xl ">Total</Text>
            <Text className="font-bold text-xl">₹{cart.reduce((p, c) => p + (c.price * c.quantity), 0)}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {
          Alert.alert("Order Placed!");
          cartDispatch({ type: CLEAR_CART, })
          navigation.navigate('RestaurantScreen');
        }}
          className="bg-red-600 p-4 mt-3 rounded-md">
          <Text className="text-lg font-bold text-white">Place Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default CheckoutScreen