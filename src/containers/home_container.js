import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Layout from '../hoc/Layout';
import Results from '../components/Results';
import BeerRandom from '../components/BeerRandom';
import BreweryRandom from '../components/BreweryRandom';
import { getBeer, getRandomBeer, getRandomBrewery } from '../actions/searchActions';
import { bindActionCreators} from 'redux';

class HomeContainer extends Component {

   state={
       searchTerm: ''
   }
    
    componentWillMount(){
        this.props.getBeer()
        this.props.getRandomBeer()
        this.props.getRandomBrewery()
        
    }

    submitHandler = (event) =>{
        event.preventDefault();
           
    }

    changeHandler = (event) =>{
         this.setState({
            [event.target.name]: event.target.value
         })
         
    }





    render() {
        const {ranBeers, beers, ranBrewery} = this.props
        const name = 'searchTerm'
        console.log(this.props)
        return (
            <Layout>
              <Search
                   name={name} value={this.state.searchTerm} onchange={(event) =>this.changeHandler(event)} onsubmit={(event)=> this.submitHandler(event)}
              />
              <Results results={beers}/>
              <BeerRandom ranBeer={ranBeers.ranBeer} />
              <BreweryRandom ranBrew={ranBrewery.ranBrewery}/>
            </Layout>
        );
    }
}

    const mapStateToProps = (state) => {
        return {
            beers: state.beer,
            ranBeers: state.randomBeer,
            ranBrewery: state.randomBrewery
        }
       
    }

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({getBeer, getRandomBeer, getRandomBrewery}, dispatch)
           
        
    }
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

