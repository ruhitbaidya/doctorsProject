import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import UseProvide from "../../../Hook/UserProvide";
const Navbar = () => {
  const { user, logOutuser } = UseProvide();
  console.log(user)
  const handelLogout = ()=>{
    logOutuser()
    .then((res)=>{
      console.log(res)
    })
  }
  const links = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/about"> About </NavLink>
      </li>
      <li>
        <NavLink to="/allStaff"> AllStaff </NavLink>
      </li>
      <li>
        <NavLink to="/doctors"> Doctors </NavLink>
      </li>
      <li>
        <NavLink to="/contact"> Contact </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  bg-cyan-500 shadow-lg shadow-cyan-500/50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMdMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-[25px] pr-[10px]">
                <button className="text-[25px]">
                  <FaShoppingCart />
                </button>
                <details className="dropdown dropdown-end">
                  <summary className="m-1 btn bg-transparent border-0 hover:bg-transparent">
                    <img
                      className="w-[40px] h-[40px] rounded-full border-2 border-gray-200"
                      src={user.photoURL}
                      alt=""
                    />
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <Link to="/dashboard">DashBoard</Link>
                    </li>
                    <li>
                      <button onClick={handelLogout}>Logout</button>
                    </li>
                  </ul>
                </details>
              </div>
            </>
          ) : (
            <>
              <div className="pr-[10px]">
                <Link to="/login">
                  <button className="text-white">Login</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
