import React from 'react';
import Navbar from "../app/components/Navbar"
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import ProductList from './components/ProductList';
import Banner from './components/Banner';
import Offer from './components/Offer';
import Card from './components/Card';
import Footer from './components/Footer';
import Flavours from './components/Flavours';
import FlavourCartGrid from './components/FlavourCartGrid';
import OrderPlaced from './components/OrderPlaced';
import Menu from './components/Menuitems';

export default function App() {
  return (
    <div className='bg-gradient-to-r from-cyan-200 to-lime-400 min-h-screen'>
      <Navbar />
      <Carousel />
      <Progressor />
      <Flavours />
      <Banner />
      <ProductList />
      <FlavourCartGrid />
      <Menu />
      <Offer />
      <Card />
      <OrderPlaced />
      <Footer />
    </div>
  )
}
