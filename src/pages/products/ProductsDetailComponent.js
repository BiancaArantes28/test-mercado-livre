import React from 'react';
import '../../styles/css/product-detail.css';

const ProductsDetailComponent = () => {
    return (
        <div className="content-product">
            <div className="breadcrumb">
                <span>
                    Eletrônico > Ipad > 32 GB
                </span>
            </div>
            <div className="container-product">
                <div className="detail-product">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-spacegray-202009_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1598653763000" alt="ipad" />
                    <h2>Descrição do produto</h2>
                    <p>Ipad Air com 32 GB de memória compatível com Apple Pencil.</p>
                </div>
                <div className="price-product">
                    <p>Novo 240 vendidos</p>
                    <br />
                    <p className="title-product">
                        Deco Reverse Sombero Oxford
                    </p>
                    <br />
                    <p className="price">R$ 1.980,00</p>
                    <button>Comprar</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailComponent;