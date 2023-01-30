import CartIcons from '@/components/icons/CartIcons'






export default () => { 

    return(

        <section className=" container mx-auto px-4 md:px-0">
            <p className=" text-orange-primary font-bold mb-3   uppercase  tracking-wide">
            Sneaker Company 
            </p>
            <h2 className=" font-bold text-3xl mb-3">Fall Limited Edition Sneakers</h2>


            <p className="   text-dark-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

  <div className=" grid  grid-cols-3  gap-4 mb-5 font-bold  items-center md:grid-cols-[1fr_3fr] ">
            <span className="  text-3xl mb-4">$125.00</span>
            <span className=" bg-pale-orange  rounded-md mr-auto py-1 px-2  text-orange-primary">50%</span>
            <span className=" text-right text-gray-600 text-lg  line-through md:col-span-3 md:text-left"> $250.00</span>
        </div>
        
        <div className=" grid  grid-cols-3 font-bold gap-4  md:grid-cols-[1fr_1.7fr] " >

            <div className=" col-span-3 bg-gray-700 flex justify-between pb-3 py-2 items-baseline  rounded-md px-5  md:col-span-1">

            <button className=' text-3xl  text-orange-primary'>-</button>

          <span className=' text-3xl'>0</span>

            <button  className=' text-3xl  text-orange-primary'>+</button>

            </div>

            <button className=" col-span-3 bg-orange-primary text-white py-3 rounded-md flex  items-center justify-center hover:bg-orange-700 transition-all  gap-x-3  md:col-span-1">
                
                <CartIcons fill="#fff"/>
                
                
                Add to cart</button>
          
        </div>
        </section>

    )


 }