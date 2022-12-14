import React from 'react'
import logo from "../assets/Jumia-Logo-500x281.png";

const Carousel = () => {
  return (
    <div>
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" className=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6" className="active" aria-current="true"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item">
          <div className='d-flex bg-dark justify-content-center'>
          <img className='caroImg' src='https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/iphone-14-pro-camera-lenses.jpg' alt="" width={'50%'} height={'500'}/>
          </div>
        <div className="container">
          <div className="carousel-caption text-center">
             <h3>No disappointment.</h3>
            <p>We deliver your products to you at the appointed time, no delay.</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
         <div className='d-flex bg-dark justify-content-center'>
          <img className='caroImg' src='https://hips.hearstapps.com/esq.h-cdn.co/assets/16/07/1455575580-apex.jpg?resize=1200:*' alt="" width={'50%'} height={'500'}/>
          </div>

        <div className="container">
          <div className="carousel-caption">
           
            <h3>A trial will convince you.</h3>
            <p>No regret shopping with us.</p>
          </div>
        </div>
      </div>

       <div className="carousel-item">
       <div className='d-flex bg-dark justify-content-center'>
          <img className='caroImg' src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_14_pro_hands_on_first_impressions.jpg' alt="" width={'50%'} height={'500'}/>
          </div>

        <div className="container">
          <div className="carousel-caption">
            <h3>We focus on your interest.</h3>
            <p>Your convenience is our priority.</p>
          </div>
        </div>
      </div>

       <div className="carousel-item">
        <div className='d-flex bg-dark justify-content-center'>
          <img className='caroImg' src='https://e1.pxfuel.com/desktop-wallpaper/885/331/desktop-wallpaper-man-in-suit-local-feature-51686-suit-in-man.jpg' alt="" width={'50%'} height={'500'}/>
          </div>
        

        <div className="container">
          <div className="carousel-caption">
            <h3>The best shopping platform.</h3>
            <p>We deliver quality products across Nigeria.</p>
          </div>
        </div>
      </div>

       <div className="carousel-item">
        <div className='d-flex bg-dark justify-content-center'>
          <img className='caroImg' src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80' alt="" width={'50%'} height={'500'}/>
          </div>
        
        <div className="container">
          <div className="carousel-caption">
            <h3>We're at your service.</h3>
            <p>Make hey while the sun shines.</p>
          </div>
        </div>
      </div>

      <div className="carousel-item active">
        <div className='d-flex bg-dark justify-content-center'>
          <img className='caroImg' src='https://m.media-amazon.com/images/I/81u7aV54K5L._SL1500_.jpg' alt="" width={'50%'} height={'500'}/>
          </div>

        <div className="container">
          <div className="carousel-caption">
            <h3>You're welcome to a renown shopping platform.</h3>
            <p>We appreciate all our customers.</p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}

export default Carousel