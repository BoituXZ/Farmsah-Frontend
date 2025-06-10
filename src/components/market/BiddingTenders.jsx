// src/components/market/BiddingTenders.jsx
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Chip, Divider, Grid, Typography, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GavelIcon from '@mui/icons-material/Gavel';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { tenderData } from '../../data/mockMarketData';

const TenderCard = ({ tender }) => {
    // --- Original Logic Preserved ---
    const isSell = tender.type === 'SELL_OFFER';
    const statusColor = tender.status === 'Open' ? 'success' : 'default';

    return (
        // --- STYLING CHANGE: Wrapped in styled Paper ---
        <Paper
            elevation={4}
            sx={{
                background: (theme) => theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(31, 31, 31, 0.4)',
                backdropFilter: 'blur(15px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'text.primary'
            }}
        >
            <Accordion sx={{ background: 'transparent', boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {/* Your Original Grid Layout is Preserved */}
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={1}>{isSell ? <SellIcon color="primary"/> : <ShoppingCartIcon color="secondary"/>}</Grid>
                        <Grid item xs={3}>
                            <Typography sx={{fontWeight: 'bold'}}>{tender.commodity}</Typography>
                            <Typography variant="caption">{isSell ? "Seller's Offer" : "Buyer's Request (RFP)"}</Typography>
                        </Grid>
                        <Grid item xs={2}><Typography>{tender.quantity}</Typography></Grid>
                        <Grid item xs={2}><Typography>Closes: {tender.closingDate}</Typography></Grid>
                        <Grid item xs={2}><Typography>{isSell ? `Bids: ${tender.bids}` : `Offers: ${tender.offers}`}</Typography></Grid>
                        <Grid item xs={2}><Chip label={tender.status} color={statusColor} size="small" /></Grid>
                    </Grid>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
                    {/* Your Original Accordion Details Layout is Preserved */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6">Listing Details</Typography>
                            <Typography variant="body2" mt={1}><strong>Quality Specs:</strong> {tender.quality}</Typography>
                            <Typography variant="body2"><strong>Location:</strong> {tender.location}</Typography>
                            {tender.certifications.length > 0 && <Box mt={1}><strong>Certifications: </strong>{tender.certifications.map(c => <Chip key={c} label={c} size="small" sx={{mr: 0.5}}/>)}</Box>}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6">{isSell ? "Current Highest Bid" : "Current Best Offer"}</Typography>
                            <Typography variant="h5" color="primary.main">{isSell ? tender.highestBid : tender.bestOffer}</Typography>
                            <Box sx={{ mt: 2, display: 'flex', gap: 1}}>
                                <Button variant="contained" startIcon={<GavelIcon/>} disabled={tender.status !== 'Open'}>{isSell ? "Place Bid" : "Submit Offer"}</Button>
                                <Button variant="outlined" startIcon={<EditNoteIcon/>}>Negotiate</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Paper>
    )
}

const BiddingTenders = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {tenderData.map(tender => <TenderCard key={tender.id} tender={tender} />)}
        </Box>
    )
}

export default BiddingTenders;