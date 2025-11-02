const TestimonialCard = ({ text, author }: { text: string, author: string }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300">
    <p className="text-xl text-gray-600 italic leading-relaxed">"{text}"</p>
    <p className="text-right font-bold text-gray-800 mt-6 text-lg">- {author}</p>
  </div>
);

const Testimonios = () => {
  return (
    <section id="testimonios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <TestimonialCard 
            text="Carla me brindó herramientas que realmente hicieron un cambio en mi día a día. Su calidez y profesionalismo son destacables."
            author="Ana P."
          />
          <TestimonialCard 
            text="El proceso terapéutico fue revelador. Aprendí a entenderme mejor y a gestionar mis emociones de una forma que no creía posible."
            author="Marcos L."
          />
          <TestimonialCard 
            text="Recomiendo totalmente este espacio. Me sentí acompañada y segura en todo momento para poder abrirme y trabajar en mí."
            author="Sofía G."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
