import React from 'react'
import { Theme } from '../theme/Theme'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


const Farms = () => {

  return(
    <ThemeProvider theme={Theme(mode)}>
      <CssBaseline />
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: homeTheme.palette.background.green}}>
        <h1 style={{color: 'white'}}>Farms</h1>
      </div>
    </ThemeProvider>
  )

}
export default Farms