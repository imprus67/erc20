import React, {useState, useEffect} from 'react';
import {Scroll} from './utils/scroll';
import './Menu.css';

const Menu = ({active, setActive}) => {



    return (
        <div className={active ? 'menu active' : 'menu'}
         onClick={() => setActive(false)}>
            <div className='blur'></div>
            <div className='menu__content' onClick={(e) => e.stopPropagation()}>
                <ul>
                            <li>
                                <a href='#Allowance'>Allowance</a>
                            </li>
                            <li>
                                <a href='#Transfer'>Transfer</a>
                            </li>
                            <li>
                                <a href='#TransferFrom'>TransferFrom</a>
                            </li>
                            <li>
                                <a href='#Approve'>Approve</a>
                            </li>
                            <li>
                                <a href='#BalanceOfAddress'>BalanceOfAddress</a>
                            </li>
                        </ul>
            </div>
            
        </div>
    )
}

export default Menu;
