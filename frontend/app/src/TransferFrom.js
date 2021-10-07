import React from "react";
import { useForm } from "react-hook-form";

export default () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur'});

  const submitTransferFrom = data => console.log(data);


  return (
    <div className="App">
     
      <div>
        <h2>Transfer from</h2>

      <form onSubmit={handleSubmit(submitTransferFrom)}>

      
      <input placeholder="From" 
      {...register("addressFrom", 
      {required: 'Not empty field',
      pattern: {
        value: /^0x[a-fA-F0-9]{40}$/g,
        message: 'Should be address'
      }})} />
      {errors.addressFrom && <span>{errors.addressFrom.message}</span>}

      <input placeholder="To" 
      {...register("addressOfReciever", 
      {required: 'Not empty field',
      pattern: {
        value: /^0x[a-fA-F0-9]{40}$/g,
        message: 'Should be address'
      }})} />
      {errors.addressOfReciever && <span>{errors.addressOfReciever.message}</span>}
     
      <input type="number" placeholder="value" 
      {...register("valueOfApprove", 
      { required: true,
      valueAsNumber: true })} />
      
      {errors.valueOfApprove && <span>{'This field is required'}</span>}
      
      <button type="submit">submit</button>

    </form>

      </div>
     

    </div>
  );
};
