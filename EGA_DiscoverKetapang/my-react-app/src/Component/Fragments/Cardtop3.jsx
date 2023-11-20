import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    desc: "Paket Wisata 1",
    images: "/images/gunung.png",
    url: "/paketwisata1",
  },
  {
    id: 2,
    desc: "Paket Wisata 2",
    images: "/images/rumah.png",
    url: "/paketwisata2",
  },
  {
    id: 3,
    desc: "Paket Wisata 3",
    images: "/images/laut.png",
    url: "/paketwisata3",
  },
];

const Cardtop3 = () => {
  return (
    <>
      {products.map((product) => (
        <div className="kartu d-grid gap-3" key={product.id}>
          <div className="kartu-container text-center">
            <Link to={product.url}>
              <img
                src={product.images}
                className="img-fluid"
                alt="Gambar"
              />
            </Link>
            <div className="kartu-body">
              <p className="fw-semibold">{product.desc}</p>
              <button className="btn btn-primary">
                <Link to={product.url} className="text-white text-decoration-none">
                  Lihat Detail >
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cardtop3;
