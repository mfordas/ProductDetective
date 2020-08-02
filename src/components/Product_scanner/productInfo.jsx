import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductInfo = ( { barcode }) => {
    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        const getProductInfo = async () => {
            const productInfo = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
            console.log(productInfo);
        };

        getProductInfo();
    }, [barcode]);

    return (
        <div>
            <div>
            Product info component
            </div>
        </div>
    )
};

export default ProductInfo