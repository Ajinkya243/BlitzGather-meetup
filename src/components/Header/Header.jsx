import {Link} from 'react-router-dom'
import classes from './Header.module.css'
const Header=()=>{
    
    return (
        <>
        <div className="container">
            <nav className='navbar navbar-expand-lg'>
            {/* <Link className={`${classes["logo-text"]} navbar-brand`} to="/">BlitzGather</Link> */}
            <Link className={`${classes.logoText} navbar-brand`} to="/">BlitzGather</Link>
            <input type="text" className="ms-auto"  placeholder="Search by title or tag"  />
            </nav>
            <hr />
            </div>    
        </>
    )
}
export default Header;