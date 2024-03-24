import { useDispatch, useSelector } from "react-redux"
import { useLanguage } from "../shared/hooks/useLanguage"
import { useTranslation } from "react-i18next"
import { useInternalization } from "../shared/hooks/useInternalization"
import { Loading } from "../shared/components/Loader"
import { Error } from "../shared/components/Error"
import greeting from "../store/reducers/greeting"
import React, { useEffect } from "react"
import { greetingSelector } from "../store/selectors/greeting"
import { get } from "lodash"


const Hello = ({ t }) => {

  return (
    <div>{t("hello.msg")}</div>
  )
}

const Home = () => {

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

export default Home