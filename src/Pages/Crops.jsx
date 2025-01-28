import { Box, Button, IconButton, Modal, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Close } from '@mui/icons-material';

const Crops = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newFarmName, setFarmName] = useState("");
  const [newLocation, setLocation] = useState("");
  const [newSize, setSize] = useState("");
  const [newCrops, setCrops] = useState("");
  const [newLivestock, setLivestock] = useState("");

  return (
    
    <div>
      Qwerty
    </div>
  )
}

export default Crops