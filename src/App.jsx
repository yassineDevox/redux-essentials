import { useTranslation } from 'react-i18next'
import { useInternalization, useLanguage } from './shared/hooks'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { greeting } from './store/actions-creators/greeting'
import { greetingSelector } from './store/selectors/greeting'
import { Loading } from './shared/components/Loader'
import { Error } from './shared/components/Error'
import ApiMock from './utils/mocks/greeting'
import { get } from 'lodash'

const Hello = ({ t }) => {

  return (
    <div>{t("hello.msg")}</div>
  )
}

const App = () => {

  const { t } = useTranslation()
  const { changeLanguage } = useInternalization()
  const dispatch = useDispatch()
  const [language] = useLanguage()

  useEffect(() => {
    dispatch(greeting())
  }, [])

  const { loading, error, idle, data } = useSelector(greetingSelector)
  
  const mylabel = get(data, `label[${language}]`, '')

  if (loading || idle) return <Loading />
  if (error) return <Error />

  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      <button onClick={() => changeLanguage('fr')}>FR</button><br />
      <button onClick={() => changeLanguage('en')}>EN</button><br />
      <Hello {...{ t }} />
      <div style={{ border: '1px solid', padding: '5px' }}>
        {mylabel}
      </div>
    </div>
  )
}

export default App