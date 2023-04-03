import React,{useState,createContext, useEffect} from 'react';
import {getProducts} from '../api/ApiProducts';

export const ProductsContext = createContext();

const ContextProductsProvider = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const fetchApi = async () =>{
            setProducts(await getProducts());
        }
        fetchApi();
    },[]);
    return(
        <ProductsContext.Provider value ={products}>
            {props.children}
        </ProductsContext.Provider>
    );

}

export default ContextProductsProvider;