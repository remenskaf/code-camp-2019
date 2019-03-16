import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import './SplashScreen.css';

function LoadingMessage() {
    return (
        <div className="splash-screen">
        Wait a moment while we load your app.
    <div className="loading-dot">.</div>
    </div>
);
}

function SplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            setTimeout(() => {
                this.setState({
                    loading: false,
                });
            }, 3000)

        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return LoadingMessage();

            // otherwise, show the desired route
            return <HomeScreen/>;
        }
    };
}

export default SplashScreen;