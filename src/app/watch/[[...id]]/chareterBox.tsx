import { Box, Card, Typography } from "@mui/material";
import { Node2 } from "./interface";
import Image from "next/image";
import Link from "next/link";



interface CharacterBox {
  obj: Node2;
}

export default function CharacterBox(props: CharacterBox) {
  const obj = props.obj;

  return (
    <Link href={obj.siteUrl}>
    <Card sx={{ minWidth: `9rem` }}>
      <Box
        sx={{
            position: 'relative',
          width: '100%',
          aspectRatio: `${230 / 365}`, // Set the aspect ratio based on intrinsic size
        }}
        >
        <Image alt={`avatar of ${obj.name.full}`} src={obj.image.large} objectFit="cover" layout="fill" />
      </Box>
      <Typography component={'h6'} textAlign={"center"}> {obj.name.full}</Typography>
    </Card>
    </Link>
  );
}
