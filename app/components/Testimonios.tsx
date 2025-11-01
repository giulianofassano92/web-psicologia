const TestimonialCard = ({ text, author }: { text: string, author: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <p className="text-lg text-[var(--text-color)] italic">"{text}"</p>
    <p className="text-right font-semibold text-[var(--title-color)] mt-4">- {author}</p>
  </div>
);

const Testimonios = () => {
  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[var(--title-color)] mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
