
import { Link } from "react-router-dom";
import './Navigation.css';
import logo from '../../../images/Travel1-logo.png';
import UseAuth from "../../../Hooks/UseAuth";

const Navigation = () => {

  const { user, handleSignOut } = UseAuth();

    return (
        <nav className="nav-style">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <input type="checkbox" id="click"/>
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          { user.email && <li> Welcome { user.displayName}</li>}
          <li><Link className="active " to="/home">Home</Link></li>
          { user.email && <li><Link  to="/myOrders">My Orders</Link></li>}
          { user.email && <li><Link to="/manageOrder">Manage Orders</Link></li>}
          {user.email && <li><Link to="/addService">Add New Service</Link></li>}
          
          { user.email ? <li><button onClick={handleSignOut} className="signOut-btn" >Logout</button></li> : <li><Link to="/login">Login</Link></li>}
          
        </ul>
      </nav>
    );
};

export default Navigation;