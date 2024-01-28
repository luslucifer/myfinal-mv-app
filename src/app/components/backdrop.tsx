import { CardMedia } from "@mui/material";

interface BackDrop{
    path:string
    
}


export default function BackDrop(props:BackDrop){

    return (
        
        <CardMedia
        // sx={{maxWidth:{sx:'5rem',sm:'14rem',md:'18rem',lg:'12rem',xl:'18rem'},marginRight:'0.5rem'}}
        sx={{minWidth:'20rem',marginRight:'0.8rem'}}
        component={'img'}
        srcSet={`
                    https://image.tmdb.org/t/p/w300/${props.path} 300w,
                    https://image.tmdb.org/t/p/w780/${props.path} 780w,
                    https://image.tmdb.org/t/p/w1280/${props.path} 1280w

                  `}
          sizes="(max-width: 600px) 280px,
                  (max-width: 900px) 540px,
                  (max-width: 1200px) 800px,
                  (max-width: 1800px) 1200px,
                  1800px"
        
        />

    )
}