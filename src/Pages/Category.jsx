import React from 'react'
import productData from '../Data/productData'
import { Link, useParams } from 'react-router-dom'

function Category() {
    let {cid}=useParams()
    var cat=productData.filter((a)=>(a.category==cid))
  return (
    <div className='container'>
        <h3>Category</h3>
        <div className="row">
            {cat.map((a)=>(   <div className="col-3">
             <span className="text-center text-light lh-1">
               <small>Save</small>
               <h5>25%</h5>
             </span>
             <img width={200}  height={200} src={a.image} alt />
             <p>{a.title}</p>
             <p className="text-danger">रु,1199 <del className="text-muted">1599</del> </p>
             <Link to={`/details/${a.id}`} className="btn btn-primary text-uppercase rounded-pill">Add to Cart</Link>
           </div>))}
     
        </div>

    </div>
  )
}

export default Category