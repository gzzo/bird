import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Home from 'pages/home'

import 'sanitize.css'

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <div>
        <Helmet>
          <title>Hello</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
