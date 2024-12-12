import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Profil from "./pages/Profil";
import Pravila from "./pages/Pravila";
import Doručak from "./pages/Doručak";
import Ručak from "./pages/Ručak";
import Večera from "./pages/Večera";
import Blog from "./pages/Blog";
import Radionice from "./pages/Radionice";
import Dogadjanja from "./pages/Dogadjanja";
import MentalnoZdravlje from "./pages/MentalnoZdravlje";
import ProfilLista from "./pages/ProfilLista";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/ranglista" element={<ProfilLista />} />
        <Route path="/pravila" element={<Pravila />} />
        <Route path="/recepti/doručak" element={<Doručak />} />
        <Route path="/recepti/ručak" element={<Ručak />} />
        <Route path="/recepti/večera" element={<Večera />} />
        <Route path="/putovanja/blog" element={<Blog />} />
        <Route path="/zdravlje" element={<MentalnoZdravlje />} />
        <Route path="/zdravlje/radionice" element={<Radionice />} />
        <Route path="/dogadjanja" element={<Dogadjanja />} />
      </Routes>
    </Router>
  );
}

export default App;
