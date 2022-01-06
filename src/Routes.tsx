import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Auth from 'pages/Admin/Auth';
import Login from 'pages/Admin/Auth/Login';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      {<Redirect from="/admin/auth" to="/admin/auth/login" exact />}
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
