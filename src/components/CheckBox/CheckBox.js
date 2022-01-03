import React, { useState } from 'react'

export default function CheckBox(props) {

    return (
        <input type="checkbox"  onClick={() => {
            if(props.checked){
                props.unSelected()
            } else {
                props.Selected()
            }
        }} />
    )
}
