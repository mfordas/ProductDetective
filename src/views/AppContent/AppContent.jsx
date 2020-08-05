import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Menu from '../../components/Menu';
import MainPage from '../../components/Main_page';
import ProductScanner from '../../components/Product_scanner';
import Footer from '../../components/Footer';
import detectiveSrc from '../../img/detective.png'; 
import '../../styling/main_styling.scss'


const AppContent = () => {
    return (
        <div className="AppContainer">
            <div className='title'>
            <p>ProductDetective</p>
            <img src={detectiveSrc} alt='DetectivePhoto'/>
            </div>
            <HashRouter>
            <Menu />
                <Switch>
                    <Route path="/productscanner" component={ProductScanner} />
                    <Route path="/" component={MainPage} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </HashRouter>
            <Footer />
        </div>
    );
}

export default AppContent;