import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions-creators/auth';
import { get } from 'lodash';
import { loginSelector } from '../store/selectors/auth';
import './login.css'

function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = get(emailRef, 'current.value')
    const password = get(passwordRef, 'current.value')
    dispatch(login({ data: { email, password } }))
  };

  const { loading, error, idle, data } = useSelector(loginSelector)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label htmlFor="email" style={{ marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            style={{ marginLeft: '10px' }}
            ref={emailRef}
          />
        </label>
        <label htmlFor="password" style={{ marginBottom: '10px' }}>
          Password:
          <input
            type="password"
            style={{ marginLeft: '10px' }}
            ref={passwordRef}
          />
        </label>
        <button
          type="submit"
          style={{ marginTop: '20px' }}
          onSubmit={handleSubmit}
        >Login
          {<div className="loader"></div> && loading}
        </button>

      </form>
    </div>
  );
}

export default Login;
