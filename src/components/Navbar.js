import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Table from "../components/Table"

import { makeStyles } from '@mui/styles';
import Form from "./Form"
const useStyles=makeStyles({
    root:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
})
export default function DenseAppBar() {
    const classes=useStyles()
  return (
      <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root}>
        <Toolbar variant="dense">
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" component="div">
            Education Mangement System
          </Typography>
        </Toolbar>
      </AppBar>

    </Box>
    <Form />
    <Table/>
       </>
  );
}
