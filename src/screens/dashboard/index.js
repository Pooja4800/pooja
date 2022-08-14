import React from 'react';
import './index.css'

export function Pooja(props) {
    
    return (
        <div className='container'>
            <div style={{borderRadius: 10,backgroundcolour: 'blue', width: 100,alignItems: 'center',height: 50 ,justifyContent:'center'}}>
                <p style={{alignContent:'center',color:'blue'}}>{props.name}</p>
            </div>
        </div>      
    )
}