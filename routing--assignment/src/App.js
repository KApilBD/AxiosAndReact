import React, { Component } from 'react';
import { BrowserRouter,Route,Switch,NavLink, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
// import Course from './containers/Course/Course';
import NoMatch from './components/NoMatch/NoMatch'
import  './Blog.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="Blog">
          <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to= "/users" 
                                >Users</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/courses',
                                }}>Courses</NavLink></li>
                        </ul>
                    </nav> 
                </header>
                
        <Switch>
          <Route path="/users" component={Users}/>
          {/* <Route path="/courses/:courseID" component={Course}/> */}
          <Route path="/courses" component={Courses}/>
          <Redirect from="/all-course" to="/courses"/>
          <Route component={NoMatch}/>
        </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
