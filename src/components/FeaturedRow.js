import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({
  title,
  description,
}) => {
  return (
    <View className=" mt-4 p-1 mx-2">
      <View className="flex-row justify-between">
        <Text className="font-bold text-lg">
          {title}

        </Text>
        <ArrowRightIcon size={30} />

      </View>
      <Text className="text-sm text-gray-500">
        {description}
      </Text>


      <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10
        }}
        className="pt-4">
        {/* restaurant card */}
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/wru"}
          title={"sushi"}
          rating={2.5}
          description={"Great place for shushi"}
          dishes={[]}
          address={"ghfhf hghg hgj "}
          genre={"Japanese"}
          lat={1.3434}
          long={45.6565}

        />
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/wru"}
          title={"sushi"}
          rating={2.5}
          description={"Great place for shushi"}
          dishes={[]}
          address={"ghfhf hghg hgj "}
          genre={"Japanese"}
          lat={1.3434}
          long={45.6565}

        />
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/wru"}
          title={"sushi"}
          rating={2.5}
          description={"Great place for shushi"}
          dishes={[]}
          address={"ghfhf hghg hgj "}
          genre={"Japanese"}
          lat={1.3434}
          long={45.6565}

        />
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/wru"}
          title={"sushi"}
          rating={2.5}
          description={"Great place for shushi"}
          dishes={[]}
          address={"ghfhf hghg hgj "}
          genre={"Japanese"}
          lat={1.3434}
          long={45.6565}

        />
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/wru"}
          title={"sushi"}
          rating={2.5}
          description={"Great place for shushi"}
          dishes={[]}
          address={"ghfhf hghg hgj "}
          genre={"Japanese"}
          lat={1.3434}
          long={45.6565}

        />
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/wru"}
          title={"sushi"}
          rating={2.5}
          description={"Great place for shushi"}
          dishes={[]}
          address={"ghfhf hghg hgj "}
          genre={"Japanese"}
          lat={1.3434}
          long={45.6565}

        />
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/wru"}
          title={"sushi"}
          rating={2.5}
          description={"Great place for shushi"}
          dishes={[]}
          address={"ghfhf hghg hgj "}
          genre={"Japanese"}
          lat={1.3434}
          long={45.6565}

        />
        <RestaurantCard
          id={1}
          imgUrl={"https://links.papareact.com/wru"}
          title={"sushi"}
          rating={2.5}
          description={"Great place for shushi"}
          dishes={[]}
          address={"ghfhf hghg hgj "}
          genre={"Japanese"}
          lat={1.3434}
          long={45.6565}

        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow