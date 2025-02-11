import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchEvent from './FetchEvent';
import classes from './Hero.module.css';


const Hero=({title})=>{
    
    const[type,setType]=useState("Both");
    const {data,isLoading,error}=useQuery({
        queryKey: ["events",type,title],
        queryFn:fetchEvent,
      });
      
    console.log("after fetching data is",data);
    return(
        <>
        <div className="container">
            <div className="d-flex justify-content-between">
            <h2 className=" display-5">Meetup Events</h2>
            <div>
            <label htmlFor="">Select Event Type:</label>
            <select name="" id="" className="form-select w-auto" onChange={event=>setType(event.target.value)}>
                <option value="Both">Both</option>
                <option value="Online Event">Online Event</option>
                <option value="Offline Event">Offline Event</option>
            </select>
            </div>
            </div>
            {isLoading && <h4 className="text-center display-4">Loading.....</h4>}
            {error && <h4 className="text-center display-4">Error occur while getting data.</h4>}
            {!isLoading && !error && !data.length && <h4 className="text-center display-4">No such data found.</h4>}
            <br />
            <div className="row g-4 justify-content-center">
                
            {data?.length>0 && data.map(el=>(
                
                <div className="col-md-4" key={el._id} >
                    <Link className={classes.link} to={`/events/details/${el._id}`}>
                <div className={`${classes['img-container']}`}>
                <img className={`${classes.img}`} src={el.thumbnail} alt="" />
                <p className={`${classes['event-type']}`}>{el.type}</p>
                <p>{el.day} {el.date} * {el.startTime} IST</p>
                <p className={classes.p}><strong>{el.title}</strong></p>
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