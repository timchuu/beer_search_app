import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Single from './containers/Single';
import SingleBrew from './containers/Single_Brew';
import ResultsContainer from './containers/results_container';

const App = (props) => {
 
    return (
    <BrowserRouter>   
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search/:searchTerm" exact  component={ResultsContainer} />
          <Route path='/beer/:id' exact component={Single} />
          <Route path='/brewery/:brewid'  exact component={SingleBrew}/>
     </Switch>
     </BrowserRouter>  
    );
  
}

export default App;
