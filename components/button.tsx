import React from 'react'
import { Grid } from '@mui/material';

interface MainButtonProps {
    label: string;
}

const MainButton: React.FC<MainButtonProps> = ({ label }) => (
    <Grid item xs={12}>
        <button className='main-button'>{label}</button>
    </Grid>
); 

const AltButton: React.FC<MainButtonProps> = ({ label }) => (
    <Grid item xs={12}>
        <button className='alt-button'>{label}</button>
    </Grid>
); 

export { MainButton, AltButton }
