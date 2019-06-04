import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Navigation from './presentational/organisms/Navigation'

import Home from './presentational/templates/Home'
import PageTwo from './presentational/templates/PageTwo'
import PageThree from './presentational/templates/PageThree'
import NotFound from './presentational/templates/NotFound'

const App = () => {
  return (
    <React.Fragment>
      <Navigation />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/pagetwo' component={PageTwo} />
        <Route path='/pagethree' component={PageThree} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}

export default App
