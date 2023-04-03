import React from 'react';
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import styles from '../styles/style.module.css';
const Loading = () => {
  return (
    <Container className='d-flex align-items-center justify-content-center vh-100 overflow-hidden'>
        <Spinner className='me-3' animation="border" variant='danger' />
        <h1 className={`text-light ${styles.KnewaveFont}`}>Loading ... </h1>
    </Container>
  )
}

export default Loading;