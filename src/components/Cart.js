import React from 'react';
import { Button, Col, Container,Image,Row } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import styles from '../styles/style.module.css';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { isInCart,quantityCount,shortTitle } from '../helper/function';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increase, decrease, clear,checkout } from '../rdux/cart/cartAction';
const Cart = () => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    const clearCart = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, empty cart!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(clear());
              Swal.fire(
                'Clear!',
                'Your cart has been empty.',
                'success'
              )
            }
          })

    }
    const cartCheckout = () => {
        dispatch(checkout())
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Checked out successfully',
            showConfirmButton: false,
            timer: 3500
          })

    }
  return (
    <>
        <MyNavbar />
        <Container className={`${styles.darkBg} ${styles.minH}`}>
            <Row>
                <Col md={9}>
                    <ListGroup className='mt-5' as="ol">
                        {state.selectedItems.length === 0 && <h2 className='text-light text-center fw-bold'>Your cart is empty</h2>}
                        {
                        state.selectedItems.map((item) =>{
                            return(
                                <ListGroup.Item
                                    key={item.id}
                                    as="li"
                                    className="d-flex justify-content-between align-items-start">
                                    <Image className={styles.cartImg} src={item.image} alt='product' />
                                    <div className="ms-2 me-auto">
                                    <div className="fw-bold">{shortTitle(item.title)}</div>
                                     <span className='text-success'>$ {item.price}</span> 
                                    </div>
                                    <div className="ms-2 me-2 align-self-center">
                                    { isInCart(state,item.id) &&
                                    <Button onClick={() => dispatch(increase(item))} variant='primary'  className='me-1'>+</Button>
                                    }
                                    {quantityCount(state,item.id) > 1 && <Button  onClick={() => dispatch(decrease(item))} variant='danger ms-1'><Icon.Dash className='ms-1'/></Button>}
                                    {quantityCount(state,item.id) === 1 && <Button onClick={() => dispatch(removeItem(item))} variant='danger ms-1'><Icon.Trash className='ms-1'/></Button>}
                                    </div>
                                    <Badge bg="primary" pill>
                                    {item.quantity}
                                    </Badge>
                                </ListGroup.Item>
                                )
                            }) 
                        }
                    </ListGroup>
                </Col>
                <Col md={3} className='mt-5'>
                    <Row className='bg-light p-2 rounded-2'>
                        <p className='text-primary fw-bold mt-3'>Total items : {state.itemsCounter} </p>
                        <p className='text-primary fw-bold'>Total Payments : {state.total} $ </p>
                        <ButtonGroup className='mt-3' size="sm">
                            <Button onClick={cartCheckout} variant='success'>Checkout</Button>
                            <Button onClick={clearCart} variant='danger'>Clear</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Footer />
    </>
    
  )
}

export default Cart;