import './App.css';
import Header from './components/Header/Header';
import Apropos from './components/Apropos/Apropos'
import Produits from './components/Produits/Produits'
import QuiSommesNous from './components/QuiSommesNous/QuiSommesNous'
import Partenaires from './components/Partenaires/Partenaires'
import Contact from './components/Contact/Contact'
import Accueil from './components/Accueil/Accueil';

function App() {
  return (
    <div className="App">
      <Header/>
      <Accueil/>
      <Apropos />
      <Produits/>
      <QuiSommesNous/>
      <Partenaires/>
      <Contact/>
    </div>
  );
}

export default App;
