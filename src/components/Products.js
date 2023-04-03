import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';
import {Row} from 'react-bootstrap';
import style from '../styles/style.module.css';
import { ProductsContext } from '../context/ContextProductsProvider';
import { useNavigate } from 'react-router-dom';
import { shortTitle } from '../helper/function';
import MyNavbar from './MyNavbar';
import Footer from './Footer';

const Products = () => {
  
    const products = useContext(ProductsContext);
    const navigate = useNavigate();

  return (
    <>
    <MyNavbar />
    <Container className='d-flex flex-wrap'>
        {
            products.map((product) =>{
                return(
                    <Card key={product.id} onClick={() => navigate(`/products/${product.id}`)} className ={`p-1 ms-1 mb-4`} style={{ width: '15rem', cursor:'pointer' }}>
                        <Card.Img className={`${style.cardImg} mx-auto`} variant="top" src={product.image} />
                        <Card.Body>
                        <Card.Title className='fs-6 fw-bold text-dark text-center'>{shortTitle(product.title)}</Card.Title>
                        <p className='text-dark text-center'>$ {product.price} </p> 
                        <Row>
                            <Button size='sm' variant="primary">
                                Info <Icon.InfoCircleFill className='m-1'/>
                            </Button>
                        </Row>
                        </Card.Body>
                    </Card>
                )
            })
        }
    </Container>
    <Footer />
    </>
  )
}

export default Products;