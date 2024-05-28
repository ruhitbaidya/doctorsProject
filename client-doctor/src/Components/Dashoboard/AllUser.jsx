import { useEffect } from "react";
import UseSecureAxios from "../../Hook/SecureAxios";


const AllUser = () => {
    const privateSecure = UseSecureAxios();
    useEffect(()=>{
        privateSecure.post('/finds', {name : "ruhit baidya"})
        .then((res)=> console.log(res))
    }, [privateSecure])
  return (
    <div></div>
  )
}

export default AllUser