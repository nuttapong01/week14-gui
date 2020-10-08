import React from 'react'
import {View,Text,Image} from 'react-native'

const App=()=>{
  return(
    <View>
      <Image
        style={{width:'100%',height:150}}
        source={require('./images/11111.jpg')}
      />
       <Image
        style={{width:'100%',height:150}}
        source={require('./images/55555.jpg')}
      />
      <Image
        style={{width:'100%',height:150}}
        source={{uri:'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}
      />
    </View>
  )
}
export default App;