import React from 'react';
import './index.css'
export function Dashboard(props){
    const showAlert = () => {
        alert ("Button Clicked")
     }
     return (
        <div className='container' onclock={showAlert}>
            <div style={{boarderRadius:10, backgroundColor:'red', width:100,alignments:'center',height:50, justifyContent:'center'}}>
                <p style= {{alignContent:'center', color:'white',}}>{props.name}</p>
            </div>
        </div>
     )
}