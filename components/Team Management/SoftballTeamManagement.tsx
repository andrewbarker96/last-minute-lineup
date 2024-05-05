
import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
  
  interface Player {
    name: string;
    email: string;
    phone: string;
  }
  
  const SoftballTeamManagement: React.FC = () => {
    const [roster, setRoster] = useState<Player[]>([
      { name: 'Player 1', email: 'player1@example.com', phone: '123-456-7890' },
      { name: 'Player 2', email: 'player2@example.com', phone: '123-456-7891' },
      { name: 'Player 3', email: 'player3@example.com', phone: '123-456-7892' },
      { name: 'Player 4', email: 'player4@example.com', phone: '123-456-7893' },
      { name: 'Player 5', email: 'player5@example.com', phone: '123-456-7894' },
      { name: 'Player 6', email: 'player6@example.com', phone: '123-456-7895' },
      { name: 'Player 7', email: 'player7@example.com', phone: '123-456-7896' },
      { name: 'Player 8', email: 'player8@example.com', phone: '123-456-7897' },
      { name: 'Player 9', email: 'player9@example.com', phone: '123-456-7898' },
      { name: 'Player 10', email: 'player10@example.com', phone: '123-456-7899' },
    ]);
  
    const [newPlayer, setNewPlayer] = useState<Player>({ name: '', email: '', phone: '' });
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewPlayer({ ...newPlayer, [event.target.name]: event.target.value });
    };
  
    const handleAddPlayer = () => {
      setRoster([...roster, newPlayer]);
      setNewPlayer({ name: '', email: '', phone: '' });
    };
  
    return (
      <>
        <div>
          <Typography variant="h4" gutterBottom>
            Softball Team Management
          </Typography>
          <Typography variant="h5" gutterBottom>
            Add Player
          </Typography>
          <TextField name="name" label="Name" value={newPlayer.name} onChange={handleInputChange} /> <br />
          <TextField name="email" label="Email" value={newPlayer.email} onChange={handleInputChange} /> <br />
          <TextField name="phone" label="Phone" value={newPlayer.phone} onChange={handleInputChange} /> <br />
          <Button variant="contained" color="primary" onClick={handleAddPlayer}>
            Add Player
          </Button>
          <Typography variant="h5" gutterBottom>
            Roster
          </Typography>
          <List>
            {roster.map((player, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={player.name}
                  secondary={`Email: ${player.email}, Phone: ${player.phone}`}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </>
    );
  };
  
  export default SoftballTeamManagement;