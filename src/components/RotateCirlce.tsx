
import React, { memo, useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Easing,
} from 'react-native';
const R = 100 ;
const RS = 15;
const coordC = {
    x:R,
    y:R
}

const {width, height}= Dimensions.get("window")
function degToRad(deg:number) {
    return deg * Math.PI / 180;
  }
export default memo(function(){
    const degAlpha = useRef(new Animated.Value(0)).current;
    const [isBlink, setBlink] = useState(false)
    const coord =  useRef(new Animated.ValueXY(
        {
          x:R * Math.cos(degToRad(0)) + coordC.x -RS +50,
          y:R * Math.sin(degToRad(0)) + coordC.y -RS +50
        
        })).current;
    useEffect(()=>{
        
          degAlpha.addListener(res=>{
              console.log(res.value);
              coord.setValue({
                  x : R * Math.cos(degToRad(res.value)) + coordC.x -RS +50,
                  y: R * Math.sin(degToRad(res.value)) + coordC.y -RS +50
              })
          })

        //   setInterval(()=>{
              
        //    setBlink(!isBlink)
        //   },500)
        
    });
    // const x = degAlpha.interpolate({
    //     inputRange:[0,360],
    //     outputRange:[R * Math.cos(degToRad(0)) + coordC.x -RS +50,R * Math.cos(degToRad(360)) + coordC.x -RS +50]
    // })

    // const y = degAlpha.interpolate({
    //     inputRange:[0,360],
    //     outputRange:[R * Math.sin(degToRad(0)) + coordC.y -RS +50,R * Math.sin(degToRad(360)) + coordC.y -RS +50]
    // })
    // const coordS ={
    //     x: R * Math.cos(degToRad(0)) + coordC.x -RS +50,
    //     y: R * Math.sin(degToRad(0)) + coordC.y -RS +50,
    // }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{backgroundColor:"#f7e6e6", flex:1,
      borderTopWidth:1,
      borderLeftWidth:1,
      borderRightColor:"black",
        transform:[
            {translateX: 50,
            },
            {translateY: 50,
            }
        ]
     }} >
          <Animated.View style={{width:2*R, height:2*R, borderWidth:2, borderColor:"black", borderRadius:R, position:"absolute", justifyContent:"center"}} >
              <View style={{width:10, height:10, borderRadius:5, backgroundColor:"black", alignSelf:"center"}} />


          </Animated.View>
          <Text style ={{position:"absolute", top: -30,left:-20, fontWeight:"bold", fontSize:20}}>O<Text style={{fontWeight:"normal", fontStyle:"italic", fontSize:12}}>(0;0)</Text></Text>
          <Text style ={{position:"absolute", top: -25,left:250, fontWeight:"bold"}}>x</Text>
          <Text style ={{position:"absolute", top: width,left:-25, fontWeight:"bold"}}>y</Text>
          <Text style ={{position:"absolute", top: width,left:100, fontWeight:"bold", fontSize:18, color:isBlink?"#000":"blue"}}>{"Vượng IT - Code Dạo\nLập trình mobile app 😍"}</Text>
      </View>
 
      <Animated.View style={{width:2*RS, height:2*RS, borderRadius:RS, backgroundColor:"red", position:"absolute",
        transform:[
            {
                translateX:coord.x
            },
            {   
                translateY:coord.y

            }
        ]
    }} >

    <TouchableOpacity style={{flex:1}} onPress={()=>{
        //degAlpha.setValue(0);
        Animated.loop( Animated.timing(degAlpha, {
            toValue: 360,
            duration: 5000,
            useNativeDriver:true,
            easing: Easing.linear,
          })
).start()
       
    }}>
        
    </TouchableOpacity>
    </Animated.View>
    </>


  );
})


