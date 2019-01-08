import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import Layout from '../../hoc/Layout';
import { getBeer } from '../../actions/searchActions'

class Home extends Component {
    

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
            </Layout>
        );
    }
}

    const mapStateToProps = (state) => {
        
        return {
            beers: state.beers
           
        }
       
    }
export default connect(mapStateToProps)(Home);