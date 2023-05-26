import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import style from '../constants/style';
import { AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/outline"
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = ({ navigation }) => {


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  })
  return (
    <SafeAreaView style={style.androidSafeArea} className="bg-white pt-5">
      <View className="flex-row pb-3 mx-4 items-center space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru"
          }}
          className="h-7 w-7 m-2 p-4 rounded-full bg-gray-200"
        />
        <View className="justify-center flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location <ChevronDownIcon size={20} /></Text>
        </View>
        <UserIcon size={35} />
      </View>
      {/* search input */}
      <View className="flex-row pb-2 mx-2 space-x-2 items-center">
        <View className="flex-row bg-gray-200 flex-1 p-2 space-x-2">
          <MagnifyingGlassIcon color={"#ccc"} size={20} />
          <TextInput placeholder="Restaurants..." />
        </View>
        <AdjustmentsVerticalIcon className="h-full"
        />
      </View>
      {/* body */}
      <ScrollView>
        {/* categories */}
        <Categories />
        {/* featured row */}
        <FeaturedRow
          title="Row 1"
          description="this is a very nice place to eat your hearts out amigos code"
        />
        <FeaturedRow
          title="Row 1"
          description="this is a very nice place to eat your hearts out amigos code"
        />
        <FeaturedRow
          title="Row 1"
          description="this is a very nice place to eat your hearts out amigos code"
        />
        <FeaturedRow
          title="Row 1"
          description="this is a very nice place to eat your hearts out amigos code"
        />

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen