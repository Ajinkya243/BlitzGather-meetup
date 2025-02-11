import { useState } from 'react';
import {Link} from 'react-router-dom'
import classes from './Header.module.css'
const Header=({userValue})=>{
    const[value,setValue]=useState(userValue);
    const handleChange=(event)=>{
        userValue(event.target.value);
        setValue(event.target.value);
    }
    const resetValue=()=>{
        userValue("");
        setValue("");
    }
    return (
        <>
        <div className="container">
            <nav className='navbar navbar-expand-lg'>
            <Link className={`${classes.logoText} navbar-brand`} to="/" onClick={resetValue}>BlitzGather</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#searchItem" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="searchItem">
    <input type="text" className='ms-auto form-control w-auto'   placeholder="Search by Title or Tag"  onChange={handleChange} value={value} />
    </div>
           
            </nav>
            <hr />
            </div>    
        </>
    )
}
export default Header;