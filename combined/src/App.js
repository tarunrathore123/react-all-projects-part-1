import React from 'react';
import Header from './components/Header';
import Route from './components/Route';
import Home from './components/Home';
import First from './components/First';
import Second from './components/Second';
import Third2 from './components/Third2';
import Fourth from './components/Fourth';




const App = ()=>{

    return (
        <div>
            <Header/>
            <Route path="/">
                <Home/>
            </Route>
            <Route path="/first">
                <First/>
            </Route>
            <Route path="/second">
                <Second/>
            </Route>
            <Route path="/third">
                <Third2 />
            </Route>
            <Route path="/fourth">
                <Fourth/>
            </Route>
        </div>
    );
}

export default App;