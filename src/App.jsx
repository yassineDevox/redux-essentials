import { useTranslation } from 'react-i18next'
import { useInternalization } from './shared/hooks'

const Hello = ({ t }) => {

  return (
    <div>{t("hello.msg")}</div>
  )
}

const App = () => {

  const { t } = useTranslation()
  const { changeLanguage } = useInternalization()
  
  return (
    <div>
      <button onClick={() => changeLanguage('fr')}>FR</button><br />
      <button onClick={() => changeLanguage('en')}>EN</button><br />
      <Hello {...{ t }} />
    </div>
  )
}

export default App