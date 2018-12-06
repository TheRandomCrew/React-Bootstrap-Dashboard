import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBarView from './Visual/NavBarView';
import FooterView from './Visual/FooterView';
import HomeView from './Visual/HomeView';

const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBarView />
        <Switch>
          <Route path="/" exact component={HomeView} />
          {/* <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
        </Switch>
        <FooterView />
      </React.Fragment>
    </Router>
  )
}

export default AppRouter
