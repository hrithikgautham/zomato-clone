import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 10,
        paddingHorizontal: 10,
      }}>
      {/* category card */}
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="test card" />
    </ScrollView>
  )
}

export default Categories