import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Dashboard, Create, Edit } from './views'
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
                 <RouteWithLayout
                    component={Create}
                    layout={Layout}
                    path='/create'
                />
                <RouteWithLayout
                    component={Edit}
                    layout={Layout}
                    path='/edit/:id'
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
