import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions-creators/auth';
import { loginSelector } from '../../store/selectors/auth';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../shared/hooks/useAuth';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom'

import './login.css'

import View from './view';

const Login = () => {

  const { t } = useTranslation('login')
  const { setUser, setToken } = useAuth()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLoginSuccess = (resp) => {
    const connectedUser = get(resp, 'user', {})
    const accessToken = get(resp, 'access_token', "")
    setUser(connectedUser)
    setToken(accessToken)
    navigate('/', { replace: true })
  }

  const onLoginFailure = (err) => {
    const errorMessage = get(err, 'payload.response.data')
    alert(`${errorMessage} 🚨`)
  }

  const handleSubmit = ({ email, password }) => {
    dispatch(
      login(
        { email, password },
        onLoginSuccess,
        onLoginFailure
      )
    )
  };

  const { loading } = useSelector(loginSelector)

  return (
    <View {...{ t, loading, handleSubmit }} />
  );
}

export default Login;
