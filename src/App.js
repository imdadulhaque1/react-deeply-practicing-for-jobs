import React from 'react';
import FirstComponent from './components/firstComponent';
import MappingData from './components/mapping/MappingData';
import PropsClassComp from './components/hooksUseState/PropsInClassCom';
import UseState from './components/hooksUseState/UseState';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

function App() {
 
  return (
    <div>
    <h1>This is practicing part of react</h1>
    <h4>Discussing below points:</h4>
    <ul>
      <li>props</li>
      <li>mapping</li>
      <li>propsclassc</li>
      <li>usestate</li>
    </ul>
      <BrowserRouter>
        <Switch>
            <Route exact path="/props" component={FirstComponent} />
            <Route exact path="/mapping" component={MappingData} />
            <Route exact path="/propsclassc" component={PropsClassComp} />
            <Route exact path="/usestate" component={UseState} />
            <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
        
        
  );
}

export default App;





          // <input style={{ width:"500px", height: "100px"}} type="text" onChange="hundleSubmit" />