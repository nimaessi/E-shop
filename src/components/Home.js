import React, { useContext, useEffect, useState } from 'react';
import MyNavbar from './MyNavbar';
import Newest from './Newest';
import Slider from './Slider';
import Popular from './Popular';
import Footer from './Footer';
import { ProductsContext } from '../context/ContextProductsProvider';
import Loading from './Loading';

const Home = () => {

  const products = useContext(ProductsContext);
  const [show, setShow] = useState(true);
  useEffect(() =>{
    if(products.length > 19){
      setShow(false);
    }
  },[products])


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