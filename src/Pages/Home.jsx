import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import catData from '../Data/catData';
import productData from '../Data/productData';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    {/* ======================= Categories ======================== */}
  <div className="container">
  <div className="row">
    <div className="col-lg-3">
      <ul className="list-group">
        {catData.map((a)=>(
             <li className="list-group-item">
                <Link to={`/category/${a}`}>
                <i className="bi bi-phone" />{a}</Link></li>
        ))}
       
      </ul>
    </div>
    <div className="col-lg-9 py-2">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="./src/images/4.png" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="w-100" src="../src/images/4.png" alt="..." />
          </div>
          <div className="carousel-item">
            <img className="w-100" src="../src/images/4.png" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* ============================ Toadays Offer ============================= */}
<div className="container-fluid border-top border-danger border-3 py-4 my-4">
  <div className="row">
    <div className="col-lg-3">
      <h2 className="text-danger">ToDay's Offer </h2>
      <p> <a href="#">Promotion details</a> <br />
        To end of promotions remains: </p>
      <p> <a href="#">All promotions list</a> <i className="bi bi-arrow-right" /></p>
    </div>
    <div className="col-lg-9">
    <OwlCarousel className='owl-theme' loop margin={10} nav items={4}>
        {productData.map((a)=>(
             <div className="box">
             <span className="text-center text-light lh-1">
               <small>Save</small>
               <h5>25%</h5>
             </span>
             <img width={200} height={200} src={a.image} alt />
             <p>{a.title}</p>
             <p className="text-danger">रु,1199 <del className="text-muted">1599</del> </p>
             <a href="#" className="btn btn-primary text-uppercase rounded-pill">Add to Cart</a>
           </div>
        ))}
       </OwlCarousel>
    </div>
  </div>
</div>

    </>
  )
}

export default Home