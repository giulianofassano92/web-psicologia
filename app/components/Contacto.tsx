import Link from 'next/link';

const Contacto = () => {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[var(--title-color)] mb-8">¿Damos el primer paso?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Si algo de esto resuena en ti, te invito a contactarme. Sostengo un firme compromiso de brindarte un espacio caracterizado por la calidez, la comprensión y la excelencia profesional.
        </p>
        <div className="flex justify-center items-center space-x-8">
          <a 
            href="https://wa.me/5493537661410" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[var(--title-color)] text-white font-bold py-4 px-10 rounded-full hover:opacity-90 text-lg shadow-lg"
          >
            Escríbeme por WhatsApp
          </a>
          <a 
            href="https://www.instagram.com/carlasnopek.psicologa?igsh=NWxndnJpYXRkbG1o" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[var(--title-color)] font-bold text-lg"
          >
            Sígueme en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
