import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../fonts/MarkaziText-VariableFont_wght.ttf';


const MenuContent = () => {

    return (
            <div className='menuContainer'>
                <NavLink className="buttonMenuContainer" to="/main"><span>Main page</span></NavLink>
                <NavLink className="buttonMenuContainer" to="/myallergens"><span>My allergens</span></NavLink>
                <NavLink className="buttonMenuContainer" to="/productscanner"><span>Product scanner</span></NavLink>
            </div>
    );
}

export default MenuContent;







