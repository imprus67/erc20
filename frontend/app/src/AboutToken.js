import React from 'react';
import { useSelector } from 'react-redux';
import './AboutToken.css';
import Header from './Header';
import ProgressBar from './ProgressBar';
import {TOKEN_SYMBOL} from './utils/const';




const AboutToken = () => {


    const symbol = useSelector(state => state.symbol);
    const balanceOfToken = useSelector(state => state.balanceOfToken);
    const networkId = useSelector(state => state.networkId);
    const percentage = balanceOfToken;

    if (networkId) {
    return (
        <>
        <Header />
        <section id='about'>
        <div className={'containerAbout'}>
            <h1>ERC20 Test Token</h1>

            <div className={'containerBalanceOfToken'}>

            <ProgressBar
                percentage={percentage}
                customIndicatorContent={<h3>{percentage + ' ' + TOKEN_SYMBOL}</h3>}
                customIndicator
                striped
                animated/>
            </div>

            <div className={'networkId'}>
                Current networ id is: {networkId}
            </div>
        </div>
        </section>
        </>
    )
    } else {
        return (
            <>
                <div>Please, use local network</div>
            </>
        )

    } 

}

export default AboutToken;
