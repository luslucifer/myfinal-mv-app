import Watch from "./page.client";
import { getInfo,getAnilist } from "./page.client";
import { Metadata, ResolvingMetadata } from 'next'
import { Qry } from "./interface"; 
type Props = {
  params:string[]
}
 
export async function generateMetadata(
  { params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

const id: string = params.id[0];
  const splited = id.split(/-/g);
  if (splited[splited.length - 1] == "dub") {
    splited.pop();
  }
  const serQry: string = splited.join(" ");
  const [info, anilistDetail] = await Promise.all([
    getInfo(id),
    getAnilist(serQry),
  ]);
    const animeDetails:Qry = anilistDetail
    var title:string
    var description:string
    var banner :string
    var keywords:string
    
    if(animeDetails.errors==undefined){
        description= animeDetails.data.Media.description
        title = animeDetails.data.Media.title.english
        banner = animeDetails.data.Media.bannerImage
        keywords = animeDetails.data.Media.genres

        
    }
 
  return {
    title: `Watch ${title} : Full Episodes Online (Free!)`,
    description:description,
    keywords:keywords,

    openGraph: {
        title: `Watch ${title} : Full Episodes Online (Free!)`,
        description:description,
        images:banner


    },
  }
}
 



export default function AnimePage({params}){
    

    return (
        <Watch params={params}>

        </Watch>
    )
}