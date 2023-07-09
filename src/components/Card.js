import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Card = ({catg}) => {

    const [products, setProducts] = useState(null);

   const fetchProducts = async () => {

    let allProducts;
    if(catg){
        allProducts = await axios.get(`https://fakestoreapi.com/products/category/${catg}`);
    }else{
        allProducts = await axios.get("https://fakestoreapi.com/products");
    }
        setProducts(() => allProducts.data);
    }

    useEffect(() => {
        fetchProducts();
    }, [catg]);


  return (
    <div id="product-con">
        <div id="products">

            {products && products.map((data, idx) => {
                return (
                    <div key={idx} className='product'>
                        <Link to={`/product-details?prd=${data.id}`}>
                            <div>
                                <img loading="lazy"
                                    src={data.image}
                                    alt={data.title} />
                            </div>
                            <div>
                                <p>{data.title.substring(0,20)}...</p>
                                <p>Shop Now!</p>
                                <button>{data.price} &#x0024;</button>
                            </div>
                        </Link>
                    </div>
                )
            })}

        </div>
    </div>
  )
}


export default Card;