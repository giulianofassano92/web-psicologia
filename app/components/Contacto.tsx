import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contacto = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-8">¿Damos el primer paso?</h2>
        <p className="max-w-3xl mx-auto text-xl mb-12 leading-relaxed text-gray-600">
          Si algo de esto resuena en ti, te invito a contactarme. Sostengo un firme compromiso de brindarte un espacio caracterizado por la calidez, la comprensión y la excelencia profesional.
        </p>
        <div className="flex justify-center items-center space-x-8">
          <a 
            href="https://wa.me/5493537661410" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gray-800 text-white font-bold py-5 px-12 rounded-full hover:bg-black text-xl shadow-lg flex items-center transition-transform transform hover:scale-105"
          >
            <FaWhatsapp className="mr-4 text-3xl" /> Escríbeme por WhatsApp
          </a>
          <a 
            href="https://www.instagram.com/carlasnopek.psicologa?igsh=NWxndnJpYXRkbG1o" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 font-bold text-xl flex items-center hover:text-black transition-opacity"
          >
            <FaInstagram className="mr-4 text-3xl" /> Sígueme en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
