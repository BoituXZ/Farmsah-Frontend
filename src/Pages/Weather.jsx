import { Box } from '@mui/material'
import React from 'react'
import WeatherCard from '../components/WeatherCard'

const Weather = () => {
  return (
    <Box id="pageContainer"
    sx={{
      display: {xs:"flex",sm:"flex", md:"grid"},
      flexDirection: "column",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "12px",
      padding: "1rem"
    }}
    >
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </Box>
  )
}

export default Weather