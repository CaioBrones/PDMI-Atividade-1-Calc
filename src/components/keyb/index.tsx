import React from 'react';
import { View, Text,StyleSheet,Alert } from 'react-native';
import {Button} from '../Button'


type Props = {
  onKeyPress: (value: string | number) => void;
  onClear: ()=>void;
  onBackspace: ()=>void
};


const App = ({onKeyPress,onClear, onBackspace}:Props) => {
  const val = [1,2,3,4,5,6,7,8,9,0]
  const op = ["+","-","*","/"]

  return (
    
    <View style={styles.conteiner}>
  
      {val.map((val, index) => (
        <Button title={`${val}`}  onPress={()=> onKeyPress(val)}/>
      ))}

      {op.map((op, index) => (
        <Button title={`${op}`} onPress={()=> onKeyPress(op)} />
      ))}

      <Button title="Limpar" onPress={onClear} />
    </View>
  );
};

const styles = StyleSheet.create({
    conteiner:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        margin:20,
        gap:2,
    },
    button:{
      backgroundColor:"#1A1A1A",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:3,
      maxHeight:70,
      maxWidth:160,
      width:155,
      height:70
    }
})
export default App;
