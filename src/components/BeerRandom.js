import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';


class BeerRandom extends Component {
    render() {
        
        console.log(this.props.ranBeer)
        const result = this.props.ranBeer ? this.props.ranBeer.map((item,i)=>(
            <div key={item.data.id}>
            <li >{item.data.name}</li>
            <li>{item.data.abv}</li>
            <li>{item.data.style.name}</li>
            <p>{item.data.style.description}</p>
            </div>
        ))  : null
        return (
            <div>
                <Header as='h3' content='Discover Brewerys'/>
                <ul>{result}</ul>
                
            </div>
        );
    }
}

export default BeerRandom;