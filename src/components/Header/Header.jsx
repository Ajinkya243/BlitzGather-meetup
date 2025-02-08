import {Link} from 'react-router-dom'
import classes from './Header.module.css'
const Header=()=>{
    
    return (
        <>
        <div className="container">
            <nav className='navbar navbar-expand-lg'>
            {/* <Link className={`${classes["logo-text"]} navbar-brand`} to="/">BlitzGather</Link> */}
            <Link className={`${classes.logoText} navbar-brand`} to="/">BlitzGather</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#searchItem" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="searchItem">
    <input type="text" className='ms-auto form-control w-auto'   placeholder="Search by title or tag"   />
    </div>
           
            </nav>
            <hr />
            </div>    
        </>
    )
}
export default Header;