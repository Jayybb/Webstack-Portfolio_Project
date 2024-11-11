import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [agree, setAgree] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        setErrorMessage(responseData.errors || "Login failed.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  
  const signup = async () => {
    if (!agree) {
      setErrorMessage("Please agree to the terms of use and privacy policy.");
      return;
    }
    
    console.log("SignUp Function Executed", formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        setErrorMessage(responseData.errors || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          {state === 'Sign up' && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type='text'
              placeholder='Your Name'
            />
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type='email'
            placeholder='Email'
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type='password'
            placeholder='Password'
          />
        </div>
        <button onClick={() => (state === 'Login' ? login() : signup())}>Continue</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className='loginsignup-switch'>
          {state === 'Sign up' ? (
            <>
              Already have an account?{' '}
              <span onClick={() => setState('Login')} className="link-button">
                Log in here
              </span>
            </>
          ) : (
            <>
              Create an account{' '}
              <span onClick={() => setState('Sign up')} className="link-button">
                Click here
              </span>
            </>
          )}
        </p>

        <div className='loginsignup-agree'>
          <input 
            type='checkbox' 
            id='agree' 
            checked={agree} 
            onChange={() => setAgree(!agree)} 
          />
          <label htmlFor='agree'>By continuing, I agree to the terms of use and privacy policy</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
