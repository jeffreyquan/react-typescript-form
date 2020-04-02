import React, { useState } from 'react';
let styles = require('./RegisterForm.module.scss');

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmationPassword: '',
}

export const RegisterForm = () => {

  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  
  return (
    <div>
      <form className={ styles.container }>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          name="name"
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password" name="password"
          onChange={handleChange}
        />

        <label htmlFor="confirmationPassword">Confirm Password:</label>
        <input 
          type="confirmationPassword" 
          name="confirmationPassword"
          onChange={handleChange}
        />

        <button type="submit">
          Submit
        </button>
      </form>
      <div>
        <p>{ values.name }</p>
        <p>{ values.email }</p>
        <p>{values.password }</p>
        <p>{values.confirmationPassword }</p>
      </div>
    </div>
  )
}