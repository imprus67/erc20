import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import './Transfer.css';
export default () => {
  
  let res;
  const contract = useSelector(state => state.contract);
  const account = useSelector(state => state.account);

  const [address, setAdress] = useState('');
  const [value, setValue] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur'});

  const submitTransfer = async(data) => {
    res = await contract.methods.transfer(address, value).send({from: account[0]});

    setAdress('');
    setValue('');
  };


  return (
    <div id="Transfer">
      <div className='Container_wrapper'>

        <div className = 'Text_wrapper'>
          <h2>transfer description</h2>
          <p>Moves amount tokens from the caller’s account to recipient.



Emits a Transfer event.</p>
        </div>
        
        
      <div className = 'Form_wrapper'>
        <form className='form' onSubmit={handleSubmit(submitTransfer)}>
          <h2 className='form_title'>Transfer</h2>
      
      <input className='form_input' type="text" placeholder="Address to" 
      {...register("addressOfSpender", 
      {required: 'Not empty field',
      pattern: {
        value: /^0x[a-fA-F0-9]{40}$/g,
        message: 'Should be address'
      }})} value={address} onChange={(e) => {setAdress(e.target.value)}}/>
      {errors.addressOfSpender && <span>{errors.addressOfSpender.message}</span>}
     
      <input className='form_input' type="number" placeholder="value" 
      {...register("valueOfApprove", 
      { required: true,
      valueAsNumber: true })} value={value} onChange={(e) => {setValue(e.target.value)}}/>
      
      {errors.valueOfApprove && <span>{'This field is required'}</span>}
      
      <button className='form_button' type="submit">submit</button>

          </form>
        </div>
      </div>
     

    </div>
  );
};
