import { useState } from "react";
import produit_1 from "../assets/produit_1.jpg";
import produit_2 from "../assets/produit_2.jpg";

function Product() {
  const [mainImage, setMainImage] = useState(produit_1);

  const images = [produit_1, produit_2];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <section
        className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-b from-purple-100 to-white cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NeckSens</h1>
      </section>

      {/* Product Section */}
      <section className="py-16 px-6 bg-white grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Images */}
        <div>
          <img
            src={mainImage}
            alt="produit"
            className="w-[500px] h-[500px] object-cover rounded-xl shadow-lg mb-4"
          />
          <div className="flex gap-4 justify-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className="w-20 h-20 object-cover rounded-lg border-2 border-gray-200 hover:border-purple-500 cursor-pointer"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <p className="text-lg mb-6">
            Collier intelligent pour animaux - surveillez la santé de votre
            compagnon à quatre pattes grâce à un capteur dernier cri connecté à
            votre smartphone.
          </p>

          <div className="mb-4">
            <p className="font-semibold mb-2">Couleurs disponibles :</p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer shadow-md hover:scale-105 transition-transform" />
              <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer shadow-md hover:scale-105 transition-transform" />
              <div className="w-8 h-8 rounded-full bg-black cursor-pointer shadow-md hover:scale-105 transition-transform" />
            </div>
          </div>

          <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-2xl text-lg shadow-lg hover:bg-purple-700 transition" onClick={() => (alert("Achat effectué"))}>
            Acheter - 210€
          </button>
        </div>
      </section>
    </div>
  );
}

export default Product;
