
import { Card, CardContent, Typography, Stack, Box} from "@mui/material";
// Fix title and value props
import PropTypes from "prop-types";


const StatCard = ({title, value}) => {
  
    return(

            <Card  variant="outlined"  sx={{flex:"1", flexBasis:"300px",  width: "300px", height: "170px", maxHeight:"170px", maxWidth:"380px", padding: "0.4rem", margin: "auto", border: "solid 1px gray", borderRadius: "0.5rem"}}>
                <CardContent sx={{padding: "0.1rem", margin: "0rem"}}>{title}
                <Typography variant="h2" sx={{fontSize:"0.9rem", fontWeight:"600", padding: "0.4rem", margin: "0rem"}}>
                  
                </Typography>
                <Stack sx={{display: "flex", height: "100%"}}>{value}
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

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default StatCard;