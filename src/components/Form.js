import React from 'react'
import RadioButton from "./RadioButton"
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import Button from "./Button"
import {Grid} from "@mui/material"
import Select from "./Select"
const useStyles=makeStyles({
    root:{
       margin:50,
},
       
    
    
    textfield:{
        marginBottom:125
    }

})
const Form = () => {
    const classes=useStyles();
    return (
        <div style={{marginTop:"70px",marginLeft:"70px"}} >
            <Card variant="outlined" style={{width:"600px",height:"300px",padding:"10px"}}>
        <Grid container  classes={{root:classes.root}} columnSpacing={3} rowSpacing={3} justifyContent="space-around"
        alignItems="center" >
  <Grid item xs={6}  >
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
 </Grid>
 <Grid item xs={6} >
  <TextField  id="outlined-basic" label="Outlined" variant="outlined" />
  </Grid>
  <Grid item xs={6} >
  <TextField  id="outlined-basic" label="Outlined" variant="outlined" />
  </Grid>
  <Grid item xs={6} >
  <RadioButton/>
  </Grid>
  <Grid item xs={12} >
  <Select/>
  </Grid>
  <Grid item xs={12} >
  <Button/>   
  </Grid>
</Grid>
</Card>
</div>
      
    )
}

export default Form
