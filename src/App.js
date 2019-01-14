import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Single from './components/Single';
import SingleBrew from './components/Single_Brew';
const App = () => {
  
    return (
    <BrowserRouter>   
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/search/:searchTerm" component={Home} />
          <Route path='/beer/:id' component={Single} />
          <Route path='/brewery/:breweryid' component={SingleBrew}/>
     </Switch>
     </BrowserRouter>  
    );
  
}

export default App;
