import axios from "axios"

const publiapi = axios.create({
    baseURL : "http://localhost:5000"
})

const Usepublicdatasendget = () => {
  return publiapi
}

export default Usepublicdatasendget