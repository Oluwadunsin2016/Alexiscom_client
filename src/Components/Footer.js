import { FaEnvelope, FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhoneSquare, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark'>
    <div className="container-fluid px-5 px-md-2 pt-2  text-white overflow-hidden">
        <div className="footer d-md-flex justify-content-around">
          <div className=" mt-5">
            <h4>Products Categories</h4>
             <p>Laptops</p>
            <p>Smart Phones</p>
            <p>Fragrances</p>
            <p>Skin Care</p>
            <p>Groceries</p>
            <p>Home Decorations</p>
          </div>

          <div className="mt-5">
            <h4>Quick Contact</h4>
            <p><a className='text-white' href="tel:+2348168225901"><FaPhoneSquare/> +234 8168225901</a></p>
            <p><a className='text-white' href="mailto:oluwadunsin2016@gmail.com"><FaEnvelope/> oluwadunsin2016@gmail.com</a></p>
            <p><FaHome/> SQI College of ICT, Opposite YOACO</p>
            <p className="city">Filling Station, Old Ilorin Road, Ogbomoso</p>
          </div>

          <div className=" mt-5">
            <h4 className='text-underlined'>Follow Us On</h4>
            <p><a className='text-white' href="https://www.facebook.com/sunday.stephen.3990"><FaFacebook/> Facebook</a></p>
            <p><a className='text-white' href="https://youtube.com/@oluwagbemigasundaystephen1738"><FaYoutube/> YouTube</a></p>
            <p><a className='text-white' href="http://www.linkedin.com/in/oluwagbemiga-stephen-oluwadunsin-2ba681227"><FaLinkedin/> LinkedIn</a></p>
            <p><a className='text-white' href="https://wa.me/2348168225901"><FaWhatsapp/> WhatsApp</a></p>
            <p><a className='text-white' href="https://twitter.com/Stephen93639861"><FaTwitter/> Twitter</a></p>
            <p><a className='text-white' href="https://www.instagram.com/Oluwadunsin2016/"><FaInstagram/> Instagram</a></p>
           
          </div>
        </div>
        <hr />
        <p className="copyright text-center text-muted">
          © 2022. All right reserved
        </p>
      </div>
    </div>
  )
}

export default Footer