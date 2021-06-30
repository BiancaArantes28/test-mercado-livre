import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/products.css';

const ProductsComponent = ({ categories, products }) => {
    return (
        <div className="content-products">
            <div className="breadcrumb">
                <span>
                    {categories && categories.join(" > ")}
                </span>
            </div>
            {products.map(product => (
                <Link className="link-product" to={`/product-detail/${product.id}`}>
                    <div key={product.id} className="container-products">
                        <div className="box-product">
                            <div className="product-detail border-bottom">
                                <img src={product.picture} alt="iPhone" />
                                <div className="product-info">
                                    <span className="price">{product.price.currency} {product.price.amount},{product.price.decimals}</span>
                                    <p>{product.title}</p>
                                    <p className="product-status">{product.condition}</p>
                                </div>
                                <div className="localtion">
                                    Capital Federal
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
           
        </div>
    );
};

export default ProductsComponent;