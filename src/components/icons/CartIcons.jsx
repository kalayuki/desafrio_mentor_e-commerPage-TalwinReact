/*En este caso ponemos a fill desetruturado, le asignamos una cateristica , que es por la que ya venia marcada , que si esta 
no tiene ninguna carateristica aparte que se la toma en donde pongamos el componente , como si pasa en el boton de detals compras
que tiene un color distinto al navegador, este tomara el color que le asignadmos por defecto 
en el boton de add to cart , tiene color blanco , por lo tanto se le asiganara como una especie de props
Originalmente fill se encontraba en el path al igual que fillRule, lo pasamos a svg*/

/*Tambien se aplica el rest operator , es decir que al margen de lo que colocamos como una cart por defecto , tambien le sumamos que 
aquellas otras porpiedades que estan ademas se puedan ver ...props*/

const CartIcons = ({fill="#69707D", ...props}) => {

  return (<svg 
    //spite operator , antes  resoperator (como props )
  {...props}
  width="22" 
  height="20" 
  xmlns="http://www.w3.org/2000/svg"
  fill= {fill}
  fillRule="nonzero">


    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" 
    /></svg>);
};

export default CartIcons;
