import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "../pages/Home"
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from './Layout';
import NotFound from "../pages/NotFound";

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch/>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                    {/*<Route exact path="/" component={NotFound}/>*/}
                    {/*<Route render={() => <h1>Not found!</h1>} />*/}
                    {/*<Route>*/}
                    {/*    <NotFound />*/}
                    {/*</Route>*/}
                <Switch/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
