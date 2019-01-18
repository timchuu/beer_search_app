import React, { Component } from 'react'
import Results from '../components/Results';
import Search from '../components/Search';
import Layout from '../hoc/Layout'
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';


 class ResultsContainer extends Component {
     
  render() {
    console.log(this.props)
    return (
      <div>
      <Layout>
        <Container>
        <Search/>
        <Results/>
        </Container>
        </Layout>
      </div>
     
    )
  }
}


export default connect()(ResultsContainer)
