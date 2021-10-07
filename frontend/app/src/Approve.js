import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import './Approve.css';

export default () => {

  const contract = useSelector(state => state.contract);
  const account = useSelector(state => state.account);

  const [addressSpender, setAdressSpender] = useState('');
  const [value, setValue] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur'});

  const submitApprove = async (data) => {

    await contract.methods.approve(addressSpender, value).send({from: account[0]});

    setAdressSpender('');
    setValue('');
  };

  return (
  <div id="Approve">
      <div className='Container_wrapper'>
        <div className = 'Text_wrapper'>
          <h2>approve description</h2>
          <p>Sets amount as the allowance of spender over the caller’s tokens.

Returns a boolean value indicating whether the operation succeeded.
</p>
        </div>
        <div className = 'Form_wrapper'>

          <form className='form' onSubmit={handleSubmit(submitApprove)}>
          <h2 className='form_title'>Approve</h2>
          
          <input className='form_input' placeholder="Address of spender" 
          {...register("addressOfSpender", 
          {required: 'Not empty field',
          pattern: {
            value: /^0x[a-fA-F0-9]{40}$/g,
            message: 'Should be address'
          }})} value={addressSpender} onChange={(e) => {setAdressSpender(e.target.value)}}/>
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
