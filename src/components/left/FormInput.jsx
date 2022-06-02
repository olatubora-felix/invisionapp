import React from 'react'
import useInput from '../hooks/use-input';


const FormInput = () => {
  //Name validation and value
    const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
    } = useInput((value) => value.trim() !== '');
  
  /** Name validation and value End **/

  //Email validation and value
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  /** Email validation and value End **/

  //Password validation and value
   const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
   } = useInput((value) => value.length >= 8);
  
  /** Password validation and value End **/
  

  //Select validation and value
   const {
    value: enteredSelect,
    isValid: enteredSelectIsValid,
    hasError: selectInputHasError,
    valueChangeHandler: selectChangedHandler,
    inputBlurHandler: selectBlurHandler,
    reset: resetSelectInput,
   } = useInput((value) => value.trim() !== '');
  
  /** Select validation and value End **/

  // Checking Input validation
  let formIsValid = false;

  if (enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredSelectIsValid)
  {
    formIsValid = true;
  }

  // Event Handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    // showcasing the output element
    console.log(enteredName, enteredEmail, enteredPassword, enteredSelect);

    // Resetting Input value after submitting
    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetSelectInput();
  };

  // Check if there is error or not / dynamically set class name
  const nameInputClasses = nameInputHasError
   ? 'textfield-outlined textfield-outlined--error'
    : 'textfield-outlined';

  const emailInputClasses = emailInputHasError
    ? 'textfield-outlined textfield-outlined--error'
    : 'textfield-outlined';
  
   const passwordInputClasses = passwordInputHasError
   ? 'textfield-outlined textfield-outlined--error'
     : 'textfield-outlined';
  
  const selectInputClasses = selectInputHasError
     ? 'form-contol error'
    : 'form-contol';
  
  return (
    <form autoComplete="true" onSubmit={formSubmissionHandler}>
      {/* Name */}
      <div className={nameInputClasses}>
        <input id="input-name"
          type="text"
          placeholder=" "
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        <label htmlFor="input-name">Your Name</label>
         {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>

      {/* Email */}
      <div className={emailInputClasses}>
        <input id="input-email"
          type="email"
          placeholder=" "
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        <label htmlFor="input-email">Your Email</label>
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>

      {/* Select */}
      <div className="sect-control">
      <select name="" id=""
        className={selectInputClasses}
        onChange={selectChangedHandler}
          onBlur={selectBlurHandler}
          value={enteredSelect}
      >
          <option value=""
            defaultValue="I will describe my user type as">I will describe my user type as</option>
          <option value="Developer">Developer</option>
          <option value="DevOps">DevOps</option>
          <option value="Project Manager">Project Manager</option>
        </select>
        {selectInputHasError
          && (
          <p className='error-text'>Select Option must not be empty.</p>
        )}
      </div>
      
      {/* Password */}
       <div className={passwordInputClasses}>
        <input id="input-password" type="password"
          placeholder=" "
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          value={enteredPassword}
        />
        <label htmlFor="input-password">Password</label>
        <p className='character'>Minimum 8 charaters</p>
        {passwordInputHasError
          && (
          <p className='error-text'>Please enter at least 8 character</p>
        )}
        
      </div>
     
      <div className="" >
          <button className="btn" type="submit" disabled={!formIsValid}>Next</button>
      </div>
      {/* Agreement of service */}
      <p className='terms'>By clicking "Next" button, you agree to creating a free account, and to <span> Terms of Service</span> and <span>Privacy Policy</span></p>
      </form>
  );
}

export default FormInput