import React from 'react'

const Product = ({img, title, category, price, rating, reviews, addToCart, id}) => {
  return (
    
        <div className=" w-[300px] py-6 flex flex-col justify-between items-center px-6 my-6 ">
            <div className='flex justify-center flex-col items-center'> 
              <div className="img h-[200px] mb-4">
                  <img className='h-full' src={img} alt="" />
              </div>
              <div className="description mb-3 w-full">
                <h3 className='text-lg font-semibold'> {title} </h3>
                <p className=' uppercase'>{category}</p>
                <h4 className='text-xl text-gray-700'> $ {price}</h4>
                <div className='reviewsSection'>
                  <p> {rating}  ({reviews})  </p>
                </div>
              </div>
            </div>
            <div id="addToCartBtn" className='w-full'>
              <button onClick={()=> addToCart(id)} className='w-full px-6 py-2 text-center border-2 border-[#FF5733] text-[#FF5733] hover:text-white hover:bg-[#FF5733] duration-300'>Add To Cart</button>
            </div>
        

    </div>
  )
}

export default Product
