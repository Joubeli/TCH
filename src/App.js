import "./App.css";
import Header from "./components/Header/Header";
import A_propos from "./components/A_propos/A_propos";
import Produits from "./components/Produits/Produits";
import QuiSommesNous from "./components/QuiSommesNous/QuiSommesNous";
import Partenaires from "./components/Partenaires/Partenaires";
import Contact from "./components/Contact/Contact";
import Accueil from "./components/Accueil/Accueil";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <A_propos />
      <Produits />
      <QuiSommesNous />
      <Partenaires />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
