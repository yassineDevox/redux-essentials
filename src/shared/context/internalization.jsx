import { createContext } from 'react'
import { useTranslation } from 'react-i18next';

export const InternalizationContext = createContext();

const InternalizationProvider = ({ children }) => {

   const { i18n } = useTranslation();

   const changeLanguage = lng => {
      localStorage.setItem('profil_lang', lng);
      i18n.changeLanguage(lng)
   }

   const getCurrentLanguage = () => i18n.language

   return (
      <InternalizationContext.Provider value={{
         getCurrentLanguage, changeLanguage
      }}>
         {children}
      </InternalizationContext.Provider>
   )
}

export default InternalizationProvider