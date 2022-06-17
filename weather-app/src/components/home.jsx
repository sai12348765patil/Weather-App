import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import img1 from "../photos/rain.png" ;
import img2 from "../photos/cloudy.png"  ;
import img3 from "../photos/sun.png" ;

import "./home.css" ;




function Homepage(){

    const { state } = useLocation();

    var latt = state.data.latitude ;

    var long = state.data.longitude ;

    let [weather , setweather] = useState([]);

    useEffect(()=>{
        document.title = "weather app" ;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${long}&appid=3858180ec8b550afbff27507d609bd50`)
        .then((e)=>e.json()).then(res=>setweather(res))
    }, [])

    let dummy =Math.floor(weather.main.temp - 271) ;
    // let dummy = 10;


    console.log(weather);



    return (
        <div>
            {/* <div>{state.data.city}</div> */}
            
           <div id="searchbar">
             <input className="searchbarsearch" type="text"  placeholder="enter city name"/>
             <button className="searchbarbutton">Search</button>
           </div>

           <div id="showing_weekly">
            <div>
               <h2>Sun</h2> 
               <h3>{dummy} &deg;C</h3>
               <img className="img11" src={img1} alt=""/>
            </div>
            <div>
            <h2>Mon</h2>
            <h3>{dummy+1} &deg;C</h3>
            <img className="img11" src={img2}  alt=""/>
            </div>
            <div>
            <h2>Tue</h2>
            <h3>{dummy+1} &deg;C</h3>
            <img className="img11" src={img2}  alt=""/>
            </div>
            <div>
            <h2>Wed</h2>
            <h3>{dummy-2} &deg;C</h3>
            <img className="img11" src={img3}  alt=""/>
            </div>
            <div>
            <h2>Thr</h2>
            <h3>{dummy+2} &deg;C</h3>
            <img className="img11" src={img3}  alt=""/>
            </div>
            <div>
            <h2>Fri</h2>
            <h3>{dummy-1} &deg;C</h3>
            <img className="img11" src={img1}  alt=""/>
            </div>
            <div>
            <h2>Sat</h2>
            <h3>{dummy+1} &deg;C</h3>
            <img className="img11" src={img2}  alt=""/>
            </div>
           
           </div>
            
           <br/>
           <br/>

        <div id="main_temp_all_div">

            <div id="today_main_temp">
                <h1>{dummy}&deg;C</h1>
                <img className="img33" src={img3}  alt=""/>
           </div>

           <div id="hourly_temp">
                  <div>
                    <h3>{dummy-2}&deg;C</h3>
                    <h4>9 Am</h4>
                    </div>
                  <div>
                  <h3>{dummy}&deg;C</h3>
                    <h4>12 Pm</h4>
                  </div>
                  <div>
                  <h3>{dummy+1}&deg;C</h3>
                    <h4>3 Pm</h4>
                  </div>
                  <div>
                  <h3>{dummy-2}&deg;C</h3>
                    <h4>6 Pm</h4>
                  </div>
                  <div>
                  <h3>{dummy-4}&deg;C</h3>
                    <h4>9 Pm</h4>
                  </div>
           </div>

            <div className="prsssure_humadity">
                 <div>
                    <h3>Pressure</h3>
                    <h4>{weather.main.pressure}</h4>
                 </div>
                 <div>
                 <h3>Humidity</h3>
                 <h4>{weather.main.humidity}%</h4>
                 </div>
            </div>

            <br/>
            <br/>

            <div className="prsssure_humadity">
                 <div>
                    <h3>Sunrise</h3>
                    <h4>6 Am 40min</h4>
                 </div>
                 <div>
                 <h3>Sunset</h3>
                 <h4>7pm 5min</h4>
                 </div>
            </div>

            <br/>
            <br/>
        </div>


        </div>
    )
}

export default Homepage;