import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './views/navBar';
import NewYearsCookies from './components/newYearsCookie';
import ValentinesCookies from './components/valentinesCookie';
import StPaddyCookies from './components/StPaddyCookie';
import EasterCookies from './components/easterCookie';
import MothersDayCookie from './components/mothersDayCookie';
import FathersDayCookies from './components/fathersDayCookie';
import FourthJulyCookie from './components/4thJulyCookie';
import HolloweenCookies from './components/holloweenCookie';
import ThanksgivingCookies from './components/thanksgivingCookie';
import SpecialtyCookies from './components/specialtyCookies';
import Orders from './components/orders';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/FourthJulyCookie">
          <FourthJulyCookie/>
        </Route>
        <Route exact path="/EasterCookies">
          <EasterCookies/>
        </Route>
        <Route exact path="/FathersDayCookies">
          <FathersDayCookies/>
        </Route>
        <Route exact path="/HolloweenCookies">
          <HolloweenCookies/>
        </Route>
        <Route exact path="/MothersDayCookie">
            <MothersDayCookie/>
        </Route>
        <Route exact path="/NewYearsCookies">
          <NewYearsCookies/>
        </Route>
        <Route exact path="/StPaddyCookies">
          <StPaddyCookies/>
        </Route>
        <Route exact path="/ThanksgivingCookies">
          <ThanksgivingCookies/>
        </Route>
        <Route exact path="/ValentinesCookies">
          <ValentinesCookies/>
        </Route>
        <Route exact path="/Orders">
          <Orders/>
        </Route>
        <Route exact path="/SpecialtyCookies">
          <SpecialtyCookies/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
