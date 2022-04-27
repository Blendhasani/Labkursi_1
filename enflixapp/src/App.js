import logo from './logo.svg';
import './App.css';

import {AktortEFilmit} from './Admin/AktortEFilmit/AktortEFilmit';
import {ProducentetEFilmit} from './Admin/ProducentetEFilmit/ProducentetEFilmit';
import { ProducentetESerialit } from './Admin/ProducentetESerialit/ProducentetESerialit';
import {AktortESerialit} from './Admin/AktortESerialit/AktortESerialit';
import {DetajetEAktoritTeFilmit} from './Aktort/DetajetEAktoritTeFilmit';
import {DetajetEAktoritTeSerialit} from './Aktort/DetajetEAktoritTeSerialit';
import {DetajetEProducenteveTeFilmit} from './Producentet/DetajetEProducenteveTeFilmit';
import {DetajetEProducenteveTeSerialit} from './Producentet/DetajetEProducenteveTeSerialit';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navigation} from './Admin/Navigation';
import {Dashboard} from './Admin/Dashboard';
import {Footer} from './Footer/Footer';
import { RegjisoretEFilmit } from './Admin/RegjisoretEFilmit/RegjisoretEFilmit';
import{DetajetERegjisoreveTeFilmit} from './Regjisoret/DetajetERegjisoreveTeFilmit';
import{KategoritEFilmit} from './Admin/KategoritEFilmit/KategoritEFilmit';
import{PageNotFound} from './PageNotFound/PageNotFound';

function App() {
  return (
    <BrowserRouter>

     <Navigation/>

     <Switch>
     <Route path='/' component={DetajetEAktoritTeFilmit} exact/>
       <Route path='/aktortefilmit' component={AktortEFilmit} exact/>
       <Route path='/detajeteaktorittefilmit' component={DetajetEAktoritTeFilmit} exact/>
       <Route path='/aktorteserialit' component={AktortESerialit} exact/>
       <Route path='/detajeteaktoritteserialit' component={DetajetEAktoritTeSerialit} exact/>
       <Route path='/producentetefilmit' component={ProducentetEFilmit} exact/>
       <Route path='/detajeteproducentevetefilmit' component={DetajetEProducenteveTeFilmit} exact/>
       <Route path='/producenteteserialit' component={ProducentetESerialit} exact/>
       <Route path='/detajeteproducenteveteserialit' component={DetajetEProducenteveTeSerialit} exact/>
       <Route path='/dashboard' component={Dashboard} exact/>
       <Route path='/regjisoretefilmit' component={RegjisoretEFilmit} exact/>
       <Route path='/detajeteregjisorevetefilmit' component={DetajetERegjisoreveTeFilmit} exact/>
       <Route path='/kategoritefilmit' component={KategoritEFilmit} exact/>
       <Route component={PageNotFound} exact/>
     </Switch>

     <Footer/>
    </BrowserRouter>
  );
}

export default App;