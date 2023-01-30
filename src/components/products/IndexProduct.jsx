
import DetailsProducts from "@/components/products/details/DetailsProducts"
import GalleryProduct from "@/components/products/gallery/GalleryProduct"

import imgProduct1 from "@/assets/images/image-product-1.jpg"
import imgProduct2 from "@/assets/images/image-product-2.jpg"
import imgProduct3 from "@/assets/images/image-product-3.jpg"
import imgProduct4 from "@/assets/images/image-product-4.jpg"


import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg"
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg"
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg"
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg"



//creamos un array con todas las imagenes  para hacer la galeria 
const ARRAY_IMGS=[
    imgProduct1,
    imgProduct2,
    imgProduct3,
    imgProduct4

]

const ARRAY_IMG_SMALL =[imgProductSmall1,imgProductSmall2,imgProductSmall3,imgProductSmall4 ]

const MainProduct =()=>{
    return(

        // Utlizamos grid de talwin para tener dos columnas en dispositivos grandes (md)
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-113px)]  items-center md:max-w-[80%] md:container md:mx-auto" >

        <GalleryProduct ARRAY_IMGS={ARRAY_IMGS} ARRAY_IMG_SMALL={ARRAY_IMG_SMALL} />
        
        <DetailsProducts/>
        
    </main>
    )
}
export default MainProduct