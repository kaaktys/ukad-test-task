import './ProductCard.css'
import product_cheese from "../../assets/image1.png";

const ProductCard = () => {
    return (
        <div className="product-wrapper">
            <img src={product_cheese} alt="" className="product-image"/>
            <div className="">
                <div className="title">Hardpost</div>
                <div className="description">Arnaud Comte AOP exlagrad opas 35% hardost</div>
            </div>
        </div>
    )
}

export default ProductCard