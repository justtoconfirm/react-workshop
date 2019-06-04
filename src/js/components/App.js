import React from 'react'
import { Link, Route } from 'react-router-dom'
// import { Link, Route, Switch } from 'react-router-dom'

// import Button from './presentational/atoms/button/Button'

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

const App = () => {
  return (
  /* <Button theme='primary' isFullWidth>Test Button</Button> */
  /* Route components are rendered. if the path prop matches the current URL */

    <div>
      <Link to='/'>Home</Link>
      <Link to='/category'>Category</Link>
      <Link to='/products'>Products</Link>

      <Route path='/' component={Home} />
      <Route path='/category' component={Category} />
      <Route path='/products' component={Products} />
    </div>
  )
}

export default App
