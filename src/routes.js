import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Dashboard } from './views'
import Layout from './views/Layout'

import RouteWithLayout from './components/RouteWithLayout'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <RouteWithLayout
                    component={Dashboard}
                    layout={Layout}
                    path='/dashboard'
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
