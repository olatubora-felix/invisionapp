import React from 'react';
import FormCompnent from './FormInput';
import classes from './Left.module.css'

const Left = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Let's Set up your account</h1>
      <h4 className={classes.subtitle}>
        Already have an account?
        <span className={classes.link}> Sign in</span>
      </h4>
        <FormCompnent/>
    </div>
  )
}

export default Left