const ServiceCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h3 className="text-2xl font-bold text-[var(--title-color)] mb-4">{title}</h3>
    <div className="space-y-4 text-[var(--text-color)]">
      {children}
    </div>
  </div>
);

const Servicios = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[var(--title-color)] mb-12">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <ServiceCard title="Terapia Online Individual">
            <p>Un espacio confidencial y personalizado para explorar tus desafíos. El proceso se basa en:</p>
            <ul className="list-disc list-inside space-y-2 pt-2">
              <li><strong>Conocernos:</strong> Crear un espacio de calidez y comprensión donde te sientas seguro/a.</li>
              <li><strong>Entender:</strong> Brindarte información de calidad para que entiendas a fondo lo que te sucede.</li>
              <li><strong>Herramientas:</strong> Enseñarte estrategias concretas para ayudarte a aceptar y/o cambiar tu situación actual.</li>
            </ul>
          </ServiceCard>

          <ServiceCard title="Grupo de Habilidades DBT">
            <p>Participa en un entorno de grupo para aprender y practicar habilidades de la Terapia Dialéctico-Conductual (DBT), enfocadas en la regulación emocional y la efectividad interpersonal.</p>
            <p className="font-semibold mt-4">Próximamente.</p>
          </ServiceCard>

          <ServiceCard title="Cursos para Profesionales">
            <p>Formación y supervisión para psicólogos y estudiantes avanzados que deseen profundizar en terapias basadas en la evidencia y mejorar su práctica clínica.</p>
            <p className="font-semibold mt-4">Próximamente.</p>
          </ServiceCard>

        </div>
      </div>
    </section>
  );
};

export default Servicios;
