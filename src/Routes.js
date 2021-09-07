import React from "react";
import { HashRouter, Switch, Route} from "react-router-dom";
import App from "./App";
import Post from "./Post";

const Routes = () => {

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/"  >
                    <App />
                </Route>
                <Route exact path={'/:id'} component={Post} /> 
            </Switch>
        </HashRouter> 
    )
}

export default Routes