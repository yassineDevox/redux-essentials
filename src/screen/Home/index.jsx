import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLanguage } from "../../shared/hooks/useLanguage"
import { useTranslation } from "react-i18next"
import { useInternalization } from "../../shared/hooks/useInternalization"
import { greetingSelector } from "../../store/selectors/greeting"
import { greeting } from "../../store/actions-creators/greeting"

import View from "./view"
import { useAuth } from "../../shared/hooks/useAuth"
import { useNavigate } from "react-router-dom"


const Home = () => {

  const { t } = useTranslation('home')
  const { changeLanguage } = useInternalization()
  const { clearSession } = useAuth()

  const [language] = useLanguage()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(greeting())
  }, [])

  const greetingState = useSelector(greetingSelector)

  const logout = () => {
    clearSession()
    navigate('/login', { replace: true })
  }

  return (
    <View {...{ t, language, changeLanguage, greetingState, logout }} />
  )
}

export default Home