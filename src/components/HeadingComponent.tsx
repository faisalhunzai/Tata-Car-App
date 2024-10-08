import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface Iprops{
    title:String,
    onPress?:()=> void,
    buttonShow?:boolean
}

const HeadingComponent:React.FC<Iprops> = ({title,onPress,buttonShow=false}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:21,fontWeight:"500",lineHeight:24,color:"#000"}}>{title}</Text>
    { buttonShow ? <TouchableOpacity onPress={onPress}>
        <Text style={{
            color:"#95949B"
        }}>
            See All
        </Text>
      </TouchableOpacity>:null}
    </View>
  )
}

export default HeadingComponent

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})