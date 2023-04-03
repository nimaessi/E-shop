import React, { useContext} from 'react';
import { Container, Row } from 'react-bootstrap';
import style from '../styles/style.module.css';
import MyCard from './Card';
import {ProductsContext} from '../context/ContextProductsProvider';

const Newest = () => {
    const products = useContext(ProductsContext);
  return (
    <Container fluid className={`${style.darkBg}`}>
        <p className={`${style.KnewaveFont} fs-2 text-light border- border-bottom border-2 p-2 text-center`}>
            Newest clothes 2023
        </p>
        <Row className='d-flex justify-content-center'>
            {products && products.slice(1,5).map((product) => (<MyCard key={product.id} product ={product} />))}     
        </Row>
    </Container>
  )
}

export default Newest;