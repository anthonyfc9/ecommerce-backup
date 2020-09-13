import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import "./product.css"
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';


function ProductScreen(props) {
  const productDetails = useSelector(state => state.productDetails);
  const {product, loading, error} = productDetails;
  const dispatch = useDispatch();
useEffect(()=>{
    dispatch(detailsProduct(props.match.params.id));
    return()=>{
        //
    };
},[])
    
    return <div>
    <div  className="backToResults">
        <Link to='/'>Back to results</Link>
        {loading ? <div> loading...</div>:
        error? <div>{error}</div>:
        (
            
            <div className="details">
        <div className='detailsImage'>
        {console.log(product)}
            <img src={product.image} alt={product.name}/>
        </div>

        <div className='detailsFull'>
            <ul>
                <li>
                    <h4>{product.name}</h4>
                </li>
                <li>
                    {product.rating} stars
                </li>
                <li>
                    <b>$ {product.price}</b>
                </li>
                <li>
                   Description: {product.desc}
                </li>
            </ul>
        </div>
        <div className="detailsAction">
        <ul>
            <li>
                Price:${product.price}
            </li>
            <li>
                status:{product.status}
            </li>
            <li>
            Qty:<select>
                <option>1</option>
                <option>2</option>
            </select>
            </li>
            <li>
                <button className="button">Add to Cart</button>
            </li>
        </ul>

        </div>

    </div>
        )}
    </div>

    </div>
}

export default ProductScreen;