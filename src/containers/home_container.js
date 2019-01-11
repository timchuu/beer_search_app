import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Layout from '../hoc/Layout';
import Results from '../components/Results';
import { getBeer } from '../actions/searchActions';

class HomeContainer extends Component {

   
    
    componentWillMount(){
        this.props.dispatch(getBeer())
        
    }

    searchHandler = (event) =>{
        console.log('clicked');
    }




    render() {
        
        return (
            <Layout>
              <Search
                  onsubmit={(event)=> this.searchHandler(event)}
              />
              <Results beers={this.props.beers}/>
            </Layout>
        );
    }
}

    const mapStateToProps = (state) => {
        return {
            beers: state.beer
           
        }
       
    }
export default connect(mapStateToProps)(HomeContainer);

