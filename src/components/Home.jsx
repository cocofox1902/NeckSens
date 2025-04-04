import insta from "../assets/insta.jpg";
import surveliance from "../assets/surveliance.jpg";
import elegance from "../assets/elegance.png";
import respect from "../assets/respect.png";
import phone from "../assets/phone.png";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <section className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-b from-purple-100 to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NeckSens</h1>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          Embellissez et protégez votre compagnon à quatre pattes grâce à un
          collier intelligent qui analyse son souffle pour détecter des maladies
          graves avant qu'elles ne soient visibles.
        </p>
        <button
          className="bg-purple-600 text-white px-6 py-3 rounded-2xl text-lg shadow-lg hover:bg-purple-700 transition"
          onClick={() => (window.location.href = "/product")}
        >
          Acheter maintenant pour seulement 210€
        </button>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-12">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="content-center">
              <h2 className="text-3xl font-bold mb-4">
                Surveillance de santé en temps réel
              </h2>
              <p className="text-lg">
                Grâce à un capteur de dernière génération intégré dans le
                collier, surveillez le souffle de votre animal pour détecter des
                maladies telles que le diabète, l'insuffisance rénale ou
                certains cancers.
              </p>
            </div>
            <img
              src={surveliance}
              alt="surveliance"
              className="m-0 mt-2 md:m-8 w-96"
            />
          </div>

          <div className="flex flex-col-reverse md:grid md:grid-cols-2">
            <img src={phone} alt="phone" className="m-0 mt-2 md:m-8 md:h-96 h-full" />
            <div className="content-center">
              <h2 className="text-3xl font-bold mb-4">
                Application mobile intuitive
              </h2>
              <p className="text-lg conte">
                Recevez les résultats directement sur votre téléphone et soyez
                alerté(e) en cas d'anomalie. Réagissez rapidement pour protéger
                la santé de votre fidèle compagnon.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="content-center">
              <h2 className="text-3xl font-bold mb-4">Confort et élégance</h2>
              <p className="text-lg">
                Design haut de gamme, épuré, disponible en plusieurs couleurs
                pour s'adapter à votre style et celui de votre animal.
              </p>
            </div>
            <img
              src={elegance}
              alt="elegance"
              className="m-0 mt-2 md:m-8 w-96"
            />
          </div>

          <div className="flex flex-col-reverse md:grid md:grid-cols-2">
            <img src={respect} alt="respect" className="m-0 mt-2 md:m-8 w-96" />
            <div className="content-center">
              <h2 className="text-3xl font-bold mb-4">
                Respect de l'animal et de l'environnement
              </h2>
              <p className="text-lg">
                Moins de stress pour l'animal, moins de visites inutiles chez le
                vétérinaire, et des économies pour vous. Une solution
                responsable et respectueuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Suivez-nous sur Instagram</h2>
        <p className="text-lg mb-4">
          Scannez le QR code pour découvrir plus sur NeckSens et rejoindre notre
          communauté.
        </p>
        <div className="flex justify-center">
          <img
            src={insta}
            alt="QR Code Instagram NeckSens"
            className="w-[300px] h-[300px] object-contain"
          />
        </div>
      </section>

      <footer className="text-center p-6 bg-purple-100 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} NeckSens - Tous droits réservés
      </footer>
    </div>
  );
}

export default Home;
