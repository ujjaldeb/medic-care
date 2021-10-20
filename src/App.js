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
import AuthProvider from './context/AuthProvider';
import ParivateRoute from './pages/ParivateRoute/ParivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <ParivateRoute path="/news">
              <News></News>
            </ParivateRoute>
            <ParivateRoute path="/appointment">
              <Appointment></Appointment>
            </ParivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <ParivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </ParivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
