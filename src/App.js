import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Location } from './Location'
import { Story } from './Story';
import { Feedback } from './Feedback'
import { Faq } from './Faq'
import { Menu } from './Menu'
import { NoMatch } from './NoMatch'
import { Ticket } from './Ticket'
import { Login } from './Authenticate'
import { Navigationbar } from './components/NavigationBar'
import { Order } from './Oder';
import GA from './components/GoogleAnalytics'
import { TicketData } from './TicketData';
import { TicketDetail } from './TicketDetail';
import { ThankYou } from './components/ThankYou';
//import Link from 'react-scroll'
//const Navigationbar = lazy(()=>import('./components/NavigationBar').then(mod =>({default:mod.Navigationbar})))
//const Home = lazy(()=>import('./Home').then(mod =>({default:mod.Home})))
//import {Footer} from './components/Footer'
//import React,{lazy, Suspense} from 'react';
//import loadable from '@loadable/component'
//import {Layout} from './components/Layout'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigationbar />
        {
          GA.init() && <GA.RouteTracker />
        }
        <Switch>
          <Route exact path="/brandsite/" component={Home} />
          <Route exact path="/brandsite/order" component={Order} />
          <Route path="/brandsite/location" component={Location} />
          <Route path="/brandsite/story" component={Story} />
          <Route path="/brandsite/feedback" component={Feedback} />
          <Route path="/brandsite/faq" component={Faq} />
          <Route path="/brandsite/menu" component={Menu} />
          <Route path="/brandsite/ticket" component={Ticket} />
          <Route path="/brandsite/authenticate" component={Login} />
          <Route path="/brandsite/ticketdata" component={TicketData} />
          <Route path="/brandsite/ticketdetail" component={TicketDetail} />
          <Route path="/brandsite/thankyou" component={ThankYou} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;
