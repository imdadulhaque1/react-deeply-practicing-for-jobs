import React from 'react';
import FirstComponent from './components/firstComponent';
import MappingData from './components/mapping/MappingData';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

function App() {
 
  return (
    <div>
    <h1>This is practicing part of react</h1>
    <h4>Discussing below points:</h4>
    <ul>
      <li>props</li>
      <li>mapping</li>
    </ul>
      <BrowserRouter>
        <Switch>
            <Route exact path="/props" component={FirstComponent} />
            <Route exact path="/mapping" component={MappingData} />
            <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
        
        
  );
}

export default App;





          // <input style={{ width:"500px", height: "100px"}} type="text" onChange="hundleSubmit" />