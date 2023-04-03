import React, { useContext } from 'react';
import style from '../styles/style.module.css';
import { Container, Row } from 'react-bootstrap';
import MyCard from './Card';
import {ProductsContext} from '../context/ContextProductsProvider';

const  Popular = () => {

    const products = useContext(ProductsContext);

  return (
    <Container fluid className={`${style.darkBg}`}>
        <p className={`${style.KnewaveFont} fs-2 text-light border- border-bottom border-2 p-2 text-center`}>
            Popular items this season
        </p>
        <Row className='d-flex justify-content-center'>
            {products && products.slice(16,20).map((product) => <MyCard key={product.id}  product={product}/>)}
        </Row>
    </Container>
  )
}

export default Popular;