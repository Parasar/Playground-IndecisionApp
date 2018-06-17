import React from 'react';
import App from '../App';
import DashboardPageComponent from '../components/DashboardPageComponent';
import CreateExpensePageComponent from '../components/CreateExpensePageComponent';
import EditPageComponent from '../components/EditPageComponent';
import HelpPageComponent from '../components/HelpPageComponent';
import NoMatchPageComponent from '../components/NoMatchPageComponent';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const PrimaryNav = () => {
  return (
    <nav>
      <h1>Expensify App</h1>
      <br/>

      <NavLink to="/" exact={true} activeClassName="active-nav"> Home </NavLink><br/>
      <NavLink to="/dashboard" exact={true} activeClassName="active-nav"> Dashboard page </NavLink><br/>
      <NavLink to="/create" exact={true} activeClassName="active-nav"> Create expense page </NavLink><br/>
      <NavLink to="/edit" exact={true} activeClassName="active-nav"> Edit page </NavLink><br/>
      <NavLink to="/help" exact={true} activeClassName="active-nav"> Help page </NavLink><br/>
    </nav>
  );
};

const AppRouter = () => {

  return (
  <BrowserRouter>
    <div>
      <PrimaryNav />
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/dashboard" exact={true} component={DashboardPageComponent} />
        <Route path="/create" exact={true} component={CreateExpensePageComponent} />
        <Route path="/edit/:id" exact={true} component={EditPageComponent} />
        <Route path="/help" exact={true} component={HelpPageComponent} />
        <Route component={NoMatchPageComponent} />
      </Switch>
    </div>

  </BrowserRouter>
);
};

export default AppRouter;
