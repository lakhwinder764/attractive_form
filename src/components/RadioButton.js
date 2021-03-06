import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const RadioButton = () => {
    return (
        <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
           <FormControlLabel value="female" control={<Radio />} label="Female" />
           <FormControlLabel value="male" control={<Radio />} label="Male" />
           <FormControlLabel value="other" control={<Radio />} label="Other" />
       </RadioGroup>
      </FormControl>
    )
}

export default RadioButton
