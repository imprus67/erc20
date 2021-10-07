import React from "react";
import { useForm } from "react-hook-form";

export default () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur'});

  const submitBalanceOfAddress = data => console.log(data);

  return (
    <div className="App">
      <div>

        <h2>Balance of address</h2>

      <form onSubmit={handleSubmit(submitBalanceOfAddress)}>

      
      <input placeholder="Address" 
      {...register("balanceOfAddress", 
      {required: 'Not empty field',
      pattern: {
        value: /^0x[a-fA-F0-9]{40}$/g,
        message: 'Should be address'
      }})} />
      {errors.balanceOfAddress && <span>{errors.balanceOfAddress.message}</span>}
     
      <button type="submit">submit</button>

    </form>

      </div>

    </div>
  );
};
