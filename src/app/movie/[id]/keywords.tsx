import { KeyWordObj } from "./keyWordsInterface";
import { GetKeys } from "@/app/tv/[[...id]]/interfaces/getKeys";


export function AlignedKrywords(obj:KeyWordObj,tvObj:GetKeys){
    const arr:string[] = []
   if(obj!=undefined){

       obj.keywords.map(ob=>{
           arr.push(ob.name)
        })
        
        return arr.join(',')
    } 
    else{
        tvObj.results.map(ob=>{
            arr.push(ob.name)
         })
         
         return arr.join(',')
    }
console.log('sakmklaknfajknfanfa.fa'+obj)
}