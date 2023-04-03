import React, { useContext, useEffect, useState } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import style from '../styles/style.module.css';
import Footer from './Footer';
import MyNavbar from './MyNavbar';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../context/CartContextProvider';
import { isInCart,quantityCount } from '../helper/function';

const initialState ={
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
    rate: 0,
    count: 0
    }}

const Product = () => {

    const params = useParams();
    const [product,setProduct] = useState(initialState);
    const {state,dispatch} = useContext(CartContext); 
    const totalStars = 5;
    useEffect(() => {
        const fetchProduct = async () =>{
            const response = await axios.get(`/products/${params.id}`);
            setProduct(response.data);
        }
        fetchProduct();
    },[params])
        const {id,title,price,description,image,category,rating} = product;    
  return (
    <>
    <MyNavbar />
    <Container className={style.darkBg}>
        <Row className='bg-light'>
            <Col md={4}>
                <Card className='mt-5'>
                    <Card.Img variant="top" className={`${style.productImg} mx-auto`} src ={image} alt='Product'/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        {product && 
                        [...new Array(totalStars)].map((arr, index) => {
                            return index < Math.round(rating.rate) ? <Icon.StarFill key={index} className='text-warning' /> : <Icon.Star key={index} />;
                        })
                        }
                        <p className='mt-3'>price : $ {price}</p>
                        <p>category : {category}</p>
                        { 
                        isInCart(state,id) ?
                        <Button onClick={() => dispatch({type:"INCREASE", payload : product})} variant='primary'><Icon.Plus className='ms-1'/></Button> :
                        <Button onClick={() => dispatch({type:"ADD_ITEM", payload: product})} variant='primary'>Add to cart<Icon.Cart className='ms-1'/></Button>
                        }
                        {quantityCount(state,id) > 0 && <span className='mx-2'>{quantityCount(state,id)}</span>}
                        {quantityCount(state,id) > 1 && <Button  onClick={() => dispatch({type:"DECREASE",payload: product})} variant='danger ms-1'><Icon.Dash className='ms-1'/></Button>}
                        {quantityCount(state,id) === 1 && <Button onClick={() => dispatch({type:"REMOVE_ITEM",payload: product})} variant='danger ms-1'><Icon.Trash className='ms-1'/></Button>}
                    </Card.Body>
                </Card>
            </Col>
            <Col md={8} className='align-self-center'>
                <p className={`text-dark ${style.des} mt-5 w-75 mx-auto`}>{description}</p>
            </Col>
        </Row>
    </Container>
    <Footer />
    </>
  )
}

export default Product;