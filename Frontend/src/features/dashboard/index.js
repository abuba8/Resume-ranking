import React, {useEffect, useState } from 'react'

import {View, Text, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native'
const {height, width} = Dimensions.get('screen')

import DocumentPicker from 'react-native-document-picker';

import {sendResumeAction} from '../../actions/userAction'

import AddIcon from 'react-native-vector-icons/Ionicons'

import {Styles} from './styles'

import Details from './screens'

const dashboard = () => {
  const [formSubmitEnabled, setFormSubmitEnabled] = useState(true);

  const [data, setData] = useState('')
  
  const [ML, setML] = useState(false)
  const [DL, setDL] = useState(false)
  const [DE, setDE] = useState(false)
  const [Python, setMPython] = useState(false)
  const [NLP, setNLP] = useState(false)
  const [Stats, setStats] = useState(false)
  const [Total, setTotal] = useState(true)

  let flatData


  let sortable1, sortable2, sortable3, sortable4, sortable5, sortable6, sortable7

  const fileSelector = () => {
    setFormSubmitEnabled(false)
    DocumentPicker.pick({type: [DocumentPicker.types.zip],}).then(res => {
      sendResumeAction(res).then(res => {
        console.log('res', res.data)
        setData(res)
        setFormSubmitEnabled(true)
      })
    }).catch(err => {
      console.log('Failed', err)
      setFormSubmitEnabled(true)
    })
    setFormSubmitEnabled(true)
  }

  const renderItem = ({item}) => {
    console.log('Sort', item)
    return(
      <View style={Styles.card} onPress={() => {setChangePage(true)
        setName(item[0])}}>
        <View style={Styles.v1}>
          <Text style={Styles.txt1}>{item[0]}</Text>
          <Text style={Styles.txt2}>{item[1]}</Text>
        </View>  
      </View>
    )
  }


  const sorting = () => {
    if (data){
      console.log('How', data)
     
      sortable1 = Object.entries(data.data.Total).sort((a,b) => b[1]-a[1]) 
      sortable2 = Object.entries(data.data.DL).sort((a,b) => b[1]-a[1])
      sortable3 = Object.entries(data.data.DE).sort((a,b) => b[1]-a[1])
      sortable4 = Object.entries(data.data.ML).sort((a,b) => b[1]-a[1])
      sortable5 = Object.entries(data.data.Python).sort((a,b) => b[1]-a[1])
      sortable6 = Object.entries(data.data.Stats).sort((a,b) => b[1]-a[1])
      sortable7 = Object.entries(data.data.NLP).sort((a,b) => b[1]-a[1])

      if (DL){
        flatData= sortable2
      }
      if (DE){
        flatData = sortable3
      }
      if (ML){
        flatData = sortable4
      }
      if (Python){
        flatData = sortable5
      }
      if (Stats){
        flatData = sortable6
      }
      if (NLP){
        flatData = sortable7
      }
      if (Total){
        flatData = sortable1
      }

      console.log('check now', data)
    }  
  }

  return (
    <SafeAreaView style={{backgroundColor: '#f2f2f2'}}>
      <ActivityIndicator size="large" color="#F77436" animating={!formSubmitEnabled} style={{ height: formSubmitEnabled ? 0 :height, width: formSubmitEnabled ? 0 : width, position: 'absolute', zIndex: 1, backgroundColor: 'black', opacity: 0.7 }} />
        <View style={{marginTop: 20 , backgroundColor: '#f2f2f2'}}>
          
        <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} style={Styles.v}>
          <View style={Styles.vsub1}>

          <TouchableOpacity style={Styles.vsub1Card} onPress={() => {setDE(false)
              setDL(false) 
              setML(true)
              setMPython(false)
              setStats(false)
              setTotal(false)
              setNLP(false)}}
              >
              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>Total</Text>
            </TouchableOpacity>


            <TouchableOpacity style={Styles.vsub1Card} onPress={() => {setDE(false)
              setDL(false) 
              setML(true)
              setMPython(false)
              setStats(false)
              setTotal(false)
              setNLP(false)}}
              >
              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>Machine Learning</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.vsub1Card} onPress={() => {setDE(false)
              setDL(false) 
              setML(false)
              setMPython(true)
              setStats(false)
              setTotal(false)
              setNLP(false)}}>

              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>Python</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.vsub1Card} onPress={() => {setDE(false)
              setDL(false) 
              setML(false)
              setMPython(false)
              setStats(false)
              setTotal(false)
              setNLP(true)}}>

              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>Natural Language processing</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.vsub1Card} onPress={() => {setDE(false)
              setDL(true) 
              setML(false)
              setMPython(false)
              setStats(false)
              setTotal(false)
              setNLP(false)}}>

              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>Deep Learning</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.vsub1Card} onPress={() => {setDE(true)
              setDL(false) 
              setML(false)
              setMPython(false)
              setStats(false)
              setTotal(false)
              setNLP(false)}}>

              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>Data Engineering</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.vsub1Card} onPress={() => {setDE(false)
              setDL(false) 
              setML(false)
              setMPython(false)
              setStats(true)
              setTotal(false)
              setNLP(false)}}>

              <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>Statistics</Text>
            </TouchableOpacity>


          </View>
        </ScrollView>

        <ScrollView style={[Styles.container, {height: height/1.4, backgroundColor: '#f2f2f2'}]}>
          <View>
            {sorting()}
            <FlatList
              data={flatData}
              renderItem={renderItem}
            />
          </View>
        </ScrollView>


          <View style={Styles.v2}> 
            
          </View>
            <TouchableOpacity style={Styles.addBtnView} onPress={() => fileSelector()}>
              <AddIcon name='add-circle-sharp' style={Styles.addBtn}/>
            </TouchableOpacity>
         
        </View>
        
    </SafeAreaView>
  )
}

export default dashboard

