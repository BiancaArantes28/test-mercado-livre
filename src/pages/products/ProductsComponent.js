import React from 'react';
import '../../styles/css/products.css';

const ProductsComponent = () => {
    return (
        <div className="content-products">
            <div className="breadcrumb">
                <span>
                    Eletrônica & audio > iPad > Reprodutores > 32 GB
                </span>
            </div>
            <div className="container-products">
                <div className="box-product">
                    <div className="product-detail border-bottom">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144418" alt="iPhone" />
                        <div className="product-info">
                            <span className="price">$ 1.980</span>
                            <p>Apple iPhone 11 com 32 gb de memória</p>
                            <p className="product-status">Completo único!</p>
                        </div>
                        <div className="localtion">
                            Capital Federal
                        </div>
                    </div>
                </div>
                <div className="box-product">
                    <div className="product-detail border-bottom">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144418" alt="iPhone" />
                        <div className="product-info">
                            <span className="price">$ 1.980</span>
                            <p>Apple iPhone 11 com 32 gb de memória</p>
                            <p className="product-status">Completo único!</p>
                        </div>
                        <div className="localtion">
                            Capital Federal
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsComponent;