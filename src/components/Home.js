import React, {useEffect, useState } from 'react';
import MyNavbar from './MyNavbar';
import Newest from './Newest';
import Slider from './Slider';
import Popular from './Popular';
import Footer from './Footer';
import Loading from './Loading';
import { fetchProducts } from '../rdux/products/productsAtion';
import { useSelector, useDispatch } from 'react-redux';
const Home = () => {

  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts());
        if(!productsState.loading){
          setShow(false);
        }
    }, [])

  return (
    <> 
        {show ? <Loading /> :
        <>
        <MyNavbar />
        <Slider/>
        <Newest />
        <Popular />
        <Footer />
        </>
       }
    </>
  )
}

export default Home;