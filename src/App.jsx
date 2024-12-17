import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ZdravljeBlog from "./pages/ZdravljeBlog";
import PutovanjaGlavna from "./pages/PutovanjaGlavna";
import Recepti from "./pages/Recepti";
import Navbar from "./component/Navbar"; 
import Login from "./pages/Login";
import Tortilja from "./pages/Tortilja";

function App() {
  return (
    <Router basename="/Mindful-Journeys">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/ranglista" element={<ProfilLista />} />
        <Route path="/recepti" element={<Recepti />} />
        <Route path="/recepti/doručak" element={<Doručak />} />
        <Route path="/recepti/ručak" element={<Ručak />} />
        <Route path="/recepti/tortilja" element={<Tortilja />} />
        <Route path="/recepti/večera" element={<Večera />} />
        <Route path="/putovanja" element={<PutovanjaGlavna />} />
        <Route path="/putovanja/blog" element={<Blog />} />
        <Route path="/zdravlje" element={<MentalnoZdravlje />} />
        <Route path="/zdravlje/radionice" element={<Radionice />} />
        <Route path="/zdravlje/blog" element={<ZdravljeBlog />} />
        <Route path="/pravila" element={<Pravila />} />
        <Route path="/dogadjanja" element={<Dogadjanja />} />
      </Routes>
    </Router>
  );
}

export default App;
