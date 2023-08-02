import * as React from 'react';
import { Component } from 'react';

function Navigation(){
    return(
        <>
         <nav className=' w-1/5 bg-slate-100 h-screen absolute left-0'>
            <div className='flex justify-center align-middle text-center' >
            <h1 className=' text-4xl text-red-500 ml-12'>Appigo</h1>
           
            </div>
           
            <ul className=''>
                <li className='  text-blue-500 mt-9 cursor-pointer '>Home</li>
                <li className=' text-blue-500 mt-9 cursor-pointer'>AboutUs</li>
                <li className=' text-blue-500 mt-9 cursor-pointer'>Packages</li>
                <li className=' text-blue-500 mt-9 cursor-pointer'>ContactUs</li>
            </ul>
         </nav>
        </>
    )
}
export default Navigation