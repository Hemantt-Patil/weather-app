import axios from 'axios'
const API_KEY='e28fd5a33fdc0f51b5cf5d26b12ae615';
const API_URL='http://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city,country)=>{
    try{
        let response=await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
        return response.data;
    }catch(error){
        console.log(error.message)
        return error.response;
    }
}