import React, { Component } from 'react'
import Results from '../components/Results';
import Search from '../components/Search';
import Layout from '../hoc/Layout'
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getBeer, getBeerClear } from '../actions/searchActions';

 class ResultsContainer extends Component {


  state={
    searchTerm: '',
    results: []
}



  submitHandler = (event, searchTerm) =>{
    event.preventDefault();
    this.props.getBeerResults(this.state.searchTerm)
    
    

       
  }
  componentDidUpdate(prevProps){
    if(this.props.beers !== prevProps.beers){
      this.props.history.push(`/search/${this.state.searchTerm}`)
    } else {
      return null
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
      <Layout>
        <Container>
        <Search name={name} value={this.state.searchTerm}  onchange={(event) =>this.changeHandler(event)} onsubmit={(event)=> this.submitHandler(event)} />
        <Results {...this.props} />
        </Container>
        </Layout>
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