import axios from "axios"

const privateSecure = axios.create({
    baseURL : "http://localhost:5000"
})

const UseSecureAxios = () => {
    privateSecure.interceptors.request.use(function (config) {
        config.headers.authorization = localStorage.getItem("token")
        return config;
      }, function (error) {
        return Promise.reject(error);
      });
    
    // Add a response interceptor
    privateSecure.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        
        return Promise.reject(error);
      });
  return privateSecure
}

export default UseSecureAxios