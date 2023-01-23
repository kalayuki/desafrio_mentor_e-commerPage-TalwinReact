 //llamamos a todas las imagenes 
import imgProduct1 from "@/assets/images/image-product-1.jpg"
import imgProduct2 from "@/assets/images/image-product-2.jpg"
import imgProduct3 from "@/assets/images/image-product-3.jpg"
import imgProduct4 from "@/assets/images/image-product-4.jpg"







import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg"
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg"
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg"
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg"
import PreviusIcon from "@/components/icons/PreviusIcon"
import NextIcon from "@/components/icons//NextIcon"
import { useState } from "react"

//creamos un array con todas las imagenes  para hacer la galeria 
const ARRAY_IMGS=[
    imgProduct1,
    imgProduct2,
    imgProduct3,
    imgProduct4

]


export default () => { 


    //Estado para el cambio de las imagenes
    //Iniciamos en posicion 0 del array ARRAY_IMGS es decir imgProduct1

        const [index, setIndex] = useState(0);
        

        //fUNCION PARA MOVER LAS IMAGENES CON LOS BOTONES 

        const handlesClickNext = () => { 

            // Le damos un condicional para que no se rompa 
            //Metodo length de js , nos permite ver cla cantidad de objetos que tiene el elemento , le descontamos 1 ya que la posicion comienza desde 0
            //Le ponemos un return de cero ya que si llegamos al final queremos que vuelva al inicio 
            //Para cambiar la imagen y el clik avance le sumamos uno al estado de index por medio de setIndex

            index === ARRAY_IMGS.length -1?  setIndex (0):   setIndex(index +1)
    
            
    
    }
        const handleClickPrev = () => { 

            index === 0? setIndex(ARRAY_IMGS.length -1):setIndex(index-1)
            
        
        }



        return(

            <section  className="grid  md:grid-cols-4 gap-4" >

                {/*  Utilizamos col-span-4, para que ka img mas grande ocupe las 4 columnas del grid , span es que determina 
               la  cantidad de columnas  */}

                <div className="col-span-4 relative " >
                    <img src={ARRAY_IMGS[index]} alt="" />
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4 ">
                        <button className=" bg-white w-10 h-10 rounded-full grid place-items-center " onClick={handleClickPrev} ><PreviusIcon/></button>



                        <button className="  bg-white w-10 h-10 rounded-full  grid place-items-center " onClick={handlesClickNext} ><NextIcon/> </button>
                    </div>

                </div>
                <img src={imgProductSmall1} alt="" className="hidden md:block"/>
                <img src={imgProductSmall2} alt="" className="hidden md:block" />
                <img src={imgProductSmall3} alt="" className="hidden md:block" />
                <img src={imgProductSmall4} alt="" className="hidden md:block" />

        </section>


        )


 }