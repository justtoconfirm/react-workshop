import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <React.Fragment>
    <nav role='navigation'>
      <Link to='/'>Home</Link>
      <Link to='/pagetwo'>Page Two</Link>
      <Link to='/pagethree'>Page Three</Link>
    </nav>
  </React.Fragment>
)

export default Navigation
