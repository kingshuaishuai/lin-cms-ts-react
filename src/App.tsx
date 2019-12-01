import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import LoginPage from './Pages/LoginPage/LoginPage';

const App: React.FC = () => {
  useEffect(() => {
    document.getElementById('loader')!.style.display = 'none';
  });
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage}></Route>
      </Switch>
    </Router>
  );
};

export default App;
