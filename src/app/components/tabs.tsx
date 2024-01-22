"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface tabx{
function:any;
value:number}
export default function CenteredTabs(props:tabx) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    props.function(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={props.value} onChange={handleChange} centered textColor='secondary' indicatorColor='secondary'>
        <Tab label="Popular Movies"  />
        <Tab label="Trending Movies" />
        <Tab label="New Movie" />
      </Tabs>
    </Box>
  );
}