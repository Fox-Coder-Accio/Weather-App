import React,{useState} from "react";
import summer from "./images/summer.png"
import winter from "./images/winter.jpg"

const App = () => {
  const[lat, setLat] = useState(0)
  const[long, setLong] = useState(0)
  const [hemisphere, setHemisphere] = useState("")
  const [month, setMonth] = useState( new Date().getMonth()+1)

  

  function getLocation(){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((positions)=>{
              setLat(positions.coords.latitude)
              setLong(positions.coords.longitude)


              if(positions.coords.latitude>0){
                setHemisphere("Northen Hemisphere")
              }
              else if(positions.coords.latitude<0){
                setHemisphere("Southern Hemisphere")
              }
              else{
                setHemisphere("Equator")
              }
          })
      }
  }



  return(
    <div>
        {/* <h1>Latitude: {lat}</h1>
        <h1>Longitude: {long}</h1>
        <h1>Hemisphere: {hemisphere}</h1>
        <h1>Month: {month}</h1> */}



      <button onClick={getLocation}>Get Location</button>
      {
           hemisphere!="" && (
            (hemisphere=="Northen Hemisphere" && (month>=4 && month<=10))|| 
            (hemisphere=="Southern Hemisphere" && (month<4 || month>10)) )
           && (
            <div>
                <h1>It's Summer</h1>
                <img src={summer} alt="Summer Season" />        
            </div>
           )
      }

      {
           hemisphere!="" && ((hemisphere=="Northen Hemisphere" && (month<4 || month>10))  ||(hemisphere=="Southern Hemisphere" && (month>=4 && month<=10)))

           && (
            <div>
                <h1>It's Winter</h1>
                <img style={{width:"500px"}} src={winter} alt="Winter Season" />        
            </div>
           )
      }


    </div>
  )
}

export default App;





// equiator, 
// rainy season,