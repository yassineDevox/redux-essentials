import React from 'react'
import { useTranslation } from 'react-i18next'

const Hello = ({ t }) => {

  return (
    <div>{t("hello.msg")}</div>
  )
}

const App = () => {
  const { t, i18n } = useTranslation()
  const onChangeLanguage = lng => i18n.changeLanguage(lng)

  return (
    <div>
      <button onClick={() => onChangeLanguage('fr')}>FR</button><br />
      <button onClick={() => onChangeLanguage('en')}>EN</button><br />
      <Hello {...{ t }} />
    </div>
  )
}

export default App