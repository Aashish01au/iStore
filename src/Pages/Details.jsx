import React from 'react'
import { useParams } from 'react-router-dom'
import productData from '../Data/productData'
 

function Details() {
    let {did}=useParams()
   let qq=productData.find((a)=>a.id==did)
  return (
    <div className='container'>
    <h4>Details {did}</h4>
    <div className="row">
        <div className="col-4">
            <img className='w-100' src={qq.image} alt="" />
        </div>
        <div className="col-8">
        <h2>{qq.title}</h2>
        <p>{qq.description}</p>
        </div>
    </div>
    </div>
  )
}

export default Details