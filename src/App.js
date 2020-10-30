import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolioes from './pages/Portfolioes';
import PortfolioDetail from './pages/PortfolioDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';


import './assets/css/bootstrap.css';
import './assets/css/font-awesome.min.css';
import './assets/css/magnific-popup.css';
import './assets/scss/style.scss';

import configureStore from "./store";
const store = configureStore({});


function App() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/portfolio" component={Portfolioes} />
          <Route path="/portfolio/:id" component={PortfolioDetail} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={BlogDetail} />
          <Route path="/contact" component={Contact} />
        </Router>
      </Provider>      
    );
}

export default App;
