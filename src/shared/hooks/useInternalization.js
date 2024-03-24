import { useContext } from 'react'
import { InternalizationContext } from '../context/internalization'

export const useInternalization = () => {
    const { changeLanguage } = useContext(InternalizationContext)
    return {
        changeLanguage
    }
}
