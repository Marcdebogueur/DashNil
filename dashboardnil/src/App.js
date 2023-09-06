
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import General from './compoments/General';
import { BrowserRouter ,Route, Routes} from "react-router-dom";

import Connexion from './compoments/Connexion';

function App() {
  
  return (
        <div > 
          <Connexion/>
        </div>
  );
}

export default App;
