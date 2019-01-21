import React, { Component } from 'react'
import Results from '../components/Results';
import Search from '../components/Search';
import Layout from '../hoc/Layout'
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getBeer, getBeerClear } from '../actions/searchActions';
import { Button, Icon, Image, Item, Label, Loader, Dimmer } from 'semantic-ui-react';
 class ResultsContainer extends Component {


  state={
    searchTerm: '',
    results: []
}

componentDidMount(){
  const params = this.props.match.params || {};
  const searchTerm = params.searchTerm || undefined
  this.props.getBeerResults(searchTerm)
}

  submitHandler = (event, searchTerm) =>{
    event.preventDefault();
    this.props.history.push(`/search/${this.state.searchTerm}`);
    
    

       
  }
  componentDidUpdate(prevProps){
   const currentSearchTerm = this.props.match.params.searchTerm;
   const oldSearchTerm = prevProps.match.params.searchTerm;
   if(currentSearchTerm !== oldSearchTerm){
     this.props.getBeerResults(currentSearchTerm);
   }
  }


changeHandler = (event) =>{
  this.setState({
     [event.target.name]: event.target.value
  })
  
}
  render() {
    const name='searchTerm';
    
   console.log(this.props)
    return (
      <div>
       {!this.props.beers.isPending ?
      <Layout>
        <Container>
        <Search name={name} value={this.state.searchTerm}  onchange={(event) =>this.changeHandler(event)} onsubmit={(event)=> this.submitHandler(event)} />
        <Results {...this.props} /> 
        </Container>
        </Layout>
        : <Dimmer active><Loader indeterminate inline="centered" content='Loading...' size='massive'/></Dimmer>}
      </div>
     
    )
  }
}

const mapStateToProps = (state) => ({
    beers: state.beer
})

const mapDispatchToProps = (dispatch) => {
  return {
      getBeerResults: (event) => {
          dispatch(getBeer(event))
      },
      getBeerResultsClear: () =>{
          dispatch(getBeerClear())
      }

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);




/*componentWillReceiveProps(nextProps){
  if(this.props.beers !== nextProps){
    this.props.history.push(`/search/${this.state.searchTerm}`)
  }
}
componentWillReceiveProps(props){
    this.setState({
      results: this.props.beers.beers.data
    })
   
  }
this.props.history.push(`/search/${this.state.searchTerm}`)
*/