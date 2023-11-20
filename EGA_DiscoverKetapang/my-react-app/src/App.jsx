import { Routes, Route } from "react-router-dom";
import Welcomepages from "./pages/Welcomepages";
import Loginpages from "./pages/Loginpages";
import Registerpages from "./pages/Registerpages";
import Homepages from "./pages/Homepages";
import Wisatapages from "./pages/Wisatapages";
import WisatapagesA from "./pages/WisatapagesA";
import WisatapagesS from "./pages/WisatapagesS";
import Editakunpages from "./pages/Editakunpages";
import Akunsayapages from "./pages/Akunsayapages";
import Daftarpemandu from "./pages/Daftarpemandu";
import Datapemandu from "./pages/Datapemandu";
import Profilpemandu from "./pages/Profilpemandu";
import Profilpemandu1 from "./pages/Profilpemandu1";
import Profilpemandu2 from "./pages/Profilpemandu2";
import Profilpemandu3 from "./pages/Profilpemandu3";
import Artikelpages from "./pages/Cardartikel";
import Testimonipages from "./pages/Testimonipages";
import Paketwisata1 from "./pages/Paketwisata1";
import Paketwisata2 from "./pages/Paketwisata2";
import Paketwisata3 from "./pages/Paketwisata3";
function App() {
  return (
    <>
      {/* <Navbarcomponent /> */}
      <Routes>
        <Route path="/" Component={Welcomepages} />
        <Route path="/login" Component={Loginpages} />
        <Route path="/register" Component={Registerpages} />
        <Route path="/home" Component={Homepages} />
        <Route path="/wisata" Component={Wisatapages} />
        <Route path="/wisataS" Component={WisatapagesS} />
        <Route path="/wisataA" Component={WisatapagesA} />
        <Route path="/daftarpemandu" Component={Daftarpemandu} />
        <Route path="/datapemandu" Component={Datapemandu} />
        <Route path="/profilpemandu" Component={Profilpemandu} />
        <Route path="/profilpemandu1" Component={Profilpemandu1} />
        <Route path="/profilpemandu2" Component={Profilpemandu2} />
        <Route path="/profilpemandu3" Component={Profilpemandu3} />
        <Route path="/testimoni" Component={Testimonipages} />
        <Route path="/artikel" Component={Artikelpages} />
        <Route path="/edit" Component={Editakunpages} />
        <Route path="/akunsaya" Component={Akunsayapages} />
        <Route path="/paketwisata1"  Component={Paketwisata1} />
        <Route path="/paketwisata2"  Component={Paketwisata2} />
        <Route path="/paketwisata3"  Component={Paketwisata3} />
      </Routes>
      {/* <Footercomponent /> */}
    </>
  );
}

export default App;
