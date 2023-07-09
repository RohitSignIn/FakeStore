import Nav from '../components/Nav'
import AllCategory from '../components/Category'
import Card from '../components/Card'

const Category = () => {

  const queryParameters = new URLSearchParams(window.location.search)
  const catg = queryParameters.get("catg");

  return (
    <>
        <Nav />
        <AllCategory />
        <Card catg={catg} />
    </>
  )
}

export default Category