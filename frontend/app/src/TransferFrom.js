import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import './TransferFrom.css';

export default () => {

  const contract = useSelector(state => state.contract);
  const account = useSelector(state => state.account);

  const [addressFrom, setAdressFrom] = useState('');
  const [addressTo, setAdressTo] = useState('');
  const [value, setValue] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur'});

  const submitTransferFrom = async (data) => {

    await contract.methods.transferFrom(addressFrom, addressTo, value).send({from: account[0]});

    setAdressFrom('');
    setAdressTo('');
    setValue('');
  };


  return (
    <div id="TransferFrom">
      <div className='Container_wrapper'>
        
        <div className = 'Form_wrapper'>
            <form className='form' onSubmit={handleSubmit(submitTransferFrom)}>
              <h2 className='form_title'>Transfer from</h2>

            <input className='form_input' placeholder="From address" 
            {...register("addressFrom", 
            {required: 'Not empty field',
            pattern: {
              value: /^0x[a-fA-F0-9]{40}$/g,
              message: 'Should be address'
            }})} value={addressFrom} onChange={(e) => {setAdressFrom(e.target.value)}}/>
            {errors.addressFrom && <span>{errors.addressFrom.message}</span>}

            <input className='form_input' placeholder="To address" 
            {...register("addressTo", 
            {required: 'Not empty field',
            pattern: {
              value: /^0x[a-fA-F0-9]{40}$/g,
              message: 'Should be address'
            }})} value={addressTo} onChange={(e) => {setAdressTo(e.target.value)}}/>
            {errors.addressTo && <span>{errors.addressTo.message}</span>}

            <input className='form_input' type="number" placeholder="value" 
            {...register("valueOfApprove", 
            { required: true,
            valueAsNumber: true })} value={value} onChange={(e) => {setValue(e.target.value)}}/>
            
            {errors.valueOfApprove && <span>{'This field is required'}</span>}
            
            <button className='form_button' type="submit">submit</button>

            </form>
          </div>

          <div className = 'Text_wrapper'>
          <h2>transferFrom description</h2>
          <p>Moves amount tokens from sender to recipient using the allowance mechanism.


Emits a Transfer event.</p>
        </div>
        </div>
     

    </div>
  );
};
