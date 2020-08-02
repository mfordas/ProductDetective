import React, { useState, useEffect } from 'react';
import { BrowserBarcodeReader } from '@zxing/library';

import '../../styling/main_styling.scss';
import imgSrc from './pobrane.png';

const codeReader = new BrowserBarcodeReader();

const ProductScannerContent = () => {
    const [barcode, setBarcode] = useState('123456789');
    const [inputDevicesList, setDevices] = useState([]);

    useEffect(() => {
        const listOfInputDevices = codeReader
            .listVideoInputDevices()
            .then(videoInputDevices => {
                videoInputDevices.forEach(device =>
                    console.log(`${device.label}, ${device.deviceId}`)
                );
            })
            .catch(err => console.error(err));

    }, [])

    useEffect(() => {
        codeReader
            .decodeOnceFromVideoDevice(undefined, 'video')
            .then(result => setBarcode(result.text))
            .catch(err => console.error(err));
    })

    return (
        <div className='mainWindow'>
            <video id="video" width="300" height="200"></video>
            {barcode}
        </div>
    );
}

export default ProductScannerContent;







