import React, { useRef } from "react"
import PropTypes from "prop-types";

import './login.css'
import { get, isEmpty } from "lodash";

const View = ({ t, loading, handleSubmit }) => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      email: get(emailRef, 'current.value'),
      password: get(passwordRef, 'current.value')
    }

    if (isEmpty(credentials.email) || isEmpty(credentials.password))
      alert('Fields shouldnt be empty 🚨')
    else
      handleSubmit(credentials)
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50
    }}>
      <form onSubmit={onHandleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        alignItems: "center",
        border: '1px solid',
        padding: 10
      }}>
        <label>{t('email')}</label><br />
        <input
          type="email"
          style={{ marginLeft: '10px' }}
          ref={emailRef}
        />
        <label style={{ marginBottom: '10px' }}><br />
          {t('password')}
        </label>
        <input
          type="password"
          style={{ marginLeft: '10px' }}
          ref={passwordRef}
        />
        <button
          type="submit"
          style={{
            marginTop: '20px',
            display: 'flex',
            gap: 5,
            justifyContent: 'center'
          }}
          onSubmit={handleSubmit}
        > <span>{t('login')}</span>
          {loading && <div className="loader"></div>}
        </button>

      </form>
    </div >
  );
}

View.propTypes = {
  t: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}


export default View;
