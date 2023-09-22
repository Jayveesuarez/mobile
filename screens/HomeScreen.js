import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AdjustmentsHorizontalIcon, Bars3CenterLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/solid'
import { categories, foodItems } from '../constants'
import * as Animatable from 'react-native-animatable';
import FoodCard from '../components/FoodCard';
import Dashboard from './Dashboard'



export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('Sparkling Homes');
  return (
    
    <View className="flex-1 relative">
      <Image source={require('../assets/images/bg1.jpg')} className="absolute w-full h-full" />
      <SafeAreaView className="flex-1">
        {/* top buttons */}
        
        {/* punch line */}
        <View className="my-12 space-y-2">
          <Text className="mx-4 text-5xl font-medium text-gray-800">Sparkling</Text>
          <Text className="mx-4 text-5xl font-medium text-gray-800">
            <Text className="font-extrabold">Homes</Text> 
          </Text>
        </View>
        <View className="my-1 space-y-1">
          <Text className="mx-4 text-2xl font-small text-gray-800">"Bringing the Glamour to Your Living Spaces!✨"</Text>
        </View>
       
        {/* categories scrollbar */}
        <ScrollView
          className="mt-6 pt-6 max-h-20"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}
        >
          {
            categories.map((category, index)=>{
              let isActive = category == activeCategory;
              let textClass = isActive? ' font-bold': '';
              return (
                <Animatable.View
                  delay={index*120} // delay for each item
                  animation="slideInDown" // animation type
                  key={index}>
                      <TouchableOpacity
                        className="mr-9"
                        onPress={()=> setActiveCategory(category)}
                      >
                        <Text className={"text-white text-base tracking-widest "+textClass}>
                          {category}
                        </Text>
                        {
                          isActive? (
                            <View className="flex-row justify-center">
                              <Image source={require('../assets/images/line.png')} 
                                className="h-4 w-5" />
                            </View>
                          ):null
                        }
                      </TouchableOpacity>
                  </Animatable.View>
              )
            })
          }
        </ScrollView>
        {/* food cards */}
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 20}}
          horizontal showsHorizontalScrollIndicator={false}
        >
          {
            foodItems.map((item, index)=> <FoodCard item={item} index={index} key={index} />)
          }
        </ScrollView>
      </SafeAreaView>
    </View>
  )
  
}