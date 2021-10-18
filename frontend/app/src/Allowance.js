import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import './Allowance.css';

export default () => {
  let res;
  const contract = useSelector(state => state.contract);

  const [addressOwner, setAdressOwner] = useState('');
  const [addressSpender, setAdressSpender] = useState('');
  const [result, setReult] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched'});
  
  const submitAllowance = async (data) => {
    res = await contract.methods.allowance(addressOwner, addressSpender).call();
    setReult(res);
    setAdressOwner('');
    setAdressSpender('');
  };


  return (
    <div  id="Allowance">
      <div className='Container_wrapper'>

        <div className = 'Form_wrapper'>

          

        <form className='form' onSubmit={handleSubmit(submitAllowance)}>

          <h2 className='form_title'>Allowance</h2>
        
          <input  className='form_input' type="text" placeholder="Address of owner" 
          {...register("addressOfOwner", 
          {required: 'Not empty field',
          pattern: {
            value: /^0x[a-fA-F0-9]{40}$/g,
            message: 'Should be address'
          }})} value={addressOwner} onChange={(e) => {setAdressOwner(e.target.value)}}/>

          {errors.addressOfOwner && <span>{errors.addressOfOwner.message}</span>}
        
        <input className='form_input' type="text" placeholder="Address of spender" 
          {...register("addressOfSpender", 
          {required: 'Not empty field',
          pattern: {
            value: /^0x[a-fA-F0-9]{40}$/g,
            message: 'Should be address'
          }})} value={addressSpender} onChange={(e) => {setAdressSpender(e.target.value)}}/>
          
          {errors.addressOfSpender && <span>{errors.addressOfSpender.message}</span>}
          
          <button className='form_button' type="submit">submit</button>

      </form>

        </div>

        <div className = 'Text_wrapper'>
        <h2>Allowance description</h2>
        <p>Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom. This is zero by default.</p>
        <p>Result: {result}</p>
      </div>
      </div>
      
     

    </div>
  );
};
