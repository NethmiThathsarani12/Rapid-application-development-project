import React from 'react'
import CategoryList from '../components/CategoryList'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <HorizontalCardProduct category={"earphones"} heading={"Top's Earphones"}/>
      <HorizontalCardProduct category={"mobiles"} heading={"Top's Mobiles"}/>

      <VerticalCardProduct category={"camera"} heading={"Camera"}/>
      <VerticalCardProduct category={"earphones"} heading={"Earphones"}/>
    </div>
  )
}

export default Home