import DetailsProducts from "@/components/products/DetailsProducts"
import SliderProducts from "@/components/products//SliderProducts"

const MainProduct =()=>{
    return(

        // Utlizamos grid de talwin para tener dos columnas en dispositivos grandes (md)
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8" >

        <SliderProducts/>
        
        <DetailsProducts/>
        
    </main>
    )
}
export default MainProduct