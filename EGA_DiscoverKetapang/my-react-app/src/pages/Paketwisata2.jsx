import Footercomponent from "../Component/Fragments/Footercomponent";
import Navbarcomponent from "../Component/Fragments/Navbarwisata";
import Bgimage from "../../public/images/bgpaket.png";


const Paketwisata2 = () => {
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

      <h1></h1>
      <Footercomponent></Footercomponent>
    </div>
  </div>
);
};

export default Paketwisata2;