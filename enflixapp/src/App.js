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
import {Navigation} from './Navigation/Navigation';
import {Dashboard} from './Admin/Dashboard';
import {Footer} from './Footer/Footer';
import { RegjisoretEFilmit } from './Admin/RegjisoretEFilmit/RegjisoretEFilmit';
import{DetajetERegjisoreveTeFilmit} from './Regjisoret/DetajetERegjisoreveTeFilmit';
import{KategoritEFilmit} from './Admin/KategoritEFilmit/KategoritEFilmit';
import{KategoriteESerialit} from './Admin/KategoriteESerialit/KategoriteESerialit';
import{RegjisoretESerialit} from './Admin/RegjisoretESerialit/RegjisoretESerialit';
import { AktorFilmi } from './Aktort/AktorFilmi';
import{PageNotFound} from './PageNotFound/PageNotFound';
import { AktorSeriali } from './Aktort/AktorSeriali';
import { DetajetERegjisoritTeSerialit } from './Regjisoret/DetajetERegjisoritTeSerialit';
import { RegjisorSeriali } from './Regjisoret/RegjisorSeriali';
import{RegjisorFilmi} from './Regjisoret/RegjisorFilmi';
import{ProducentFilmi} from './Producentet/ProducentFilmi';
import{ProducentSeriali} from './Producentet/ProducentSeriali';

function App() {
  return (
    <BrowserRouter>

     <Navigation/>

     <Switch>
     <Route path='/' component={AktortEFilmit} exact/>
       <Route path='/aktortefilmit' component={AktortEFilmit} exact/>
       <Route path='/detajeteaktorittefilmit/:id' component={DetajetEAktoritTeFilmit} exact/>
       <Route path='/aktorteserialit' component={AktortESerialit} exact/>
       <Route path='/detajeteaktoritteserialit/:id' component={DetajetEAktoritTeSerialit} exact/>
       <Route path='/producentetefilmit' component={ProducentetEFilmit} exact/>
       <Route path='/detajeteproducentevetefilmit/:id' component={DetajetEProducenteveTeFilmit} exact/>
       <Route path='/producenteteserialit' component={ProducentetESerialit} exact/>
       <Route path='/detajeteproducenteveteserialit/:id' component={DetajetEProducenteveTeSerialit} exact/>
       <Route path='/dashboard' component={Dashboard} exact/>
       <Route path='/regjisoretefilmit' component={RegjisoretEFilmit} exact/>
       <Route path='/detajeteregjisorevetefilmit/:id' component={DetajetERegjisoreveTeFilmit} exact/>
       <Route path='/detajeteregjisoritteserialit/:id' component={DetajetERegjisoritTeSerialit} exact/>
       <Route path='/kategoritefilmit' component={KategoritEFilmit} exact/>
       <Route path='/kategoriteserialit' component={KategoriteESerialit} exact/>
       <Route path='/regjisoreteserialit' component={RegjisoretESerialit} exact/>
       <Route path='/aktorfilmi' component={AktorFilmi} exact/>
       <Route path='/aktorseriali' component={AktorSeriali} exact/>
       <Route path='/regjisorseriali' component={RegjisorSeriali} exact/>
       <Route path='/regjisorfilmi' component={RegjisorFilmi} exact/>
       <Route path='/producentfilmi' component={ProducentFilmi} exact/>
       <Route path='/producentseriali' component={ProducentSeriali} exact/>
       <Route component={PageNotFound} exact/>
     
       
     </Switch>

     <Footer/>
    </BrowserRouter>
  );
}

export default App;