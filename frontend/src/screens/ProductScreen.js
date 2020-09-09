import React from 'react';
import data from './../data'
import {Link} from 'react-router-dom'
import "./product.css"
function ProductScreen(props) {
    console.log(props.match.params.id);
    const product= data.products.find(x => x.id === props.match.params.id)
    return <div>
    <div  className="backToResults">
        <Link to='/'>Back to results</Link>
    </div>
    <div className="details">
        <div className='detailsImage'>
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
    </div>
}

export default ProductScreen;