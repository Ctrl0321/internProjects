import * as React from 'react';
import '../css/Home.css'
import { Link } from 'react-router-dom';


function Home(){

    
    return(
        <>
        <div className='btn-container'>
        <Link to={"/addEmployee"}>
            <button className='home-btn'><span>Add Employee</span></button>
        </Link>
        <Link to={"/table"}>
            <button className='home-btn'><span>Show Employee</span></button>
        </Link>
        <Link to={"/findTable"}>
            <button className='home-btn'><span>Search Employee</span></button>
        </Link>
        </div>
        </>
    )
}

export default Home