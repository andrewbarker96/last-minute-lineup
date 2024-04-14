import React from 'react'
import { Grid } from '@mui/material';

interface MainButtonProps {
    label: string;
}

const MainButton: React.FC<MainButtonProps> = ({ label }) => (
    <button className='main-button' style={{marginLeft:'2%', marginRight:'2%'}}>{label}</button>

); 

const AltButton: React.FC<MainButtonProps> = ({ label }) => (
    <button className='alt-button' style={{marginLeft:'2%', marginRight:'2%'}}>{label}</button>

); 

export { MainButton, AltButton }
