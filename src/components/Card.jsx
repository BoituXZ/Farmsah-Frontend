
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";
// Fix title and value props


const statCard = () => {

    return(

            <Card  variant="outlined"  sx={{width: "300px", height: "170px", maxHeight:"170px", padding: "0.4rem", margin: "0.4rem", border: "solid 1px black"}}>
                <CardContent sx={{padding: "0.1rem", margin: "0rem"}}>
                <Typography variant="h1" sx={{fontSize:"0.9rem", fontWeight:"500", padding: "0.4rem", margin: "0rem"}}>
                  
                </Typography>
                <Stack sx={{display: "flex", height: "100%"}}>
                <Typography variant="h1" sx={{fontSize:"0.9rem", fontWeight:"500", padding: "0.4rem", margin: "0rem"}}>
                  
                </Typography>
                <Box sx={{flexGrow: "1", width: "100%", height: "100%", border: "solid 1px black"}}>
                  This box should have charts
                </Box>
                </Stack>
                </CardContent>
              </Card>
    )
};


export default statCard;