import React from 'react'

function Footer() {
  return (
    <>
 <footer className="py-5 border-top">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <h5>Stay in touch </h5>
        <p className="text-uppercase text-muted">Subscribe to our news and get a 10% discount coupon!</p>
        <input type="email" className="form-control text-muted" aria-describedby="emailHelp" placeholder="Enter e-mail address" />
        <div className="icons py-4">
          <a href="#"><i className="bi bi-instagram" /></a>
          <a href="#"><i className="bi bi-facebook" /></a>
          <a href="#"><i className="bi bi-whatsapp" /></a>
          <a href="#"><i className="bi bi-skype" /></a>
          <a href="#"><i className="bi bi-youtube" /></a>
        </div>
      </div>
      <div className="col-lg-3">
        <h5>my account</h5>
        <ul>
          <li> <a href="#">Sign in</a></li>
          <li> <a href="#"> Create account</a></li>
          <li> <a href="#">Orders</a></li>
          <li> <a href="#">Wish list</a></li>
          <li> <a href="#">Comparison list</a></li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h5>Shop</h5>
        <ul>
          <li> <a href="#">About us</a></li>
          <li> <a href="#"> Blog</a></li>
          <li> <a href="#">FAQ</a></li>
          <li> <a href="#"> Reward points</a></li>
          <li> <a href="#">Gift certificates</a></li>
          <li> <a href="#">Sitemap</a></li>
        </ul>      
      </div>
      <div className="col-lg-3 abc">
        <h5>iStore Online</h5>
        <ul>
          <li> <a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>    
  <section className="btm py-0">
    <div className="container">
      <p>© 2015-2022 iStore Online.  Genuine n Quality Product — <a href="#">© iStoreOnline</a> </p>   
    </div>
  </section>      
</footer>

    </>
  )
}

export default Footer