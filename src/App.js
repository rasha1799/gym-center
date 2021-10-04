
import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header'
import Services from './component/Services/Services'
import About from './component/About/About'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import DIetPlans from './component/DietPlans/DIetPlans';
import { useEffect, useState } from 'react';


function App() {
  const [services, setServices] = useState([]);
  useEffect(()=>{
fetch('./gym.json').then(res=>res.json()).then(data=>setServices(data))


  },[services])
  return (
    <div className="App">
     <div>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home></Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route  path="/services">
            <Services></Services>
          </Route>
          <Route  path="/dietPlans">
           <DIetPlans></DIetPlans>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        
      </Router>
     </div>
     <div>
    {
      services.slice(0,3).map(service=><Home key={service.name} service={service}></Home>)
     }
     </div>
     <div>
       {
         services.map(service=><Services key={service.name} service={service}></Services>)
         
       }
     </div>
    </div>
  );
}

export default App;
