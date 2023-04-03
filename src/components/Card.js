import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';
import style from '../styles/style.module.css';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyCard = ({product}) => {
    const {id,title,image} = product;
    var shortTitle = title.split(" ");
    const navigate = useNavigate();

    const infoProduct = (id) =>{
      navigate(`products/${id}`)
    }

  return (
    <Card onClick={() =>infoProduct(id)} className ={`p-2 ms-5 mb-4 ${style.bgDarklight}`} style={{ width: '15rem', cursor:'pointer' }}>
        <Card.Img className={`${style.cardImg} mx-auto`} variant="top" src={image} />
        <Card.Body>
        <Card.Title className='fs-6 fw-bold text-light text-center'>{`${shortTitle[0]} ${shortTitle[1]}`}</Card.Title>
        <Row>
            <Button size='sm' variant="primary">
                Info <Icon.InfoCircleFill className='m-1'/>
            </Button>
        </Row>
        </Card.Body>
    </Card>
  )
}

export default MyCard;