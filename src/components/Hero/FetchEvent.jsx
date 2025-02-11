
const fetchEvent=async({queryKey})=>{
    
    let type=queryKey[1] ;
    const title=queryKey[2];

    let titleUrl=`https://blitz-gather-backend.vercel.app/events/title/${title}`;
    let events = []; 
    if (type !== "Both") {
        const resp = await fetch(`https://blitz-gather-backend.vercel.app/events/type/${type}`);
        if (!resp.ok) {
           return [];
        }
        events = await resp.json();
    } else {
        const resp = await fetch("https://blitz-gather-backend.vercel.app/events");
        if (!resp.ok) {
            return [];
        }
        events = await resp.json();
    }

    if(title){
        let resp=await fetch(titleUrl);
        if(!resp.ok){
            return [];
        }
        const titleEvents=await resp.json();
        events=events.filter(el=>titleEvents.some(elt=>elt._id === el._id))
    }
    return events;
}

export default fetchEvent;