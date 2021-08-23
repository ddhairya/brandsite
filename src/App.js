import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import {Home} from './Home';
import {Location} from './Location'
import {Story} from './Story';
import {Feedback} from './Feedback'
import {Faq} from './Faq'
import {Menu} from './Menu'
import {NoMatch} from './NoMatch'
import {Ticket} from './Ticket'
import {Login} from './Authenticate'
import {Navigationbar} from './components/NavigationBar'
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
        <Navigationbar/>
        { 
          GA.init() && <GA.RouteTracker /> 
        }
        <Switch>            
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/order" component = {Order}/>
          <Route path = "/location" component = {Location} />
          <Route path = "/story" component = {Story}/>
          <Route path = "/feedback" component = {Feedback} />
          <Route path = "/faq" component = {Faq} />
          <Route path = "/menu" component = {Menu} />
          <Route path = "/ticket" component = {Ticket} />
          <Route path = "/authenticate" component = {Login} />
          <Route path = "/ticketdata" component = {TicketData} />
          <Route path = "/ticketdetail" component = {TicketDetail} />
          <Route path = "/thankyou" component = {ThankYou} />            
          <Route component = {NoMatch}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;
