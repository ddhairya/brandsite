import React from 'react'

export const SelectOption  = props => {
    const Items = props.arr
    return ( 
        Items.map((item,id) => <option key={id}  value={item.data}>{item.data}</option> )
    )    
}