import React from 'react';
import Login from '../Login/index.js';
import Feed from '../Feed/index.js';
import HomePage from '../HomePage/index';
import Footer from '../Footer';
import Dashboard from "../Dashboard";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HOCWrapper from '../../HOC';
import store from '../../store';
import { loginAction } from '../../store/actions/loginAction';
import UploadTest from "../FileUpload/UploadTest";
import LineChart from "../Charts";

const token = localStorage.getItem('token');
if (token) {
   store.dispatch(loginAction(token))
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HOCWrapper(Login) }/> 
        <Route exact path="/home" component={ HOCWrapper(Feed) }/>
        <Route exact path="/dashboard" component={ Dashboard }/>
        <Route exact path="/upload" component={UploadTest} />
        <Route exact path="/charts" component={LineChart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;