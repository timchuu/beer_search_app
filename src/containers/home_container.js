import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Layout from '../hoc/Layout';
import Results from '../components/Results';
import BeerRandom from '../components/BeerRandom';
import BreweryRandom from '../components/BreweryRandom';
import { Container } from 'semantic-ui-react';
import { getBeer, getRandomBeer, getRandomBrewery } from '../actions/searchActions';
import { bindActionCreators} from 'redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import {  withRouter, Redirect } from 'react-router-dom';
class HomeContainer extends Component {

   state={
       searchTerm: ''
   }
    
    componentDidMount(){
        this.props.getRandomBeer()
        this.props.getRandomBrewery()
        
       
        
    }

    submitHandler = (event, searchTerm) =>{
        event.preventDefault();
        this.props.getBeer(this.state.searchTerm)
       
           
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
            <React.Fragment>
            {!this.props.ranBeers.isPending && !this.props.ranBrewery.isPending  ?
            <Layout>
            <Container>
              <Search
                   name={name} value={this.state.searchTerm} onchange={(event) =>this.changeHandler(event)} onsubmit={(event)=> this.submitHandler(event)}
              />
              {beers.beers.data && beers.beers.data.length >= 1 ?<Redirect to={{
                    pathname: `/search/${this.state.searchTerm}`,  state: {beers: beers}
              }}/> : null}
              <BeerRandom ranBeer={ranBeers.ranBeer} isLoading={ranBeers.isPending} />
              <BreweryRandom ranBrew={ranBrewery.ranBrewery} isLoading={ranBrewery.isPending}/> 
              </Container>
            </Layout> : <Dimmer active><Loader indeterminate inline="centered" size='massive'/></Dimmer>}
            </React.Fragment>
        );
    }
}

    const mapStateToProps = (state) => {
        return {
            beers: state.beer,
            ranBeers: state.randomBeer,
            ranBrewery: state.randomBrewery,
        }
       
    }

    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators({getBeer, getRandomBeer, getRandomBrewery}, dispatch)
           
        
    }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));

