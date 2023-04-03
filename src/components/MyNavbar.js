import React,{useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as Icon from 'react-bootstrap-icons';
import styles from '../styles/style.module.css';
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../context/CartContextProvider';
import { Link } from 'react-router-dom';

const MyNavbar = () => {

    const {state} = useContext(CartContext);

  return (
        <Navbar collapseOnSelect className={styles.myblue} expand="lg">
            <Container fluid>
                <Navbar.Brand className={`${styles.KnewaveFont} text-light`}>Eshop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Link className="me-auto text-light fw-bold fs-5" to="/"><Icon.HouseDoorFill/></Link>
                    <Link className="me-3 text-light fw-bold fs-5" to="/allproducts">Products</Link>
                    <Nav>
                        <Link to="/cart" className="text-light fw-bold fs-4">
                            <Badge className='fs-6' pill bg="danger">{state.itemsCounter > 0 && state.itemsCounter}</Badge>
                            <Icon.CartFill/>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
  )
}

export default MyNavbar;