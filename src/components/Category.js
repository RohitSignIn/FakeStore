import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Category = () => {

    const [category, setCategory] = useState(null);
    async function loadCategories () {
        const categories = await axios.get("https://fakestoreapi.com/products/categories");
        
        setCategory(() => categories.data);
    }

    useEffect(() => {
        loadCategories();
    }, [])

  return (
    <div id="categories-con">
        <div id="category">

            {category && category.map((data, idx) => {
                return (
                    <div key={idx} id={data}>
                        <Link to={`/category?catg=${data}`}>
                            <img loading="lazy" src={`./categories/${data}.webp`} alt={data} />
                            <p>{data}</p>
                        </Link>
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default Category