import { Box } from '@mui/material'
import InsightCard from '../components/InsightCard'


const Insights = () => {
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