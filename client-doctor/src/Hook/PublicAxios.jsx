import axios from "axios"

const publicfetch = axios.create({
    baseURL : "http://localhost:5000"
})
const UsePublicAxios = () => {
  return publicfetch
}

export default UsePublicAxios