import React from "react";
import { Text } from "react-native-paper";

const Paciente = ({item})=>{
    const{paciente, fecha} =item
    return(
        <Text>{paciente}</Text>
    )
}

export default Paciente

//flatList

// El componente FlatList es un componente nativo de React Native 
// que se utiliza para mostrar una lista de elementos. 
// Es un componente flexible que se puede utilizar para mostrar una variedad de datos,
//  incluidos objetos, números, cadenas y más.
