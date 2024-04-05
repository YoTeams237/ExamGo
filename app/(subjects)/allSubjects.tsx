import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import OLevelSubjects from '../../components/Olevel ARTS/OLevelSubjects'

export default function allSubjects() {
  return (
   <ScrollView>
    <OLevelSubjects/>
   </ScrollView>
  )
}