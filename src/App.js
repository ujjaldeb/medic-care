import './App.css';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Footer from './pages/Shared/Footer/Footer';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/news">
            <News></News>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/service/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
