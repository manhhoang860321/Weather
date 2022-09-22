import React from "react";
export default function Capital() {
    //   let [weather, setWeather] = useState();
    const [address, setAddress] = useState();
    let data = [];
  
    async function getWeather() {
      // try {
      //   const reponse = await axios.get(
      //     `${BASE_URL}/current.json?key=${API_KEY}&q=${address}`
      //   );
      //   console.log(reponse?.data);
      //   setWeather(reponse?.data);
      // } catch (error) {
      //   console.error(error);
      // }
  
      if (address) {
        const appid = "eb5560de6a31080f8e00d5068c23ac7b";
        const q = address;
        const units = "metric";
  
        // let data = [];
  
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=${units}&appid=${appid}`
          );
          data = await res.json();
  
          console.log(data);
          // const appid = "eb5560de6a31080f8e00d5068c23ac7b";
        } catch (error) {
          console.log("loi roi");
        }
  
        // if (data && data.coord.lat && data.coord.lat) {
        //   const lat = data.coord.lat;
        //   const lon = data.coord.lon;
        //   const exclude = "daily";
  
        //   if (data.coord.lat && data.coord.lat) {
        //     const resdata = await fetch(
        //       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}`
        //     );
  
        //     const dataLatLon = await resdata.json();
        //     console.log(dataLatLon);
        //   }
        // }
  
        // console.log(address);
        console.log("asd");
        console.log(data);
      }
    }
    return (

    );
}