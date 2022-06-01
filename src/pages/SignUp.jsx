import React from 'react'
import Left from '../components/left/Left';
import Right from '../components/right/Right';
import classes from './SignUp.module.css'

const SignUp = () => {
  return (
    <div className={classes.grid}>
      <div className={classes.left}>
        <Left/>
      </div>
      <div className={classes.right}>
        <Right/>
      </div>
    </div>
  )
}

export default SignUp