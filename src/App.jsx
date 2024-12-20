import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import Sedamslapova from "./pages/Sedamslapova";
import Women from "./pages/Women";
import Bled from "./pages/Bled";
import Naslovna from "./pages/Naslovna";

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Navbar based on the pathname */}
      {location.pathname !== "/naslovna" && location.pathname !== "/login" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Recepti />} />
        <Route path="/naslovna" element={<Naslovna />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/profil/profillista" element={<ProfilLista />} />
        <Route path="/recepti/doručak" element={<Doručak />} />
        <Route path="/recepti/ručak" element={<Ručak />} />
        <Route path="/recepti/tortilja" element={<Tortilja />} />
        <Route path="/recepti/večera" element={<Večera />} />
        <Route path="/putovanja" element={<PutovanjaGlavna />} />
        <Route path="/putovanja/sedamslapova" element={<Sedamslapova />} />
        <Route path="/putovanja/bled" element={<Bled />} />
        <Route path="/putovanja/blog" element={<Blog />} />
        <Route path="/zdravlje" element={<MentalnoZdravlje />} />
        <Route path="/zdravlje/radionice" element={<Radionice />} />
        <Route path="/zdravlje/blog" element={<ZdravljeBlog />} />
        <Route path="/pravila" element={<Pravila />} />
        <Route path="/dogadjanja" element={<Dogadjanja />} />
        <Route path="/dogadjanja/women" element={<Women />} />
      </Routes>
    </div>
  );
}

function MainApp() {
  return (
    <Router basename="/Mindful-Journeys">
      <App />
    </Router>
  );
}

export default MainApp;
