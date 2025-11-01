import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[var(--background-color)] shadow-md w-full">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl font-bold text-[var(--title-color)]">
            Carla Snopek
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#inicio" className="text-[var(--text-color)] hover:text-[var(--title-color)]">Inicio</Link>
          <Link href="#sobre-mi" className="text-[var(--text-color)] hover:text-[var(--title-color)]">Sobre mí</Link>
          <Link href="#servicios" className="text-[var(--text-color)] hover:text-[var(--title-color)]">Servicios</Link>
          <Link href="#cursos" className="text-[var(--text-color)] hover:text-[var(--title-color)]">Cursos</Link>
          <Link href="#testimonios" className="text-[var(--text-color)] hover:text-[var(--title-color)]">Testimonios</Link>
          <Link href="#contacto" className="text-[var(--text-color)] hover:text-[var(--title-color)]">Contacto</Link>
        </div>
        <div>
          <a 
            href="https://wa.me/5493537661410" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[var(--title-color)] text-white font-bold py-2 px-4 rounded hover:opacity-90"
          >
            Agendar Sesión
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
