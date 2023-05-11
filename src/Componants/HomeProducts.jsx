import React from 'react'
import Product from './LowLevelCom/Product'
import { useProductData } from '../Contex/ProductData'

const HomeProducts = ({cartItems, setCartItems}) => {
  const data = useProductData()

  function addToCart(id){

    const itemsToCart = data.products.filter(i=> i.id === id).map(item => { return {...item, itemsCount: 1 }});

    setCartItems(prevItems => prevItems.concat(itemsToCart))
   

  }

  return (
    <div>
        <div className='container mx-auto  mb-6 '>
            <h1 className='md:text-5xl text-4xl text-gray-600 font-semibold text-center my-6'> Our Latest Products</h1>

             <div className='flex flex-wrap justify-center'> 
              {data.products ? data.products.map(p=> <Product img={p.image} title={p.title} category={p.category} price={p.price} rating={p.rating.rate} reviews={p.rating.count} key={p.id} addToCart={addToCart} id={p.id} />) : <h1> Loading...</h1>}
                
                
            </div>
        </div>
    </div>
  )
}

export default HomeProducts