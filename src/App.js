
import './App.css';
import Header from './component/Header/Header'
import About from './component/About/About'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceLoad from './component/ServiceLoad/ServiceLoad';
import Dietdata from './component/DIetData/Dietdata';
import HomeService from './component/HomeService/HomeService';
import Footer from './component/Footer/Footer';

function App() {
 
  return (
    <div className="App">
     <div>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact  path="/">
          <HomeService></HomeService>
            
          </Route>
          <Route exact path="/home">
            <HomeService></HomeService>
            </Route>
          <Route  path="/about">
            <About></About>
          </Route>
          <Route exact  path="/services">
            <ServiceLoad></ServiceLoad>
            
          </Route>
          <Route  path="/dietPlans">
            <Dietdata></Dietdata>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
        
      </Router>
     </div>
     
    </div>
  );
}

export default App;
