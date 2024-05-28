import { Outlet } from "react-router-dom"
import Navbar from "../../Shaircom/Navbar/Navbar"
import Footer from "../../Shaircom/Footer/Footer"


const Root = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className="container mx-auto px-[10px] py-[20px]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  )
}

export default Root