import { useContext } from "react"
import { InternalizationContext } from "../context/internalization"

export const useLanguage = () => {

    const {getCurrentLanguage} = useContext(InternalizationContext);

    const language = getCurrentLanguage()

    return [language]

}
