import { Box } from '@mui/material'
import InsightCard from '../components/InsightCard'
import { useEffect, useState } from 'react'




const Insights = () => {
  const [insights, setInsights] = useState([])
  useEffect(()=>{
    const fetchInsights = async () => {
      try{

        const response = await fetch("http://localhost:3010/user/insights", {
          credentials: "include"
        });

        if (!response.ok){
          throw new Error("Failed to fetch Insights")
        }

        const data = await response.json();
        setInsights(data)

      }catch(error){
        console.error("Error fetching insights", error)

      }
    }


    fetchInsights
  }, [])
  return (
    <Box
    id="insightPageContainer"
    sx={{
      display: {xs:"flex",sm:"flex", md:"grid"},
      flexDirection: "column",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "12px",
      padding: "1rem"
    }}
    >
      <InsightCard />
      <InsightCard />
      <InsightCard />
      <InsightCard />
      <InsightCard />
      <InsightCard />



    </Box>
  )
}

export default Insights