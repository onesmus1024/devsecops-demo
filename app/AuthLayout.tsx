// import React from 'react'
import { Link, Outlet } from 'react-router'
import img from "./assets/images/auth-cover-icon.png"
import cover from "./assets/images/auth-left-section.png"
import Logo from './components/Logo'

const AuthLayout = () => {
    return (
        <main className='grid grid-cols-2 w-screen min-h-screen'>
            <div className=" w-full h-full flex flex-col justify-center item-center relative " style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* <div className="bg-gray-400  p-4"> */}
                <img src={img} className=' self-center -mt-30 ' />
                {/* </div> */}
                <div className="absolute bottom-35 right-0 w-full">
                    <div className="w-1/2 text-center mx-auto font-semibold p-4">
                        <h2 className="text-3xl">Swiftcart Shop</h2>
                        <p className="text-gray-300  mt-4">
                           Your one place shop. Order now, We Deliver
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 w-full h-full text-gray-900 p-8 flex justify-center items-center flex-col">
                <Link to={"/"}><Logo/></Link>
                <div className="w-3/4 mx-auto">
                    <Outlet />
                </div>
            </div>

        </main>
    )
}

export default AuthLayout