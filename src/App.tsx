import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
        <div className={"max-w-screen-xl mx-auto px-2 lg:px-6 py-8 lg:py-16"}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Main} />
                    <Route path={'/portfolio'} component={() => <Main page={"Portfolio"} /> } />
                    <Route path={'/typing'} component={() => <Main page={"Typing"} /> } />
                    <Route path={'/esports'} component={() => <Main page={"Esports"} /> } />
                </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
