import React from 'react'
import {Picker} from '@react-native-community/picker';

const SelectInput = ({items, value, select}) => {
    
    return (
        <Picker
        selectedValue={value}
        style={{height: 40, width:'100%'}}
        onValueChange={select}>
            {items.map((item,index)=>(
                <Picker.Item key={index}  label={item.name} value={item.name} />
            ))}
       
        
      </Picker>
    )
}

export default SelectInput
