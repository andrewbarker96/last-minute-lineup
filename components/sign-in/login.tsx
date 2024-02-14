import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system'
import Button from '@mui/material/Button';

interface GridTextFieldProps {
  label: string;
}

const GridTextField: React.FC<GridTextFieldProps> = ({ label }) => (
  <Grid item xs={12} sm={12} md={12}>
    <TextField label={label} fullWidth />
  </Grid>
);

const SignIn = () => {
    
return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                    <GridTextField label="Username" />
                    <GridTextField label="Password" />
                    <Grid item xs={12} className='flex justify-center'>
                        <Button>Login</Button>
                    </Grid>
                </Grid>
            </Box>
        </LocalizationProvider>
    </div>
);
};

export default SignIn;