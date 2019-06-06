import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from './presentational/atoms/main/Main'
import Navigation from './presentational/organisms/Navigation'

import Home from './presentational/templates/Home'
import PageTwo from './presentational/templates/PageTwo'
import PageThree from './presentational/templates/PageThree'
import NotFound from './presentational/templates/NotFound'

const App = () => {
  return (
    <React.Fragment>
      <Navigation />

      <Main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pagetwo' component={PageTwo} />
          <Route path='/pagethree' component={PageThree} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </React.Fragment>
  )
}

export default App
