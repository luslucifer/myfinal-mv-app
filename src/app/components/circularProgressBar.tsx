'use client'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

interface RootCircularProgressbarComponent{
    number:number
}

export default function CircularProgressbarComponent(props:RootCircularProgressbarComponent) {

  return (
    <CircularProgressbar
      value={props.number}
      text={`${props.number}`}
      styles={{
        // Customize the root svg element
        root: {width:'2rem'},
        // Customize the path, i.e. the "completed progress"
        path: {
          // Path color
          stroke: `rgba(62, 152, 199, ${props.number / 100})`,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        //   strokeLinecap: "butt",
          // Customize transition animation
          transition: "stroke-dashoffset 0.5s ease 0s",
          // Rotate the path
        //   transform: "rotate(0.25turn)",
        //   transformOrigin: "center center",
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
          // Trail color
        //   stroke: "#d6d6d6",
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",
          // Rotate the trail
        //   transform: "rotate(0.25turn)",
          transformOrigin: "center center",
        },
        // Customize the text
        text: {
          // Text color
          fill: "#f88",
          // Text size
          fontSize: "2em",
          textAlign:'center'
        },
        // Customize background - only used when the `background` prop is true
        background: {
        //   fill: "#3e98c7",
        },
      }}
    />
  );
}
