import axios from 'axios';

const getProducts = async () => {
    try{
        const response = await axios.get('/products')
        return response.data;
    } catch(error){
        return [{error : 'An error ocured'}];
    }
}

export {getProducts}