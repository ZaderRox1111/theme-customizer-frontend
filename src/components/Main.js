import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import VSCode from '../pages/VSCode';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/vscode' component={VSCode}></Route>
    </Switch>
  );
}

export default Main;
