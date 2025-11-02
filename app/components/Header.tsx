import Image from 'next/image';

const Header = ({ setActiveView, activeView }: { setActiveView: (view: string) => void, activeView: string }) => {
  const navLinks = ['inicio', 'sobre-mi', 'servicios', 'cursos', 'testimonios', 'contacto'];

  return (
    <header className="w-full bg-white shadow-md z-50 relative">
      <nav className="container mx-auto px-10 pt-8 pb-2 flex justify-between items-center">
        <div className="relative z-10 flex items-center gap-x-8 bg-white">
          <Image src="/images/encabezado_trans.png" alt="Translucent Header" width={350} height={110} />
        </div>
        <div className="flex-grow flex justify-center">
          <div className="flex items-center" style={{ gap: '32px' }}>
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link}`} // Use href for navigation
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  setActiveView(link);
                }}
                className={`p-0 border-none bg-transparent appearance-none cursor-pointer font-medium transition-all duration-300 ease-in-out no-underline text-[var(--text-color)]
                  ${activeView === link ? 'text-[var(--title-color)]' : 'hover:text-[var(--title-color)]'}
                `} style={{ fontSize: '1.25rem' }}>
                {link.charAt(0).toUpperCase() + link.slice(1).replace('-', ' ')}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <a href="https://wa.me/5493537661410" target="_blank" rel="noopener noreferrer" className="mr-6 inline-block rounded-full shadow-lg border-2 border-purple-700 hover:bg-purple-600 hover:border-purple-800 hover:scale-105 hover:shadow-xl transition-all duration-300 text-base tracking-wide focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2" style={{backgroundColor: '#800080', color: 'white', fontWeight: 'bold', textDecoration: 'none', padding: '1.5rem 4rem'}}>
            RESERVAR CITA
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
