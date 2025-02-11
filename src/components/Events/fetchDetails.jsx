
const fetchDetails=async({queryKey})=>{
    const key=queryKey[1];

    const resp=await fetch(`https://blitz-gather-backend.vercel.app/events/_id/${key}`);
    if(!resp.ok){
        throw Error(`Error while fetching ${key}`)
    }
    return resp.json();
}
export default fetchDetails;