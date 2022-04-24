import logo from './logo.svg';
import './App.css';

import {AktortEFilmit} from './Admin/AktortEFilmit/AktortEFilmit';
import {ProducentetEFilmit} from './Admin/ProducentetEFilmit/ProducentetEFilmit';
import {AktortESerialit} from './Admin/AktortESerialit/AktortESerialit';
import {DetajetEAktoritTeFilmit} from './Aktort/DetajetEAktoritTeFilmit';
import {DetajetEAktoritTeSerialit} from './Aktort/DetajetEAktoritTeSerialit';
import {DetajetEProducenteveTeFilmit} from './Producentet/DetajetEProducenteveTeFilmit';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navigation} from './Admin/Navigation';
import {Footer} from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>

     <Navigation/>

     <Switch>
       <Route path='/aktortefilmit' component={AktortEFilmit} exact/>
       <Route path='/detajeteaktorittefilmit' component={DetajetEAktoritTeFilmit} exact/>
       <Route path='/aktorteserialit' component={AktortESerialit} exact/>
       <Route path='/detajeteaktoritteserialit' component={DetajetEAktoritTeSerialit} exact/>
       <Route path='/producentetefilmit' component={ProducentetEFilmit} exact/>
       <Route path='./detajeteproducentevetefilmit' component={DetajetEProducenteveTeFilmit} exact/>
     </Switch>

     <Footer/>
    </BrowserRouter>
  );
}

export default App;