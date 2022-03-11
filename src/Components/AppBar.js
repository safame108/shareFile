import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#5a72ff'}}>
        <Toolbar>
          <ArrowBackIosIcon/>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {props.pageName}
          </Typography>
          <HelpOutlineRoundedIcon fontSize='large'/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
