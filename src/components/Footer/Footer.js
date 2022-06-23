import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   
    <footer className="text-center text-lg-start bg-dark text-light ">
   
    
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row pt-5">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4" >
            <h6 className="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <Link to={''} className="text-reset">Angular</Link>
            </p>
            <p>
              <Link to={''} className="text-reset">React</Link>
            </p>
            <p>
              <Link to={''} className="text-reset">Vue</Link>
            </p>
            <p>
              <Link to={''} className="text-reset">Laravel</Link>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <Link to={''} className="text-reset">Pricing</Link>
            </p>
            <p>
              <Link to={''} className="text-reset">Settings</Link>
            </p>
            <p>
              <Link to={''} className="text-reset">Orders</Link>
            </p>
            <p>
              <Link to={''} className="text-reset">Help</Link>
            </p>
          </div>
          <div className="col-md-5 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Contact
            </h6>
            <p><i className="fas fa-home me-3"></i>Vieytes 1122, Moron</p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p><i class="fab fa-facebook-f me-3"></i> /distri</p>
            <p><i className="fab fa-1x fa-whatsapp me-3"></i>11 3365-1122</p>
          </div>
        </div>
      </div>
    </section>
  
    <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
      © 2021 Copyright:
      <Link className="text-reset fw-bold" to={""}>MDBootstrap.com</Link>
    </div>
  </footer>
   
  )
}


export default Footer