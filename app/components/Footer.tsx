import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg text-[var(--text-color)]">&copy; {new Date().getFullYear()} Carla Snopek. Todos los derechos reservados.</p>
        </div>
        <div className="flex mt-6 md:mt-0 space-x-8">
          <a href="https://www.instagram.com/carlasnopek.psicologa?igsh=NWxndnJpYXRkbG1o" target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)] hover:text-[var(--title-color)] transition-colors">
            <FaInstagram className="text-4xl" />
          </a>
          <a href="https://wa.me/5493537661410" target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)] hover:text-[var(--title-color)] transition-colors">
            <FaWhatsapp className="text-4xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
