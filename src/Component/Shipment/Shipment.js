import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';

const style1 = {
    fontSize: '20px',
    backgroundColor:'#EA5455',
    border:'none',
    borderRadius: '5px',
    hover: 'pointer'
}

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className = "ship-from" onSubmit={handleSubmit(onSubmit)}>
      
      <input label = "Please provide your full name here" className = "ship-form-input"name="name" ref={register({ required: true })} />
      {errors.name && <span className = "error">Name field is required</span>}
      
      <input  label = "Email address" className = "ship-form-input" name="email" ref={register({ required: true })} />
      {errors.email && <span className = "error">Email field is required</span>}

      <input label = "Phone Number"className = "ship-form-input" name="phone" ref={register({ required: true })} />
      {errors.phone && <span className = "error">Phone number field is required</span>}

      <input label = "Please provide your full address here!" className = "ship-form-input"name="address" ref={register({ required: true })} />
      {errors.address && <span className = "error">Address is required</span>}

      <input style ={{style1}} className = "ship-form-input" type="submit" />
    </form>
  );
};

export default Shipment;