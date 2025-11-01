import Header from './components/Header';
import Footer from './components/Footer';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Cursos from './components/Cursos';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';

const Inicio = () => (
  <section id="inicio" className="text-center py-24 bg-opacity-50" style={{backgroundColor: 'var(--background-color)'}}>
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-[var(--title-color)]">Acompañamiento Psicológico para tu Bienestar</h1>
      <p className="text-xl mt-6 max-w-3xl mx-auto text-[var(--text-color)]">Un espacio de calidez y comprensión para construir relaciones más saludables contigo y con los demás.</p>
      <a 
        href="https://wa.me/543537661410" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-10 inline-block bg-[var(--title-color)] text-white font-bold py-4 px-10 rounded-full hover:opacity-90 text-lg shadow-lg"
      >
        Agendar Sesión
      </a>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Inicio />
        <SobreMi />
        <Servicios />
        <Cursos />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
