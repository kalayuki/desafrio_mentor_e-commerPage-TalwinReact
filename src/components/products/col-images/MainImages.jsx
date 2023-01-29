import SliderProducts from "@/components/products/col-images/SliderProducts"
import { useState } from "react";

export default ({ARRAY_IMGS, ARRAY_IMG_SMALL})=> {


  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal= () => { 


    // Ponemos un condicional , donde se medira con respecto a la tamaños de la pantalla y su punto de quiebre , utilizamos window.innerWidth
    if(window.innerWidth > 767) return setIsOpenModal(true)
    
   }

   const handleCloseMOdal= () => { 
    setIsOpenModal(false)
   }
  

    return(

        <>
        <SliderProducts
         ARRAY_IMGS={ARRAY_IMGS}
          ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
          className="grid  md:grid-cols-4 gap-4 " 
          
          handleOpenModal={handleOpenModal} />

        {
          isOpenModal 
          // Utilizamos && para evitarnos utilizar el else 
          &&
          <SliderProducts
          ARRAY_IMGS={ARRAY_IMGS}
           ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
           isOpenModal={isOpenModal}
           className=" hidden md:grid  md:grid-cols-4 md:gap-4  md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2  md:-translate-y-1/2 md:max-w-sm  "
           handleCloseMOdal={handleCloseMOdal}
           />
          

        }
        
        </>
    )
}