
import HeroSlider from '../Componants/HeroSlider'
import Categories from '../Componants/Categories'
import HomeProducts from '../Componants/HomeProducts'



const Home = ({cartItems, setCartItems}) => {



  return (
    <div>        
        <HeroSlider />
        <Categories />
        <HomeProducts cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  )
}

export default Home