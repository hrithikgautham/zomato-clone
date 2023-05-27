import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const { cart, } = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{
      alignItems: "center"
    }}>
      <Image source={{
        uri: "https://links.papareact.com/wru",
      }}
        className="h-40 w-full bg-gray-300 shadow-md"
      />
      {
        cart.length <= 0 && (<View>
          <Text className="font-bold text-4xl p-4 text-center">Your Cart Is Empty!</Text>
        </View>)
      }
      {
        cart.map(item => (<View key={item.id} className="flex-row items-center justify-between self-stretch m-2 rounded-md bg-white p-2 shadow-md shadow-gray-200">
          <View>
            <Text className="font-bold text-xl ">{item.title}</Text>
            <View className="flex-row space-x-2 mt-2">
              <Text>₹{item.price}</Text>
              <Text>x <Text className="font-bold">{item.quantity}</Text></Text>
            </View>
          </View>
          <Image source={{
            uri: "https://links.papareact.com/wru",
          }}
            className="h-20 w-20" />
        </View>))
      }
      {
        cart.length > 0 && (<TouchableOpacity onPress={() => {
          navigation.goBack()
          navigation.navigate("CheckoutScreen")
        }}
          className="bg-red-500 p-3 rounded-md"
        >
          <Text className="text-lg font-bold text-white">Checkout</Text>
        </TouchableOpacity>)
      }
    </ScrollView>
  )
}

export default CartScreen