import Banner from "./banner";
import Banner300 from "./banner300";
import Banner468 from "./banner468";


export default function ComboBanners(){

    return <>
    <div className="comboBanner">
    <Banner></Banner>
    <Banner300></Banner300>
    <Banner468></Banner468>
    </div>
    </>

}