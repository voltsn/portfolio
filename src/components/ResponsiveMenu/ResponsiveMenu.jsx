import React from 'react';
import { useState } from 'react';
import Menu from '../Menu/Menu';

export default function ResponsiveMenu({menuItems, menuItemsClass, buttonClassName}) {

    const [isVisible, setVisibility] = useState(true);

    function toggleVisibility(e){
        setVisibility(!isVisible);
    }

    return (
        <>
            <Menu menuItems={menuItems} 
                className={
                    {...menuItemsClass, nav: isVisible ? `${menuItemsClass.nav} active` : `${menuItemsClass.nav}`}
                }
            />
            <button className="hamburger" onClick={toggleVisibility}>
                 <span className='line top'></span>
                 <span className='line middle'></span>
                 <span className='line bottom'></span>
            </button>
        </>
    )
}