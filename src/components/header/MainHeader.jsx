import LogoSneaker from "@/assets/images/logo.svg"
import AvatarImagen from "@/assets/images/image-avatar.png"
import MenuIcons from "@/components/icons/MenuIcons";
import CartIcons from "@/components/icons/CartIcons";
import ClouseIcon from "@/components/icons/ClouseIcon";
import { useState } from "react";
import NavLink from "@/components/header/NavLink";



const MainHeader=()=>{
    
    //Utilizamos UseSatate para cambiar las clases del nav 
    //md: lo que ocurr cuando hace el quibre de tamaño de pantalla , se inicia en hidden , cuando se extiende se vuelve a verl el menu con las clases agregadas pasa a static cuando se agranda , el useState se incia con las mismas clase que setNavClass de handleClouseMenu
    //
    const [navClass, setNavClass] = useState(' hidden  font-bold   md:mr-auto  md:flex md:flex-row md:gap-4  md:static md:p-0');
    

    //Funcion para abrir menu hamburguesa

    const handleOpenMenu = ()=>{

        setNavClass(" z-10 absolute top-0 left-0  flex h-full w-4/5 flex-col gap-y-{21px} bg-white p-8   font-bold    md:mr-auto  md:flex md:flex-row md:gap-4  md:static md:p-0")

        console.log("click")
    }

    //Funcion cerrar menu 

    const handleClouseMenu = ()=>{
        setNavClass("hidden  font-bold   md:mr-auto  md:flex md:flex-row md:gap-4  md:static md:p-0")
    }



    return(
        < >
        <header className="container mx-auto flex  items-center  gap-8  p-4 md:p-3" >
            <button  className="md:hidden "  onClick={handleOpenMenu}>
                <MenuIcons/>
                </button>


        <img src={LogoSneaker} 
        alt="logo sneaker"  

        className="mr-auto h-5 md:mr-0 mb-1"/>

        <nav  className={navClass} >
            
            <button onClick={handleClouseMenu} className="mb-12 md:hidden">

                 <ClouseIcon/> 
                 
                 </button>
                 {/* //Links de navegacion, creamos un componente y los pasamos a los titulos de cada uno de estos Links, como props */}
                 <NavLink  text="Collections "/>
                 <NavLink  text="Men"/>
                 <NavLink  text="Woman"/>
                 <NavLink  text="About"/>
                 <NavLink  text="Contact"/>
          
        </nav>
        <div className="flex gap-4">
            <button className="">
                <CartIcons/>
                </button>
            <img src={AvatarImagen} alt="" className="w-8" />

        </div>
    </header>
    {/* // Ingresamos un har para hacer un salto de linea y que se vea  
    corresponde a la linea de abajo 
    - se puede hacer con un spam */}
   <span className="bg-gray-500 hidden container mx-auto md:block h-[1px] w-full" > </span>
    </>
    );
};

export default MainHeader