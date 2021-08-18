import { Fragment } from 'react';
import Heading from './components/Heading';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import TableComp from './components/TableComp';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Resources from './components/Resources';
import Details from './components/Details';

function App() {
  
  
  
  return (
    <Fragment>
      <Router>
      <NavBar/>
      <Switch>
          <Route path='/' exact><Heading/>
            <div className="main">
              <SideBar/>
              <TableComp/>
            </div>
          </Route>
          <Route path='/resources'>
            <Resources/>
          </Route>
          <Route path='/dao/:id'>
            <Details/>
          </Route>
      </Switch>
      </Router>
    </Fragment>
  );
}

export default App;