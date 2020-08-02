import React, { useState, useEffect } from 'react';
import { BrowserBarcodeReader } from '@zxing/library';

import ProductInfo from './productInfo';
import '../../styling/main_styling.scss';

const codeReader = new BrowserBarcodeReader();

const ProductScannerContent = () => {
    const [barcode, setBarcode] = useState('5900242001610');
    const [inputDevicesList, setDevices] = useState([]);
    const [error, setError] = useState('error');
    const [counter, setCount] = useState(0);

    useEffect(() => {
       const collectingListOfDevices = async () => {
        const listOfInputDevices = await codeReader
            .listVideoInputDevices()
            .then(videoInputDevices => {
                videoInputDevices.forEach(device =>
                    console.log(`${device.label}, ${device.deviceId}`)
                );
            })
            .catch(err => setError(`${err}`));

            return inputDevicesList;
        }
    }, [inputDevicesList]);

    useEffect(() => {
        codeReader
            .decodeOnceFromVideoDevice(undefined, 'video')
            .then(result => {
                setBarcode(result.text);
                setCount(counter+1)
            })
            .catch(err => setError(`${err}`));
    });

    return (
        <div className='mainWindow'>
            <video id="video" width="300" height="200"></video>
            {barcode}
            {inputDevicesList}
            <div>{error}</div>
            {counter}
            <ProductInfo barcode={barcode} />
        </div>
    );
}

export default ProductScannerContent;







