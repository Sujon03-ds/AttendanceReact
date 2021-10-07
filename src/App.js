import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import EditUser from './components/users/EditUser';
import Users from './components/pages/Users';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/edit/:id" component={EditUser} />              
          <Route exact path="/users" component={Users} />        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
