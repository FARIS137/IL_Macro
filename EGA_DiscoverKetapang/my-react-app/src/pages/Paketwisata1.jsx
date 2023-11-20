import Footercomponent from "../Component/Fragments/Footercomponent";
import Bgimage from "../../public/images/bgpaket.png";
import { Link } from "react-router-dom";
import back from "../assets/img/scrollleft.png";
import Navbarcomponent from "../Component/Fragments/Navbarwisata";

const Paketwisata1 = () => {
  return (
    <div>
      <div className=" bg-secondary h-vh-100">
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${Bgimage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
          }}
        >
          <Navbarcomponent />
          <div className="d-flex justify-content-center align-items-center h-75 ">
            <h1 className="text-white fw-bold text-center w-50  ">
              Bersama kami menjelajahi Ketapang dengan menyenangkan
            </h1>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div
            className="backdatapemandu"
            style={{ marginTop: "4rem", marginLeft: "6rem" }}
          >
            <Link to="/datapemandu">
              <img
                src={back}
                alt="back"
                title="balik ke halaman data pemandu"
              />
            </Link>
          </div>
          <div
            style={{
              fontFamily: "Tillana",
              marginTop: "100px",
              marginLeft: "20rem",
            }}
            className="text-light text-center"
          >
            <h2
              style={{
                textAlign: "center",
              }}
            >
              Daftar Paket Wisata 1
              <hr
                className="text-light"
                style={{ borderWidth: "2px", width: "350px" }}
              />
            </h2>
          </div>
        </div>
        
        <Footercomponent></Footercomponent>
      </div>
    </div>
  );
};

export default Paketwisata1;
