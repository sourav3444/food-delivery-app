 import { useRouteError } from "react-router-dom";
 
 const Error= ()=>{
    const err=useRouteError();
    return(
        <>
            <h1>Oops.!!!!!</h1>
            <h4>You are in wrong path</h4>
            <h6>{err.status}+{err.statusText}</h6>
        </>
    )
 }
 export default Error;