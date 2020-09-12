import React , {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { listProducts } from '../actions/productActions';
function HomeScreen(props) {

const productList = useSelector(state => state.productList);
const {products, loading, error} = productList;
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(listProducts());
    return()=>{
        //
    };
},[])
    return    loading?  <div>Loading</div>:   
    error?  <div>{error}</div>   :       
    <ul className="products">
    {
        products.map(product =>
            <li key={product.id}>
            <div className="product">
            <Link to={'/product/' + product.id}>
            <img className='productImage'src={product.image} alt="luffy"/>
               </Link>
                <div className="productName">
                <Link to={'/product/' + product.id}>
               {product.name}
               </Link>
                </div>
                <div className="productBrand">{product.minidesc}</div>
                <div className="productPrice">{product.price}</div>
                <div className="productRating">{product.rating} stars </div>
            </div>
        </li>
        )
    }

    </ul>
}

export default HomeScreen;