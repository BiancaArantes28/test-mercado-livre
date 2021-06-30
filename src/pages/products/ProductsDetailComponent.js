import React from 'react';
import '../../styles/css/product-detail.css';

const ProductsDetailComponent = ({ product, categories }) => {
    return (
        <div className="content-product">
            <div className="breadcrumb">
                <span>
                    {categories && categories.join(" > ")}
                </span>
            </div>
            <>
                {Object.keys(product).length > 0 && (
                    <div className="container-product">
                        <div className="detail-product">
                            <img src={product.picture} alt="ipad" />
                            <h2>Descrição do produto</h2>
                            <p>{product.description}.</p>
                        </div>
                        <div className="price-product">
                            <p>{product.condition} {product.sold_quantity} vendidos</p>
                            <br />
                            <p className="title-product">
                                {product.title}
                            </p>
                            <br />
                            <p className="price">{product.price.currency} {product.price.amount},{product.price.decimal}</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                )}
            </>
        </div>
    );
};

export default ProductsDetailComponent;