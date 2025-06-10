// src/components/resources/FeaturedResource.jsx
import { Paper, Typography, Box, Button, Grid, useTheme } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FeaturedResource = ({ resource }) => {
    const theme = useTheme();
    if (!resource) return null;

    return (
        <Paper 
            sx={{
                position: 'relative',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${resource.image})`,
            }}
        >
            {/* Overlay to ensure text readability, using a theme-aware color */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h1" color="inherit" gutterBottom sx={{ typography: 'h1', color: theme.palette.background.yellow }}>
                           {resource.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph sx={{ typography: 'subtitle1', color: 'rgba(255,255,255,0.9)' }}>
                            {resource.summary}
                        </Typography>
                        <Button variant="contained" endIcon={<ArrowForwardIcon />} sx={{ mt: 2, backgroundColor: theme.palette.background.green, '&:hover': {backgroundColor: theme.palette.accent.darkGreen} }}>
                            Read Full Analysis
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default FeaturedResource;