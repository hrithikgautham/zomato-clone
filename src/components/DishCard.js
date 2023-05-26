import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { MinusCircleIcon, MinusIcon, PlusCircleIcon, PlusIcon } from 'react-native-heroicons/solid';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../utils/CartReducer';
import { AppContext } from '../contexts/AppContext';

const DishCard = ({ id, title, description, price, }) => {

  const { cartDispatch, } = useContext(AppContext);

  const [selected, setSelected] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (quantity > 0) {
      cartDispatch({
        type: ADD_TO_CART,
        state: {
          id,
          title,
          price,
          quantity,
        },
        id,
      })
    }
    else {
      cartDispatch({
        type: REMOVE_FROM_CART,
        id,
      })
    }
  }, [quantity]);

  return (
    <TouchableOpacity disabled={selected} className="bg-white border border-gray-200 p-4" onPress={() => {
      setSelected(true)
      setQuantity(1)
    }} >
      <View className="flex-row space-x-2 items-center">
        <View className="flex-1">
          <Text className="font-semibold text-xl mb-2">{title}</Text>
          <Text numberOfLines={3} className="text-gray-500 mb-2 text-justify">{description}</Text>
          <Text className="font-semibold">₹ {price}</Text>
        </View>
        <View>
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-20 w-20 bg-gray-300 rounded-full"
          />
        </View>
      </View>
      {
        selected && (<View className="flex-row space-x-2 items-center mt-3">
          <TouchableOpacity onPress={() => {
            if (quantity > 0) setQuantity(quantity - 1)

            if (quantity <= 1) {
              setQuantity(0)
              setSelected(false)
            }
          }}><MinusCircleIcon size={30} /></TouchableOpacity>
          <Text>{quantity}</Text>
          <TouchableOpacity onPress={() => {
            setQuantity(quantity + 1)
          }}><PlusCircleIcon size={30} /></TouchableOpacity>
        </View>)
      }
    </TouchableOpacity>
  )
}

export default DishCard