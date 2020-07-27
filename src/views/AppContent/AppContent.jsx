import React, { useState, useEffect } from 'react';

import Menu from '../../components/Menu';
import '../../styling/main_styling.scss'


const AppContent = () => {
    return (
        <div className="AppContainer">
            <Menu />
            <div className="mainWindow"></div>
            <div className="footer">Footer</div>
        </div>
    );
}

export default AppContent;