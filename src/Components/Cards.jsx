import React from 'react';
import { data } from './data';
import './Cards.css';

export default function Cards(){

    return (

      <div className='box'> {
            data.items.map((item,index)=>(
                <div key ={index}  className="item-box">
                    <img src={item.image} alt={item.name} className="item-image"/>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <pre>price: ${item.price}<strike>${1000}</strike></pre>


                </div>
                        
                    ))}

      </div>
    )
}
