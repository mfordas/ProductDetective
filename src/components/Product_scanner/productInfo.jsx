import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NutriscoreGrade from './nutriscoreGrade';

const ProductInfo = ({ barcode }) => {
    const [productInfo, setProductInfo] = useState({data: { status: 0}});

    useEffect(() => {
        const getProductInfo = async () => {
            // const productData = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
            // console.log(productData);
            // setProductInfo({ ...productData });
        };

        getProductInfo();

    }, [barcode]);

    
    return (

        <div>
            <div>
                { productInfo.data.status=== 1 ? 
                <>
                <div>{productInfo.data.product.product_name}</div>
                <div className="nutriscoreBar">
                    <NutriscoreGrade grade={'A'} color={'green'} productGrade={`${productInfo.data.product.nutriscore_grade}`}/>
                    <NutriscoreGrade grade={'B'} color={'lightgreen'} productGrade={`${productInfo.data.product.nutriscore_grade}`}/>
                    <NutriscoreGrade grade={'C'} color={'yellow'} productGrade={`${productInfo.data.product.nutriscore_grade}`}/>
                    <NutriscoreGrade grade={'D'} color={'orange'} productGrade={`${productInfo.data.product.nutriscore_grade}`}/>
                    <NutriscoreGrade grade={'E'} color={'red'} productGrade={`${productInfo.data.product.nutriscore_grade}`}/>

                </div></> : <><div>Product not found</div></>}
            </div>
        </div>
    )
};

export default ProductInfo