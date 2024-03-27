import React from "react"

import { Loading } from "../../shared/components/Loader"
import { Error } from "../../shared/components/Error"
import { get } from "lodash"

import PropTypes from "prop-types"

const Hello = ({ greeting }) => {

  return (
    <div>{greeting} Yassine 😇 !</div>
  )
}

const View = ({ t, language, changeLanguage, greetingState, logout }) => {

  const { loading, error, idle, data } = greetingState

  const greeting = get(data, `label[${language}]`, '')

  if (loading || idle) return <Loading />
  if (error) return <Error />

  return (
    <div style={{
      display: 'flex',
      gap: '6px',
      border: "1px solid",
      width: 'fit-content',
      margin: "10px auto",
      padding: 30
    }}>
      <button onClick={() => changeLanguage('fr')}>FR</button><br />
      <button onClick={() => changeLanguage('en')}>EN</button><br />
      <div style={{
        border: '1px solid',
        padding: '5px'
      }}>
        <Hello {...{ greeting }} />
      </div>
      <button onClick={logout}>{t('logout')}</button>
    </div>
  )
}

View.propTypes = {
  t: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  greetingState: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

export default View