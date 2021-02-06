import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img
          className='home_image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />
        <div className='home_row'>
          <Product
            id='1'
            title='A Promised Land'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._AC_SX184_.jpg'
            rating={5}
          />
          <Product
            id='2'
            title='A Promised LaKindle Paperwhite – Now Waterproof with 2x the Storage - 8 GB '
            price={149.99}
            image='https://m.media-amazon.com/images/I/51fExaOBCfL._AC_UY327_FMwebp_QL65_.jpg'
            rating={4}
          />
          <Product
            id='3'
            title='If You Tell'
            price={19.99}
            image='https://m.media-amazon.com/images/I/410K-S--pmL.jpg'
            rating={4}
          />
        </div>
        <div className='home_row'>
          <Product
            id='5'
            title='Wyze Cam 1080p HD Indoor WiFi Smart Home Camera with Night Vision'
            price={24.99}
            image='https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY327_FMwebp_QL65_.jpg'
            rating={5}
          />
          <Product
            id='6'
            title='Zeskit 8K Ultra HD High Speed 48Gpbs HDMI Cable'
            price={19.99}
            image='https://m.media-amazon.com/images/I/71n8Pdm-HkL._AC_UY327_FMwebp_QL65_.jpg'
            rating={5}
          />
          <Product
            id='7'
            title='GoPro HERO7 Black'
            price={229.99}
            image='https://m.media-amazon.com/images/I/61ZUZcb0YiL._AC_UY327_FMwebp_QL65_.jpg'
            rating={3}
          />
        </div>
        <div className='home_row'>
          <Product
            id='8'
            title='Eyoyo 1D Wireless Ring Barcode Scanner, Compatible with Bluetooth Function'
            price={74.99}
            image='https://m.media-amazon.com/images/I/61SRIE8sTgL._AC_UY327_FMwebp_QL65_.jpg'
            rating={4}
          />
          <Product
            id='9'
            title='Book Couch iPad Tablet Holder Novelty eReader Rest Sofa Pillow Stand Gift Idea'
            price={24.99}
            image='https://m.media-amazon.com/images/I/61hKIWnhX7L._AC_UY327_FMwebp_QL65_.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
