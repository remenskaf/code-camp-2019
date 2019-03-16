import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SplashScreen from './components/screens/SplashScreen';
import HomeScreen from './components/screens/HomeScreen';



class App extends Component {

    render() {
        return (
            <Router>
                <div className="container-fluid">
                     <Route render={()=>(<HomeScreen/>)}  />

                </div>
            </Router>
    );
    }
}

export default SplashScreen(App);

