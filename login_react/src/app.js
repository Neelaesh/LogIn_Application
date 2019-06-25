import React from 'react';
import { BrowserRouter as Router, Route, Switch, browserHistory, Redirect } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Login from './redux/Containers/logInContainer';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import SignUp from './redux/Containers/SignUpContainer';

export default class App extends React.Component {

    constructor(){
        super();
    }

    render(){
        return(
                <div>
                    <NavBar history={browserHistory}></NavBar>
                    <Switch>
                        <Route exact path="/" render={ () => <Login/> }/> 
                        <Route path="/home" render={ () => (
                            localStorage.getItem('token') ? 
                                <Home/>
                            :   <Error/>
                        ) }/>
                        <Route path="/error" component={Error} />
                        <Route path="/signUp" component={SignUp}/>
                    </Switch>
                </div>
        )
    }
}