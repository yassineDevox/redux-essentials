import { useContext } from "react"
import { AuthContext } from "../context/authorization";

export const useAuth = () => {

    return useContext(AuthContext);

}
