  //llamamos a todas las imagenes 
  import { useEffect, useRef, useState } from "react"
  
  
  import PreviusIcon from "@/components/icons/PreviusIcon"
  import NextIcon from "@/components/icons//NextIcon"


 


export default ({ARRAY_IMGS =[], 
    ARRAY_IMG_SMALL = [], 
    isOpenModal=false, 
    handleCloseMOdal= null, 
    handleOpenModal = null,
    ...props}) => { 
        
        // Utiluzamos use ref para poder tomar el div donde se encuentran los botones de cambiar las imagenes
        // Lo que queremos es que cuando este en md estos botones desaperzcan, pero si cuando este modal 
        // Lo inicializamos en Null ya que no existe en el dom 
        const btnSlider = useRef(null);
        
        // // para poder lograr este cambio en el dom de los botones utilizamos un useefect que estara pendiente de los cambios que 
        // se produzcan con isOpenModal
        useEffect(() => {
             //si isOpenModal es verdadero (es decir cuando se ve el modal )
            isOpenModal &&
                //ref , current para que nos traiga el div con todo lo que tenga, classList para ver las clases que tiene , remove , para quitar la clase que esta en el parentesis, en este caso saca hidden , para que puedan aparecer los botones de cambiar img 
            btnSlider.current.classList.remove("md:hidden")
            
          
        }, [isOpenModal]);
        


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

            <section {...props} >

                {

                    isOpenModal
                    &&
                    <button onClick={handleCloseMOdal} className=" md:col-span-4 text-right">Cerrar</button>

                }

             

                {/*  Utilizamos col-span-4, para que ka img mas grande ocupe las 4 columnas del grid , span es que determina 
               la  cantidad de columnas  */}

                <div className="col-span-4 relative " >
                    <img 
                    onClick={handleOpenModal}
                    src={ARRAY_IMGS[index]}
                     alt=""
                    className="aspect-[16/12] w-full  md:aspect-[16/18] md:rounded-md" />

                    {/* ref se utiliza al toamr el div con useRef */}
                    <div ref={btnSlider} className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4 md:hidden ">
                        <button className=" bg-white w-10 h-10 rounded-full grid place-items-center md:cursor-pointer " onClick={handleClickPrev} ><PreviusIcon/></button>



                        <button className="  bg-white w-10 h-10 rounded-full  grid place-items-center " onClick={handlesClickNext} ><NextIcon/> </button>
                    </div>

                </div>

                {

                    ARRAY_IMG_SMALL.map((smallImg, i) => (

                            
                        <div 
                        key={i}
                        onClick={()=>{setIndex(i)}} className=" relative  cursor-pointer rounded-md overflow-hidden ">
                        <img 
                        
                        src={smallImg} 
                        alt="" 
                        className="hidden md:block  md:rounded-md"/>
                            {/* Para poder tener efectos en el momento de seleccionar una de las imagenes pequeñas */}
                        <span className={` absolute top-0   hover:bg-[rgba(255,255,255,0.5)] h-full w-full ${i === index }`}></span>

                       </div>
                    ))


                }
               
           

        </section>


        )


 }