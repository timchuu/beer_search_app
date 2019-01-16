import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Single from './containers/Single';
import SingleBrew from './containers/Single_Brew';
const App = () => {
  
    return (
    <BrowserRouter>   
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/search/:searchTerm" exact component={Home} />
          <Route path='/beer/:id' exact component={Single} />
          <Route path='/brewery/:brewid'  exact component={SingleBrew}/>
     </Switch>
     </BrowserRouter>  
    );
  
}

export default App;
