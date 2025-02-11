import { useParams } from "react-router-dom";
import classes from './EventDetails.module.css'
import clockSvg from '../../assets/img/clock.svg'
import locationSvg from '../../assets/img/location.svg'
import currency from '../../assets/img/currency.svg'
import { useQuery } from "@tanstack/react-query";
import fetchDetails from "./fetchDetails";
import { Link } from "react-router-dom";
import homeSvg from '../../assets/img/home.svg';

const EventDetails=()=>{
    const {id}=useParams();
    const {data,isLoading,error}=useQuery({
        queryKey:['event',id],
        queryFn:fetchDetails
    })
    
    return(
        <>
        <div className="bg-secondary-subtle">
        <header className="container">
            <Link className={`${classes.link} display-5`} to="/">Return to <img src={homeSvg} width={40} alt="" /> </Link>
        </header>
        <br />
        {isLoading && <h4 className="text-center display-4">Loading.....</h4>}
        {error && <h4 className="text-center display-4">Error occur while getting details.</h4>}
        {data && (
            <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-7">
                <h2>{data.title}</h2>
                <div className="my-3">
                <p className="mb-0">Hosted By:</p>
                <p className="display-6 "><strong>{data.host}</strong></p>
                </div>
                <img src={data.thumbnail} alt="" className="w-100" />
                <div className="my-4">
                    <h3>Details:</h3>
                    <p>{data.details}</p>
                </div>
                <div>
                    {data.type === 'Offline Event' && (
                        <div>
                            <h3>Additional Information:</h3>
                            <p><b>Dress Code: </b> {data.attendenceInfo.dressCode}</p>
                            <p><b>Allowed Age :</b> {data.attendenceInfo.ageLimit}</p>
                        </div>
                    )}
                    <div>
                        <h4>Event Tags:</h4>
                        <div className={classes.tag}>
                            {data.tags.map(el=>(
                                <p className={classes.para}>{el}</p>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4">

                    <div className="card rounded">
                        <div className={`${classes.card} card-body`}>
                        <div className={classes['date-time-container']}>
                            <div style={{alignItems:"center"}}>
                        <img width={'20px'} src={clockSvg} alt="Clock Icon"  />
                        </div>
                        <p>
                        {data.day} {data.date} at {data.startTime} to <br />
                        {data.day} {data.date} at {data.endTime}
                        </p>
                        </div>
                        <div className={classes['address-container']}>
                          <img src={locationSvg} width={'20px'} alt="Location Icon" />
                          <p>
                            {data.address}
                          </p>
                        </div>
                        <div className={classes['address-container']}>
                            <img src={currency} width={'20px'} alt="Currency Icon" />
                            <p>{data.price}</p>
                        </div>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h4>Speakers: ({data.speakers.length})</h4>
                        <br />
                        <div className="row g-3">
                            {data.speakers.map(el=>(
                                <div className="col-md-6">
                                <div className="card h-100">
                                    <div className="card-body text-center h-40">
                                        <img className={classes.img} src={el.image} alt="" />
                                        <p><strong>{el.name}</strong></p>
                                        <p>{el.role}</p>
                                    </div>
                                </div>
                                </div>
                            ))}
                            
                            </div>
                            
                    </div>
                </div>
            </div>
            </div>
        )}
        </div>
        </>
    )
}
export default EventDetails;