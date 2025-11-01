import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--background-color)] border-t border-gray-200 mt-12">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-[var(--text-color)]">&copy; {new Date().getFullYear()} Carla Snopek. Todos los derechos reservados.</p>
        </div>
        <div className="flex mt-4 md:mt-0 space-x-6">
          <a href="https://www.instagram.com/carlasnopek.psicologa?igsh=NWxndnJpYXRkbG1o" target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)] hover:text-[var(--title-color)]">
            Instagram
          </a>
          <a href="https://wa.me/5493537661410" target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)] hover:text-[var(--title-color)]">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
