import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { AdvertsPage, AdvertPage, NewAdvPage } from "./components/adverts";
import { LoginPage, PrivateRoute } from "./components/auth";
import { useState } from "react";
import { logout } from "./components/auth/service";

import { AuthContextProvider } from "./components/auth/context";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    logout().then(() => setIsLogged(false));
  };

  return (
    <Router>
      <AuthContextProvider value={{ isLogged, handleLogout, handleLogin }}>
        <div className="app">
          <Switch>
            <Route path="/login">
              {(routeProps) => <LoginPage {...routeProps} />}
            </Route>
            <PrivateRoute path="/adv/new" component={NewAdvPage} />
            <PrivateRoute path="/ads/:advId" component={AdvertPage} />
            <PrivateRoute path="/ads" component={AdvertsPage} />
            <PrivateRoute exact path="/">
              <Redirect to="/ads" />
            </PrivateRoute>
            <Route path="/404">
              <div>404 || Not Found Page</div>
              <Link style={{ color: "rgb(1, 162, 151)" }} to="/">
                Volver al inicio
              </Link>
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;