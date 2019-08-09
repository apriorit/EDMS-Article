import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { AppHeader } from "./layout";
import { ReactContent, AngularContent } from "./utils";
import { Home } from "./components";

const App = () => (
    <div className="container">
        <BrowserRouter>
            <React.Fragment>
                <AppHeader />
                <Switch>
                    <Route exact path="/" render={Home} />
                    <Route exact path="/angular" render={() => <AngularContent />} />
                    <Route exact path="/react" render={() => <ReactContent />} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    </div>
);

export default App;
