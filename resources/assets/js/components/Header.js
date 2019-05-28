import React, {Component} from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Props from './Props';
import Time from './Time';

export default class Header extends Component{
    render(){
        return(
            <Router>
            <div>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li className="tulisan"><Link to='/about'>about us</Link></li>
                <li><Link to='/contact'>contact</Link></li>
                <li><Link to='/props'>props</Link></li>
                <li><Link to='/time'>Time</Link></li>
              </ul>

                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/props' component={Props} />
                <Route path='/time' component={Time} />
                
            </div>
            </Router>
        );
    }
}
