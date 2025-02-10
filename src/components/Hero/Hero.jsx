import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Hero.module.css'
const Hero=()=>{
    const[data,setData]=useState();
    useEffect(()=>{
        fetch("https://blitz-gather-backend.vercel.app/events").then(resp=>resp.json()).then(resp=>setData(resp));
    },[]);
    return(
        <>
        <div className="container">
            <nav className="navbar">
            <h2 className=" display-5">Meetup Events</h2>
            <select name="" id="" className="form-select w-auto">
                <option value="Both">Select Event Type</option>
                <option value="Both">Both</option>
                <option value="Online Event">Online Event</option>
                <option value="Offline Event">Offline Event</option>
            </select>
            </nav>

            <div className="row g-4">
            {data && data.map(el=>(
                
                <div className="col-md-4" >
                    <Link className={classes.link} to={`/events/details/${el._id}`}>
                <div className={`${classes['img-container']}`}>
                <img className={`${classes.img}`} src={el.thumbnail} alt="" />
                <p className={`${classes['event-type']}`}>{el.type}</p>
                <p>{el.day} {el.date} * {el.startTime} IST</p>
                <p><strong>{el.title}</strong></p>
                </div>
                </Link>
                </div>
                
            ))}
            </div>

           
        </div>
        </>
    )
}

export default Hero;