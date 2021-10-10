import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar.js';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import AddOrEditCompany from './components/companies/AddOrEditCompany';
import Companies from './components/pages/Companies';



function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/companies/edit/:id" component={AddOrEditCompany} />              
          <Route exact path="/companies" component={Companies} />        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
