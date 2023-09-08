
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import General from './compoments/General';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Prestataire from './compoments/Prestataire';
import Connexion from './compoments/Connexion';
import Vendeur from './compoments/Vendeur';
import Produit from './compoments/Produit';
import Client from './compoments/Client';
import View from './compoments/view';
import View2 from './compoments/view2';
import Support from './compoments/Support';

function App() {
  
  return (
        <Router>
          <Routes>
            <Route  path='/' element={<Connexion/>}></Route>
            <Route  path='/Dashboard' element={<General/>}></Route>
            <Route path='/Vendeur' element={<Vendeur/>}></Route>
            <Route path='/Prestataire' element={<Prestataire/>}></Route>
            <Route path='/Produit' element={<Produit/>}></Route>
            <Route path='/Client' element={<Client/>}></Route>
            <Route exact path='/view/:id' element={<View/>}></Route>
            <Route exact path='/view2/:id' element={<View2/>}></Route>
            <Route exact path='/support' element={<Support/>}></Route>


          </Routes>
        </Router>
  );
}

export default App;
