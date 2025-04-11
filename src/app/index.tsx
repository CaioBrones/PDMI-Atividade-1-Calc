import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, } from "react-native"
import App from "../components/keyb"
import { Input } from "../components/Input"


export default function Index() {

  const [inputValue, setInputValue] = useState('');
  const [sum, setSum] = useState<Number>();


  const btnpress = (val: string | number) => {
    setInputValue(preview => preview + val); 
  };

  const clean = ()=>{
    setInputValue('');
  }
  const del = () => {
    setInputValue(preview => preview.slice(0, -1)); 
  };
  
  useEffect(() => {
  try {
    if (inputValue !== '') {
      const result = eval(inputValue);
      setSum(result);
    } else {
      setSum(undefined);
    }
  } catch (error) {
    setSum(undefined); 
  }
}, [inputValue]);



  return (
    <View style={styes.container}>
      <Input editable={true} value={inputValue} />
      <Input editable={false} style={styes.Input} value={sum !== undefined ? String(sum) : ''} />
      <App onKeyPress={btnpress} onClear={clean} onBackspace={del}/>
    </View>
  );
}


const styes = StyleSheet.create({
    title: {
        color: "#2B2B2B",
        fontSize: 20,
    },
    Input: {
        height: 75,
        borderTopWidth: 0,
        margin: 5,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 0,
        fontSize: 30,
        color:"#1a1a1a"
        
    },
    container: {
      width: "100%",
      justifyContent: "center",
      backgroundColor: "#FFFFFF"
  },
})