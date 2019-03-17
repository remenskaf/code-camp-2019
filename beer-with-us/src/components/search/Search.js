import React from 'react';
import './Search.css';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            'items' : []
        }
    }

    componentDidMount() {
        this.searchBeers();
    }

    searchBeers() {
        fetch("http://localhost:3002/beers")
            .then(result => result.json())
            .then(result => this.setState({'items': result.items}));
    }

    render() {
        return (
            <ul>
                {this.state.items.map(function(item, index) {
                    return (<div key={index}>
                                <h2>{item.beer.beer_name}</h2>
                                <h3>{item.beer.beer_style}</h3>

                                <p>{item.beer.beer_description}</p>
                            </div>)
                })}
            </ul>
        );
    }
}

export default Search;
