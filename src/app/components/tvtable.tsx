'use client'
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SeasonM, TvDetailsM } from "../tv/[[...id]]/interface";
import {
  formatDateToWords,
  replaceSpecialCharsAndSpaces,
} from "../data-storage/fuctions-data";
import { Rating,Autocomplete, TextField, Typography, Select, MenuItem,InputLabel,Box,FormControl } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import Link from "next/link";
interface BasickSeasonTable {
  details: TvDetailsM;
  seasonData: SeasonM;
  currentEp : number ;
}



export default function SeasonTable(props: BasickSeasonTable) {
    // var options = []
    // for(let i = 1;i<=props.details.number_of_seasons;i++){
    //   options = [...options,'season '+ i]   
    // }
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
      };
    
    const options = Array.from({ length: props.details.number_of_seasons }, (_, i) => ({
        label: `Season ${i + 1}`,
        value: i + 1,
      }));    // const options = [1,2,3,4,5,6,7]
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{'Season '+props.seasonData.season_number}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {options.map((obj,index)=>{

            return (
                <Link href={`/tv/${replaceSpecialCharsAndSpaces(props.details.name)+'-'+ props.details.id+'/'+(index+1)+'/'+'1'}`} key={index}>
                    <MenuItem> {obj.label}</MenuItem>
                </Link>
            )
          })}
        </Select>
      </FormControl>
    </Box>
            </TableCell>
            <TableCell> Title</TableCell>
            <TableCell> Release Date</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.seasonData.episodes.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                
                <TableCell component="th" scope="row">
                <Link
                href={`/tv/${
                  replaceSpecialCharsAndSpaces(props.details.name) +
                  "-" +
                  props.details.id
                }/${props.seasonData.season_number}/${row.episode_number}`}
              >
                  Episode {row.episode_number}
                  </Link>
                </TableCell>
                <TableCell>
              <Link
                href={`/tv/${
                  replaceSpecialCharsAndSpaces(props.details.name) +
                  "-" +
                  props.details.id
                }/${props.seasonData.season_number}/${row.episode_number}`}
              >
                    {row.name}
                    </Link>
                    </TableCell>
                <TableCell>{formatDateToWords(row.air_date)}</TableCell>
                <TableCell>
                  <Rating
                    value={row.vote_average / 2}
                    readOnly
                    precision={0.5}
                  ></Rating>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
