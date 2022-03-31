import React from 'react'
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Product from '../components/Product';
import Promo from '../components/Promo';



const HomePage = () => {
    return (
        <>
        <Promo />
        <Navbar />
        <Carousel />
        <Categories />
        <Product />
        <Newsletter />
        <Footer />
        </>
    )
}

export default HomePage;