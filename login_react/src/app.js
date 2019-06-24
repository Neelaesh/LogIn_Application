import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Login from './redux/Containers/logInContainer';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import SignUp from './Components/SignUp/SignUp';

export default class App extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
                <div>
                    <NavBar history={browserHistory}></NavBar>
                    <Switch>
                        <Route exact path="/" render={function(){
                            return (
                                <div>
                                <Login></Login>
                            </div>
                            )
                        }}/> 
                        <Route path="/home" component={Home} />
                        <Route path="/error" component={Error} />
                        <Route path="/signUp" component={SignUp}/>
                    </Switch>
                </div>
        )
    }
}