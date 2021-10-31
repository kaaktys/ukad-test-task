import ProductCard from '../components/ProductCard/ProductCard'
import './Home.css'

const Products = () => {
    return (
        <div className="home-wrapper">
           <h1>Product page</h1>
           <ProductCard />
           <ProductCard />
           <ProductCard />
           <ProductCard />
        </div>
    )
}

export default Products