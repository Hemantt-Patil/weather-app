import React from 'react'
import { Box ,Typography ,styled} from '@mui/material'

const Row=styled(Typography)({
    display:'flex',
    padding:10,
    
    fontSize:25,
    letterSpacing:1.5,
    lineHeight:1,
    '& > i':{
      marginRight:10,
      padding:1
    }
})
const Start=styled(Typography)({
  color:'red',
  margin:'50px 50px',
  padding:'50px'
})
const Information = ({result}) => {
  return (
      
      result && Object.keys(result).length > 0 ?
      <Box style={{margin:'30px 60px'}}>
          <Row><i class="fa-solid fa-location-dot"></i>Location: {result.name}, {result.sys.country}</Row>
          <Row><i class="fa-solid fa-temperature-three-quarters"></i>Temperature: {result.main.temp}</Row>
          <Row><i class="fa-solid fa-droplet"></i>Humidity: {result.main.humidity}</Row>
          <Row><i class="fa-solid fa-sun"></i>Sunrise: {new Date(result.sys.sunrise*1000).toLocaleTimeString()}</Row>
          <Row><i class="fa-regular fa-sun"></i>Sunset: {new Date(result.sys.sunset*1000).toLocaleTimeString()}</Row>
          <Row><i class="fa-solid fa-bars"></i>Humidity: {result.weather[0].main}</Row>
          <Row><i class="fa-solid fa-cloud"></i>Clouds: {result.clouds.all}%</Row>
      </Box>:
      <Start>Please Enter the Values to Check Weather</Start>
  )
}

export default Information