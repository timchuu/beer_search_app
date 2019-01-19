import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Layout from '../hoc/Layout';
import Results from '../components/Results';
import BeerRandom from '../components/BeerRandom';
import BreweryRandom from '../components/BreweryRandom';
import { Container } from 'semantic-ui-react';
import { getBeer, getRandomBeer, getRandomBrewery, getRandomBeerClear, getRandomBreweryClear } from '../actions/searchActions';
import { bindActionCreators} from 'redux';
import { Dimmer, Loader, Divider } from 'semantic-ui-react';
import {  Redirect } from 'react-router-dom';
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
            <Container fluid>
            <div  style={{background: `url('/images/beerhome.jpg')  no-repeat  `, border: 'black 1px solid', height: '350px', width:'100%', backgroundSize: 'cover' , backgroundPosition: 'center'}}>
            <Divider  section clearing hidden/>
            </div>
            </Container>
            <Container>
              <Search
                   name={name} value={this.state.searchTerm} onchange={(event) =>this.changeHandler(event)} onsubmit={(event)=> this.submitHandler(event)}
              />
              {beers.beers.data && beers.beers.data.length >= 1 ? <Redirect push {...this.props} to={{
                    pathname: `/search/${this.state.searchTerm}`  }}/>:  null}
              <BeerRandom ranBeer={ranBeers.ranBeer} isLoading={ranBeers.isPending} />
              <BreweryRandom ranBrew={ranBrewery.ranBrewery} isLoading={ranBrewery.isPending}/> 
              </Container>
            </Layout> : <Dimmer active><Loader indeterminate inline="centered" content='Loading...' size='massive'/></Dimmer>}
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

