import React, { Component } from 'react';
import './App.css';
import HomeScreen from 'components/screens/HomeScreen';
import SplashScreen from './components/screens/SplashScreen';



class App extends Component {

    render() {
        return (
            <Fragment>
            <NavBar />
            <div className="container-fluid">
            <Route path="/" exact component={HomeScreen} />
        </div>
        </Fragment>
    );
    }
}

export default SplashScreen(App);

