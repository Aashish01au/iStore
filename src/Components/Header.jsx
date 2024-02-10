import React from 'react'
import { Route, Routes ,Link} from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import Details from '../Pages/Details'

function Header() {
  return (
    <>

  <section className="border-bottom py-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="icons">
            <a href="#"><i className="bi bi-instagram" /></a>
            <a href="#"><i className="bi bi-facebook" /></a>
            <a href="#"><i className="bi bi-whatsapp" /></a>
            <a href="#"><i className="bi bi-skype" /></a>
            <a href="#"><i className="bi bi-youtube" /></a>
          </div>
        </div>
        <div className="col-lg-6 text-lg-end seller">
          Simply Better Shopping !!
          <a href="#">Gift certificates</a>
          <a href="#">Become a Seller</a>
        </div>
      </div>
    </div>
  </section>
  <header className="py-3 sticky-top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3">
            <Link to="/">
          <img src="https://istore.com.np/images/logos/3/1n_e1de-v3.jpg" alt="Logo" /></Link>
        </div>
        <div className="col-lg-3">
          <a href="tel:014784697" title><span className="text-muted"> +977 </span> 014784697</a>
          <a href="tel:9851061460" title><span className="text-muted"> +977 </span> 9851061460</a>
          <p><a href="#" className="call text-center"> Request call </a><a href="#" className="call text-center"> Contact us </a></p>
        </div>
        <div className="col-lg-4">
          <form className="d-flex" role="search">
            <input className="form-control me-2 rounded-pill" type="search" placeholder="SEARCH PRODUCTS" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"><i className="bi bi-search" /></button>
          </form></div>
        <div className="col-lg-2">
          <button type="button" className="btn position-relative">
            <i className="bi bi-cart4" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0+
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <i className="bi bi-suit-heart" />
          <i className="bi bi-person-circle" />
        </div>
      </div>
    </div>
  </header>
  <nav className="navbar navbar-expand-lg bg-light navbar-dark py-0">
    <div className="container">
      <a className="navbar-brand bg-dark text-light px-5" href="#"> <i className="bi bi-list" /> category</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Sale</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Newest</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Brands</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> <i className="bi bi-bookmark" /> Store blog</a>
          </li>
          <li className="nav-item rightborder">
            <a className="nav-link" href="#"> <i className="bi bi-fire" /> Active promo-actions</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/category/:cid' element={<Category/>}></Route>
    <Route path='/details/:did' element={<Details/>}></Route>
</Routes>
    </>
  )
}

export default Header