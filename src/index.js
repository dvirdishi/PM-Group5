import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() 
{
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/signin" component={Signin} />
                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));