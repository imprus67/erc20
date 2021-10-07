import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import './BalanceOfAddress.css';
import {TOKEN_SYMBOL} from './utils/const';

export default () => {
  
  const contract = useSelector(state => state.contract);
  const account = useSelector(state => state.account);

  const [balanceOfAddress, setBalanceOfAddress] = useState('');
  const [res, setRes] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur'});

  const submitBalanceOfAddress = async(data) => {
    const result = await contract.methods.balanceOf(balanceOfAddress).call();
    setRes(result);
    setBalanceOfAddress('');
  };

  return (
    <div id="BalanceOfAddress">
      <div className='Container_wrapper'>
        <div className = 'Text_wrapper'>
          <h2>balanceOf description</h2>
          <p>Returns the amount of tokens owned by account.</p>
        </div>
        
    <div className = 'Form_wrapper'> 
      <form className='form' onSubmit={handleSubmit(submitBalanceOfAddress)}>
        <h2 className='form_title'>Balance of address</h2>
      
      <input className='form_input' placeholder="Address" 
      {...register("balanceOfAddress", 
      {required: 'Not empty field',
      pattern: {
        value: /^0x[a-fA-F0-9]{40}$/g,
        message: 'Should be address'
      }})} value={balanceOfAddress} onChange={(e) => {setBalanceOfAddress(e.target.value)}}/>
      {errors.balanceOfAddress && <span>{errors.balanceOfAddress.message}</span>}
     
      <button className='form_button' type="submit">submit</button>
      <div>Balance is: {res ? `${res} ${TOKEN_SYMBOL}` : 0} </div>

    </form>
    </div> 
    

      </div>

    </div>
  );
};
