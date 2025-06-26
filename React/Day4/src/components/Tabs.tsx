import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Define RootState type for useSelector
interface RootState {
  movies: {
    favorites: any[];
  };
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const count = useSelector((state: RootState) => state.movies.favorites.length);
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/home');
    }
    else if(newValue === 1) {
      navigate('/movie');
    }
    else if(newValue === 2) {
      navigate('/series');
    }
    else if(newValue === 3) {
      navigate('/favorites');
    }
    else if(newValue === 4) {
      navigate('/profile');
    }
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{ color: 'white' }} label="Home" {...a11yProps(0)} />
          <Tab style={{ color: 'white' }} label="Movie" {...a11yProps(1)} />
          <Tab style={{ color: 'white' }} label="Series" {...a11yProps(2)} />
          <Tab style={{ color: 'white' }} label={`Favorites ${count}`} {...a11yProps(3)} />        
          <Tab style={{ color: 'white' }} label={`Profile`} {...a11yProps(4)} />        
        </Tabs>
      </Box>
    </Box>
  );
}
