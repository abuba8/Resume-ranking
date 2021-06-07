import React, {useEffect, useState } from 'react'

import {View, Text, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'
const {height, width} = Dimensions.get('screen')

import {Styles} from './styles'

const details = (props) => {

  console.log("props", props)
  console.log('Hell', props.data[0].data.DE)

  const checking = () => {
    
  }

  return(
      <View >
        {chcking()}
        <Text>{props.name}</Text>
        <Text>{props.data[0].data.DE.name}</Text>
      </View>
  )
}

export default details