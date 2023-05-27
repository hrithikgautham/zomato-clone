import { View, Text, Image, ScrollView, TouchableOpacity, Alert, } from 'react-native'
import React, { useLayoutEffect, useContext, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { ArrowRightIcon, ShoppingCartIcon, StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import DishCard from '../components/DishCard';
import { AppContext } from '../contexts/AppContext';

const RestaurantScreen = () => {
  const { cart, } = useContext(AppContext);
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  });

  return (
    <>
      <ScrollView className="relative">
        <View className="relative">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-60 bg-blue-200"
          />
          <TouchableOpacity className="absolute top-20 left-10 bg-white shadow-md p-2 rounded-full" onPress={() => {
            navigation.navigate('HomeScreen')
          }}>
            <ArrowLeftIcon color={"green"} />
          </TouchableOpacity>
        </View>

        <View className="m-6 mb-4">
          <Text className="font-bold text-2xl">Nando's</Text>
          <View className="flex-row items-center space-x-2">
            <View className="flex-row items-center space-x-1">
              <StarIcon color={'green'} size={20} />
              <Text className="font-bold text-gray-500">
                <Text className="text-green-700">4.5</Text> . Chinese
              </Text>
            </View>
            <View className="mt-1 flex-row items-center space-x-1 pb-2">
              <MapPinIcon color="#ccc" size={20} />
              <Text className="text-xs"><Text className="font-bold">Nearby</Text> . LA</Text>
            </View>
          </View>
          <Text className="text-gray-600">Description of the food is that thte customers of the food loving the food you have cooked.</Text>
        </View>

        <TouchableOpacity className="flex-row items-center px-2 py-5 space-x-2 border-y border-gray-300">
          <Text className="text-lg font-bold flex-1">
            Book Dining?
          </Text>
          <ArrowRightIcon />
        </TouchableOpacity>


        <View className="bg-gray-200 mb-40">
          <View className="flex-row items-center justify-between p-4" >
            <Text className="text-3xl font-bold">Menu</Text>
            <TouchableOpacity onPress={() => {
              // Alert.alert(JSON.stringify(cart))
              navigation.navigate("CartScreen")
            }}>
              <ShoppingCartIcon size={30} />
            </TouchableOpacity>
          </View>
          <DishCard
            id={1}
            title={'Peri Peri Nuts'}
            description={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
            price={200}
          />
          <DishCard
            id={2}
            title={'Peri Peri Nuts'}
            description={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
            price={200}
          />
          <DishCard
            id={3}
            title={'Peri Peri Nuts'}
            description={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
            price={200}
          />
          <DishCard
            id={4}
            title={'Peri Peri Nuts'}
            description={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
            price={200}
          />
          <DishCard
            id={5}
            title={'Peri Peri Nuts'}
            description={"dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
            price={200}
          />
        </View>
      </ScrollView>
      {
        cart.length > 0 && <TouchableOpacity className="absolute bottom-10 left-0 right-0 p-5 bg-red-700 mx-5 rounded-md" onPress={() => {
          navigation.navigate("CheckoutScreen")
        }}><Text className="font-bold text-white text-center text-lg">₹{cart.reduce((p, c) => p + (c.price * c.quantity), 0)} Checkout</Text></TouchableOpacity>
      }
    </>
  )
}

export default RestaurantScreen