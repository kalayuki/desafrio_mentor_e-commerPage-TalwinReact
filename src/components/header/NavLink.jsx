
//CReamos un componente para poder darle clases a los navegadores en general 
//Realizamos un exten de coler en el tawlqin config 
export default ({text}) => { 


        // Utilizamos Group , una clase de talwing , que permite que se realice un hover , determinado al padre contenedor, tambien se puede utilizar el peer, pero este mira a un hermano , group a todo


        return <a href="#"  className="py-8 relative group" >

        <span className="group-hover:text-orange-primary" >{text}</span>
        <span className="absolute bottom-0 left-0 block w-full h-1 scale-x-0   group-hover:bg-orange-primary
        group-hover:scale-x-100 transitio-all duration-700"></span>

        </a>



 }