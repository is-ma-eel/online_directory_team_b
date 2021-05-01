import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBusiness from '../components/AddBusiness';
import BusinessList from '../components/BusinessList';


const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div className="main-content">
          <Switch>
            <Route component={BusinessList} path="/" exact={true}/>
            <Route component={AddBusiness} path="/add"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter;