import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions-creators/auth';
import { loginSelector } from '../../store/selectors/auth';
import { useTranslation } from 'react-i18next';

import './login.css'

import View from './view';
import { useAuth } from '../../shared/hooks/useAuth';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom'

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

  const handleSubmit = ({ email, password }) => {
    dispatch(
      login(
        { email, password },
        onLoginSuccess
      )
    )
  };

  const { loading } = useSelector(loginSelector)

  return (
    <View {...{ t, loading, handleSubmit }} />
  );
}

export default Login;
