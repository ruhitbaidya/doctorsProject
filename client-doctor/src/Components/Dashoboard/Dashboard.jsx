import { NavLink, Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
    <div className="container mx-auto px-[20px]">
        <div className="flex">
            <div className="bg-gray-500 h-screen w-[20%] py-[30px] px-[20px] text-white">
                <h2 className="text-4xl font-[700] text-center">Admin</h2>
                <ul className="text-center space-y-2 mt-[20px]">
                    <li className="border rounded-lg py-[10px]"> <NavLink to="/dashboard/home">AdminHome</NavLink> </li>
                    <li className="border rounded-lg py-[10px]"> <NavLink to="/dashboard/adddoctor">Add Doctor</NavLink> </li>
                    <li className="border rounded-lg py-[10px]"> <NavLink to="/dashboard/addStaff">Add Staff</NavLink> </li>
                    <li className="border rounded-lg py-[10px]"> <NavLink to="/dashboard/alluser">All User</NavLink> </li>
                    <li className="border rounded-lg py-[10px]"> <NavLink to="/">Home</NavLink> </li>
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Dashboard