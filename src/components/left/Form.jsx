import React from 'react'
// import classes from './Form.module.css'

const Form = () => {
  return (
    <div>
      <div className="textfield-outlined">
        <input id="input-name" type="text" placeholder=" " />
        <label htmlFor="input-name">Your Name</label>
      </div>
      <div className="textfield-outlined">
        <input id="input-email" type="text" placeholder=" " />
        <label htmlFor="input-email">Your Email</label>
      </div>
        <select name="" id="" className="form-contol">
          <option value="" defaultValue="I will describe my user type as">I will describe my user type as</option>
          <option value="">Developer</option>
          <option value="">DevOps</option>
          <option value="">Project Manager</option>
        </select>
       <div className="textfield-outlined">
        <input id="input-password" type="password" placeholder=" " />
        <label htmlFor="input-password">Password</label>
      </div>
    </div>
  );
}

export default Form