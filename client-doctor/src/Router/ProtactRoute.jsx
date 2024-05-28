import { Navigate } from "react-router-dom";
import UseProvide from "../Hook/UserProvide"


const ProcateRoute = ({children}) => {
  const {user, loading} = UseProvide();
  
  if(loading){
    return <div className="h-screen w-full flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

  if(user){
    return children
  }

  return <Navigate to="/login"></Navigate>
}

export default ProcateRoute