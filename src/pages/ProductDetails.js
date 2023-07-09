import Nav from '../components/Nav'
import Category from '../components/Category'
import ProductDtl from '../components/ProductDetails'

const ProductDetails = () => {

    const queryParameters = new URLSearchParams(window.location.search)
    const prd = queryParameters.get("prd");


  return (
    <>
        <Nav />
        <Category />
        <ProductDtl prd={prd}  />
    </>
  )
}

export default ProductDetails