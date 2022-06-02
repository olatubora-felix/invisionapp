import React from 'react'
import Left from '../components/left/Left';
import Right from '../components/right/Right';
import classes from './SignUp.module.css'

const SignUp = () => {
  return (
    //Grid system is applied here
    <div className={classes.grid}>
      {/* Left Item */}
      <div className={classes.left}>
        <Left/>
      </div>
      {/* Right Item */}
      <div className={classes.right}>
        <Right/>
      </div>
    </div>
  )
}

export default SignUp