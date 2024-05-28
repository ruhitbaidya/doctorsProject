import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  // validateCaptcha,
} from "react-simple-captcha";
import { useEffect } from "react";
import UseProvide from "../../../Hook/UserProvide";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const {loginemialpass} = UseProvide();
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  useEffect(()=>{
    loadCaptchaEnginge(6);
  }, [])

  const onSubmit = (data) => {
    const {email, password, text} = data
    loginemialpass(email, password)
      .then(()=>{
        toast.success("successfully Login")
        navigate('/')
      }).catch((err)=>{
        toast.error("Invalid creatintial")
        console.log(err)
      })
      console.log(text)
    // if(validateCaptcha(text) === true){
      
    // }else{
    //   toast.error("Your Captcha Does not match")
    // }
  };
  return (
    <div>
      <div className="my-[30px]">
        <ToastContainer />
        <div className="w-[50%] mx-auto">
          <div>
            <h2 className="text-center text-4xl font-[700]">Login</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-[20px]">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Enter Your Email</span>
                </div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Type Email here"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Enter Your Password</span>
                </div>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Type Password here"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="mt-[20px]">
              <label className="form-control w-full">
                <div className="label">
                  <LoadCanvasTemplate />
                </div>
                <input
                {...register("text")}
                  type="text"
                  placeholder="Type text here"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="mt-[20px] ">
              <button className="w-full bg-cyan-500 py-[10px] text-white rounded-lg">
                Login
              </button>
            </div>
          </form>
          <div className="mt-[20px]">
            <p>
              If You Have No Account Please <Link to="/register">Register</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
