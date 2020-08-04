import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Menu from '../../components/Menu';
import ProductScanner from '../../components/Product_scanner';
import '../../styling/main_styling.scss'


const AppContent = () => {
    return (
        <div className="AppContainer">
            <HashRouter>
            {/* <Menu /> */}
                <Switch>
                    <Route path="/productscanner" component={ProductScanner} />
                    <Route path="/" component={ProductScanner} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </HashRouter>
            <div className="footer">Footer</div>
        </div>
    );
}

export default AppContent;