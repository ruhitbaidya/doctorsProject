import { useContext } from "react"
import { ContextProvid } from "../UserContext/UserContext"


const UseProvide = () => {
    const authUser = useContext(ContextProvid)
  return authUser
}
export default UseProvide