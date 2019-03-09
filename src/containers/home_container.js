import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Results from '../components/Results';
import BeerRandom from '../components/BeerRandom';
import BreweryRandom from '../components/BreweryRandom';
import { Container, Header, Grid, GridRow } from 'semantic-ui-react';
import { getBeer, getRandomBeer, getRandomBrewery, getRandomBeerClear, getRandomBreweryClear } from '../actions/searchActions';
import { bindActionCreators} from 'redux';
import { Dimmer, Loader, Divider } from 'semantic-ui-react';
import {  withRouter } from 'react-router-dom';


class HomeContainer extends Component {

   state={
       searchTerm: ''
   }
    
    componentDidMount(){
        this.props.getRandomBeer()
        this.props.getRandomBrewery()
        const params = this.props.match.params || {};
        const searchTerm = params.searchTerm || undefined
        this.props.getBeer(searchTerm)
       
        
    }

    

    submitHandler = (event, searchTerm) =>{
        event.preventDefault();
        this.props.history.push(`/search/${this.state.searchTerm}`);
       
           
    }

    componentDidUpdate(prevProps){
        const currentSearchTerm = this.props.match.params.searchTerm;
        const oldSearchTerm = prevProps.match.params.searchTerm;
        if(currentSearchTerm !== oldSearchTerm){
          this.props.getBeer(currentSearchTerm);
        }
       }

   

    changeHandler = (event) =>{
         this.setState({
            [event.target.name]: event.target.value
         })
         
    }





    render() {
        const {ranBeers, beers, ranBrewery} = this.props
        const name = 'searchTerm'
        
        return (

            <React.Fragment>
            <div  style={{background: `url('/images/beerhome.jpg')  no-repeat  `, border: 'black 1px solid', height: '100vh', width:'100vw', backgroundSize: 'cover' , backgroundPosition: 'center'}}>
            {!this.props.ranBeers.isPending && !this.props.ranBrewery.isPending  ?
            <>
           
           
            <Divider  section clearing hidden/>
            
            <Header as='h1' textAlign='center' style={{color:'white', fontFamily: 'Fjalla One', fontSize:'3rem'}} >Discover Beers and Breweries</Header>
            <Container>
            
              <Search
                   name={name} value={this.state.searchTerm} onchange={(event) =>this.changeHandler(event)} onsubmit={(event)=> this.submitHandler(event)} 
              />
               <Grid stackable >
              <GridRow  >
              <BeerRandom ranBeer={ranBeers.ranBeer} isLoading={ranBeers.isPending} />
              </GridRow>
              
             
              <GridRow >
              <BreweryRandom ranBrew={ranBrewery.ranBrewery} isLoading={ranBrewery.isPending}/>
              </GridRow>
              </Grid>
              </Container></> : <Dimmer active><Loader indeterminate inline="centered" content='Loading...' size='massive'/></Dimmer>}
              
              </div> 
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
        return bindActionCreators({getBeer, getRandomBeer, getRandomBrewery, getRandomBeerClear, getRandomBreweryClear}, dispatch)
           
        
    }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));

