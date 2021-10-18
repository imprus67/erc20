import React, {useEffect} from "react";
import { useDispatch } from 'react-redux';
import ERC20Token from './contracts/ERC20Token.json';
import {getWeb3} from './utils/web3';
import './App.css';
import Header from './Header';
import AboutToken from './AboutToken';
import Allowance from './Allowance';
import Transfer from './Transfer';
import TransferFrom from './TransferFrom';
import Approve from './Approve';
import BalanceOfAddress from './BalanceOfAddress';
import {ADDRESS_OF_CREATOR} from './utils/const';

function App() {
  const dispatch = useDispatch();

  useEffect (()=>{

     const init = async() => {
        const web3 = await getWeb3();
        await window.ethereum.enable();
        const account = await web3.eth.requestAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = ERC20Token.networks[networkId];

        if (deployedNetwork !== undefined) {
        const contract = new web3.eth.Contract(
        ERC20Token.abi,
        deployedNetwork.address,
        );
        

        const balance = await contract.methods.balanceOf(ADDRESS_OF_CREATOR).call();
        const symbol = await contract.methods.symbol().call();

        dispatch({type: 'SET_SYMBOL', payload: symbol})
        dispatch({type: 'SET_CONTRACT', payload: contract})
        dispatch({type: 'SET_NETWORK_ID', payload: networkId})
        dispatch({type: 'SET_ACCOUNT', payload: account})
        dispatch({type: 'SET_BALANCE_OF_TOKEN', payload: balance})
        dispatch({type: 'RIGTH_NETWORK', payload: true})
        } else {
        dispatch({type: 'RIGTH_NETWORK', payload: false})
        }

        }

        init();
    }, [dispatch]);


  return (

    <div className="container">
          <AboutToken />
          <Allowance />
          <Transfer />
          <TransferFrom />
          <Approve />
          <BalanceOfAddress />

       
    </div>
  );
}

export default App;
