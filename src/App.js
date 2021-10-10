import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './components/layouts/Navbar.js';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import AddOrEditCompany from './components/companies/AddOrEditCompany';
import Companies from './components/pages/Companies';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import PrivateRoute from './PrivateRoute';



function App() {
  return (
    <BrowserRouter>
      <section className=" masthead page-section" id="contact">
        <div className="container">
          <Navbar />
          <ToastContainer />
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <PrivateRoute exact path="/companies" component={Companies} />
            <PrivateRoute exact path="/companies/add" component={AddOrEditCompany} />
            <PrivateRoute exact path="/companies/edit/:id" component={AddOrEditCompany} />

          </Switch>

        </div>
      </section>

    </BrowserRouter>
  );
}

export default App;
