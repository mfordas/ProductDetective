import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductInfo = ({ barcode }) => {
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        const getProductInfo = async () => {
            const productData = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
            setProductInfo({ ...productData });
        };

        getProductInfo();

    }, [barcode]);

    
    return (

        <div>
            <div>
                {productInfo.data ? productInfo.data.product.product_name : <></>}
            </div>
        </div>
    )
};

export default ProductInfo