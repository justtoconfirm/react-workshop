import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './presentational/templates/Home'
import PageTwo from './presentational/templates/PageTwo'
import PageThree from './presentational/templates/PageThree'

const App = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/pagetwo'>Page Two</Link>
      <Link to='/pagethree'>Page Three</Link>

      <Route exact path='/' component={Home} />
      <Route path='/pagetwo' component={PageTwo} />
      <Route path='/pagethree' component={PageThree} />
    </div>
  )
}

export default App
