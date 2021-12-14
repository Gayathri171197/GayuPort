import React from "react";
import { useLocation } from "react-router";

function NotFound(){
        let location=useLocation();
        console.log(location);
    return(
        <div>
            <h1><center>Resource not found at {location.pathname}!!!</center></h1>
        </div>
    );
}
 export default NotFound;