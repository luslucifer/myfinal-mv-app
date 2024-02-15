'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AnimeInfo } from './interface';
import { Grid,Button } from '@mui/material';
import { useState } from 'react';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface BasicTabs{
    infoSub:AnimeInfo
    infoDub:AnimeInfo
    epId:string;
    setEpID: React.Dispatch<React.SetStateAction<string>>;

}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props:BasicTabs) {
    const subInfo = props.infoSub
    const dubInfo = props.infoDub
    const epId = props.epId
    const setEpID = (id:string)=>{props.setEpID(id)}
    const [isDub, setIsDub] = useState(true);
  const [epList, setEpList] = useState(subInfo.episodes);
    
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs textColor='secondary' indicatorColor='secondary' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="subed" {...a11yProps(0)} />
          <Tab label="dubed" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Grid container>
          {subInfo.episodes.map((obj, index) => {
            const epNo = index + 1;
            return (
              <Grid item  key={index} spacing={0}>
                <Button color={obj.id==epId ? 'error' : 'secondary'} variant="outlined" sx={{width:'100%'}} onClick={()=>{props.setEpID(obj.id)}}>{epNo}  </Button>
              </Grid>
            );
          })}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Grid container>
          {dubInfo!= undefined ?dubInfo.episodes.map((obj, index) => {
            const epNo = index + 1;
            return (
              <Grid item  key={index} spacing={0}>
                <Button color={obj.id==epId ? 'error' : 'secondary'} variant="outlined" sx={{width:'100%'}} onClick={()=>{props.setEpID(obj.id)}}>{epNo}  </Button>
              </Grid>
            );
          }): null}
        </Grid>
      </CustomTabPanel>
      
      <h1>{epId}</h1>
    </Box>
  );
}