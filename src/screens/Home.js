import ProductCard from '../components/ProductCard/ProductCard'
import './Home.css'

const Home = () => {
    return (
        <div className="home-wrapper">
           <h1>Home page</h1>
           <ProductCard />
        </div>
    )
}

export default Home