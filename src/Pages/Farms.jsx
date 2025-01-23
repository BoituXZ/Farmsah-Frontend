import { Theme } from '../theme/Theme'
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';


const Farms = () => {

  return(
    <ThemeProvider theme={Theme}>
      <Box id="page"
        sx={{ border: "solid 1px red",
          width: "100%",
          height: "100%",
        }}
      
      >
        lorem ipsum
      </Box>
    </ThemeProvider>
  )

}
export default Farms