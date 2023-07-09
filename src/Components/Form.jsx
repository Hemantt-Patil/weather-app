import React, { useState } from 'react'
import { Button,Box,InputBase ,styled } from '@mui/material'
import { getWeather } from '../services/api'

const Container=styled(Box)({
  background:'#445A6F',
  padding:'10px',
  
})
const Input =styled(InputBase)({
  color:'#fff',
  marginRight:'20px',
  fontsize:'18px'
})
const GetButton=styled(Button)({
  background:'#e67e22',
  
})

const Form = ({setResult}) => {
const [data,setData]=useState({city:'',country:''});

const getWeatherInfo=async()=>{
  let response=await getWeather(data.city,data.country);
  setResult(response)
}
const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
  console.log(data)
}

  return (
    <Container>
        <Input 
          placeholder='City'
          onChange={(e)=> handleChange(e)}
          name='city'
        />
        <Input 
        placeholder='Country'
        onChange={(e)=> handleChange(e)}
        name='country'
        />
        <GetButton variant='contained' onClick={()=>getWeatherInfo()}>
            Get Weather
        </GetButton>
    </Container>
  )
}

export default Form