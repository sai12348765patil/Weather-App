import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
import "./Loaction.css";





function Location (){

    let [data,setdata] = useState([]);

    let [loading , setloding] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        getLoaction();
    } , []) ;

    function getLoaction(){
       return  (
        fetch("https://geolocation-db.com/json/").then((e)=>e.json()).then(res=>setdata(res)),
       setloding(true)
       )
    }
    console.log(data);

    const createPost = () => {
        navigate('/homepage',
            {
                state: {
                    data
                }
            });
    }
     


return (
    <div>
        <h1>This App needs Your Location</h1>
        <button onClick={getLoaction}>Yes</button>
        <button>No</button>
        <div className= {loading===true ? "showing" : "notshow"}> your city is {data.city}</div>
              <br/>
              <br/>

              <button onClick={() => { createPost() }}>
                    GO TO WEATHER APP
                </button>   
    </div>
)



}

export  {Location};