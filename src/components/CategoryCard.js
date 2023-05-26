import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title, }) => {
  return (
    <TouchableOpacity className="relative h-20 w-20 mr-2">
      <Image source={{
        uri: imgUrl
      }}
      className="w-20 h-20 rounded bg-black"
      />
      <Text className="absolute bottom-1 right-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard