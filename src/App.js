import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs';
import AddPhone from './Pages/AddPhone';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PhoneDetails from './Pages/PhoneDetails';
import Phones from './Pages/Phones';
import Register from './Pages/Register';
import ErrorBoundary from './Components/ErrorBoundary';
function App() {
  return (
    <div className="App" >
      <ErrorBoundary>
        <Router basename="/phoneandphones/">
          <Header />
          <Switch>
            <Route exact path='/' data-testid='home' component={ Home } />
            <Route path='/about' component={ AboutUs } />
            <Route path='/login' component={ Login } />
            <Route path='/register' component={ Register } />
            <Route path="/add" component={ AddPhone } />
            <Route path='/phones' component={ Phones } />
            <Route path='/phone/:id' component={ PhoneDetails } />
          </Switch>
          <Footer />
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
