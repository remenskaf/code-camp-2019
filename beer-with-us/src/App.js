import React, { Component, Text} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SplashScreen from './components/screens/SplashScreen';
import HomeScreen from './components/screens/HomeScreen';
import BeerDetail from './components/beer/BeerDetail';
import Search from './components/search/Search';



class App extends Component {

    render() {
        return (
            <Router>
                <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/beer'} className="nav-link">Beer</Link></li>
                        <li><Link to={'/search-beers'} className="nav-link">Search Beers</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    <Route path='/beer' component={BeerDetail} />
                    <Route path='/search-beers' component={Search} />

                </Switch>
                </div>
            </Router>
        );
    }
}

export default SplashScreen(App);

