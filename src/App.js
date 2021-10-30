
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Navigation from './pages/Shared/Navigation/Navigation';
import Home from './pages/Home/Home';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import AddService from './pages/AddService/AddService';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PlaceOrder from './pages/plaseOrder/PlaceOrder';
import MakePrivate from './Hooks/MakePrivate';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/myOrders">
              <MyOrders/>
            </Route>
            <Route path="/manageOrder">
              <ManageOrders/>
            </Route>
            <Route path="/addService">
              <AddService/>
            </Route>
            <MakePrivate path="/placeOrder/:serviceId">
              <PlaceOrder/>
            </MakePrivate>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;