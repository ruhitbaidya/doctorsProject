import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import UseProvide from "../../../Hook/UserProvide";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UsePublicAxios from "../../../Hook/PublicAxios";

const Register = () => {
  const publicfetch = UsePublicAxios();
  const { googleLogin, updateuser } = UseProvide();
  const [img, setImg] = useState("");
  const [upimg, setupimg] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const imagehandel = (e) => {
    const formdata = new FormData();
    formdata.append("image", e.target.files[0]);
    setImg(window.URL.createObjectURL(e.target.files[0]));
    setupimg(formdata);
  };

  const submitsData = (data) => {
    const { email, password, name } = data;
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=210b46352f7d1f16f91db247e7e12194`,
        upimg
      )
      .then((res) => {
        const photoUrl = res.data.data.display_url;
        if (photoUrl) {
          googleLogin(email, password)
            .then((res) => {
              if (res) {
                updateuser(name, photoUrl)
                  .then(() => {
                    toast.success("successfully Register");
                    publicfetch
                      .post("/adduser", { email })
                      .then((res) => console.log(res));
                    setTimeout(() => {
                      navigate("/");
                    }, 1000);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => console.log(err));
        }
      });
    console.log(data.name, data.email);
  };

  return (
    <div className="my-[30px]">
      <ToastContainer />
      <div className="w-[50%] mx-auto">
        <div>
          <h2 className="text-center text-4xl font-[700]">Register Account</h2>
        </div>
        <form onSubmit={handleSubmit(submitsData)}>
          <div className="mt-[20px]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Enter Your Name</span>
              </div>
              <input
                {...register("name")}
                required
                type="text"
                placeholder="Type Name here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="mt-[20px]">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Enter Your Email</span>
              </div>
              <input
                {...register("email")}
                required
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
                required
                type="password"
                placeholder="Type Password here"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="mt-[20px] flex  items-center">
            <label className="form-control ">
              <div className="label">
                <span className="label-text">Select Your Image</span>
              </div>
              <input
                type="file"
                onChange={imagehandel}
                required
                name="image"
                className="input"
              />
            </label>
            <div className="flex justify-center items-center">
              <img
                className="w-52 h-40 object-contain"
                src={img}
                alt="Select Image"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <button className="w-full bg-cyan-500 py-[10px] text-white rounded-lg">
              Register
            </button>
          </div>
        </form>
        <button className="flex justify-center items-center gap-[15px] py-[10px] mt-[20px] border border-cyan-500 w-full rounded-lg">
          {" "}
          <FaGoogle /> Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Register;
