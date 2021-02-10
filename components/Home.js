import React, { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Product from './Product'
import { productData } from '../public/data'

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.home_container}>
                <img
                    className={styles.home_image}
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=''
                />
                <div className={styles.home_row}>
                    {productData.row1.map((data, key) => (
                        <Product
                            key={data.id}
                            title={data.title}
                            price={data.price}
                            image={data.image}
                            rating={data.rating}
                        />
                    ))}
                </div>
                <div className={styles.home_row}>
                    {productData.row2.map((data, key) => (
                        <Product
                            key={data.id}
                            title={data.title}
                            price={data.price}
                            image={data.image}
                            rating={data.rating}
                        />
                    ))}
                </div>
                <div className={styles.home_row}>
                    {productData.row3.map((data, key) => (
                        <Product
                            key={data.id}
                            title={data.title}
                            price={data.price}
                            image={data.image}
                            rating={data.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
