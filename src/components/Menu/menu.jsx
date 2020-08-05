import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../../styling/main_styling.scss';


const MenuContent = () => {
    const [buttonsCords, setButtonsCords] = useState([]);

    const underline = document.createElement('span');
    underline.classList.add('underline');
    document.body.append(underline);

    const createUnderline = (button) => {
        const buttonCords = button.getBoundingClientRect();

        underline.style.width = `${buttonCords.width}px`;
        underline.style.height = `${buttonCords.height}px`;
        underline.style.transform = `translate(${buttonCords.left}px, ${buttonCords.top}px)`
    };

    const addEventListenerToButton = (button) => {
        button.addEventListener('mouseenter', () => createUnderline(button))
    };

    useEffect(() => {
        const allButtons = [...document.getElementsByClassName('buttonMenuContainer')];

        setButtonsCords(allButtons);
    }, []);


    useEffect(() => {
        buttonsCords !== [] ? buttonsCords.forEach(button => addEventListenerToButton(button)) : console.log('errrrrr');

    }, [buttonsCords]);

    return (
        <div className='menuContainer' >
            <NavLink className="buttonMenuContainer" to="/main"><span>Main page</span></NavLink>
            <NavLink className="buttonMenuContainer" to="/productscanner"><span>Product scanner</span></NavLink>
            {/* <NavLink className="buttonMenuContainer" to="/myallergens"><span>My allergens</span></NavLink> */}
        </div>
    );
}

export default MenuContent;







