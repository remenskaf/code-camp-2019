import React from 'react';
import './BeerDetail.css';

class BeerDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            'beer' : ''
        }
    }

   componentDidMount() {
       this.loadBeer();
   }

   loadBeer() {
       fetch("http://localhost:3001/beer")
           .then(result => result.json())
           .then(result => this.setState({'beer': result}));
   }

    render() {
        return (
            <div>
                <h1>{this.state.beer.beer_name}</h1>
                <p> {this.state.beer.beer_description}</p>
            </div>

        );
    }
}

export default BeerDetail;
