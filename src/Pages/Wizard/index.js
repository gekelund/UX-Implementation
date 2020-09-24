import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import DeliveryInfo from './deliveryInfo';
import Overview from './overview';
import Confirmation from './confirmation';

const Wizard = () => {

const StepPages = () => {
    const location = useLocation();
    return (
      <>
        <nav >
          <ul >
            <li className={location.pathname === "/delivery-info" ? "active" : ""}>
              <Link to="/wizard/delivery-info">Delivery info</Link>
            </li>
            <li className={location.pathname === "/overview" ? "active" : ""}>
              <Link to="/wizard/overview">Overview</Link>
            </li>
            <li className={location.pathname === "/confirmation" ? "active" : ""}>
              <Link to="/wizard/confirmation">Confirmation</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/wizard/delivery-info" component={DeliveryInfo} />
        <Route path="/wizard/overview" component={Overview} />
        <Route path="/wizard/confirmation" component={Confirmation} />
      </>
    );
}

return (
    <div>
        <h1>Form wizard</h1>

        <Router>
            <StepPages />
        </Router>
    </div>
)
  };

export default Wizard;


