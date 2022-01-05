import React, { useState } from 'react'
import "./CheckBox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function CheckBox(props) {
    const [checkedBox, setCheckedBox] = useState(false)
    return (
        // <input type="checkbox" 
        //     className='checkbox' 
        //     onClick={() => {
        //         // if(props.checked){
        //         //     props.unSelected()
        //         // } else {
        //         //     props.Selected()
        //         // }
        //         // setCheckedBox(!checkedBox)
        //     }} 
        // />
        checkedBox ? 
            <div className='checkbox' onClick={() => {
                setCheckedBox(false)
                props.unSelected()
            }}>
                <FontAwesomeIcon icon={faCheck} className='d-flex align-items-center'/>
            </div>
        : 
            <div className='checkbox' onClick={() => {
                setCheckedBox(true)
                props.selected()
            }}></div>
    )
}
