import React, {useState, useEffect} from 'react';
import { ReactComponent as LogoSvg } from './assets/bit_logo.svg';
import './Header.css';
import {TOKEN_SYMBOL, NAME_OF_COIN} from './utils/const';
import {Scroll} from './utils/scroll';

const Header = () => {

    Scroll();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

    return (
        <header className={offset>60 ? 'header_white' : 'common'}>
        <div>
            <div>
                <div>
                    <div className={'header__content'}>
                        <a href="#about" className='Logo'>
                            <LogoSvg />
                        </a>
                        <span className={offset>60 ? 'header_span__white' : 'header__span'}> Buy Coin <br/> {NAME_OF_COIN}</span>
                        <ul className={offset>60 ? 'header_nav_white' : 'header__nav'}>
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
            </div>
        </div>
        </header>
    )
}

export default Header
