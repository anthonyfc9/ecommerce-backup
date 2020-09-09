import React from 'react';
import {Link} from 'react-router-dom'
import data from './../data'
function HomeScreen(props) {
    return                     <ul className="products">
    {
        data.products.map(product =>
            <li>
            <div className="product">
            <Link to={'/product/' + product.id}>
            <img className='productImage'src={product.image} alt="luffy"/>
               </Link>
                <div className="productName">
                <Link to={'/product' + product.id}>
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