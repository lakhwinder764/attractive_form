import React from 'react'
import {Button as MuiButton} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Grid} from "@mui/material"
import Swal from 'sweetalert2'

const useStyles=makeStyles({
    root:{
       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
    },
    
})
const Button = () => {
    const classes=useStyles()
    return (
        <MuiButton classes={{root:classes.root}}
        variant="contained"
        size="large"
        color="primary"
        onClick={()=>{Swal.fire(
            'Success',
            'Data Entered Successfully',
            'success'
          )}}
        >
     Submit
            </MuiButton>
            
        
    )
}

export default Button
