import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (

    <TouchableOpacity className="bg-white mr-3 mb-3 rounded-md shadow-md" onPress={() => {
      navigation.navigate('RestaurantScreen', {
        // pass data here
      })
    }}>
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-64 bg-black rounded-t-md"
      />
      <View className="ml-2">
        <Text className="font-bold text-lg pt-2">
          {title}
        </Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={'green'} size={20} />
          <Text className="font-bold text-gray-500">
            <Text className="text-green-700">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="mt-1 flex-row items-center space-x-1 pb-2">
          <MapPinIcon color="#ccc" size={20} />
          <Text className="text-xs"><Text className="font-bold">Nearby</Text> . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard