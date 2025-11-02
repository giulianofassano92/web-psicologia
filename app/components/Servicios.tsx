import Image from 'next/image';

const ServiceCard = ({ title, imageSrc, children }: { title: string, imageSrc: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative h-64">
      <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">{title}</h3>
      <div className="space-y-4 text-lg text-gray-600">
        {children}
      </div>
    </div>
  </div>
);

const Servicios = () => {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <ServiceCard title="Terapia Online Individual" imageSrc="/images/cesion.png">
            <p>Un espacio confidencial y personalizado para explorar tus desafíos. El proceso se basa en:</p>
            <ul className="list-disc list-inside space-y-3 pt-3">
              <li><strong>Conocernos:</strong> Crear un espacio de calidez y comprensión donde te sientas seguro/a.</li>
              <li><strong>Entender:</strong> Brindarte información de calidad para que entiendas a fondo lo que te sucede.</li>
              <li><strong>Herramientas:</strong> Enseñarte estrategias concretas para ayudarte a aceptar y/o cambiar tu situación actual.</li>
            </ul>
          </ServiceCard>

          <ServiceCard title="Grupo de Habilidades DBT" imageSrc="/images/imagen1.png">
            <p>Participa en un entorno de grupo para aprender y practicar habilidades de la Terapia Dialéctico-Conductual (DBT), enfocadas en la regulación emocional y la efectividad interpersonal.</p>
            <p className="font-semibold mt-6">Próximamente.</p>
          </ServiceCard>

          <ServiceCard title="Cursos para Profesionales" imageSrc="/images/imagen1.png">
            <p>Formación y supervisión para psicólogos y estudiantes avanzados que deseen profundizar en terapias basadas en la evidencia y mejorar su práctica clínica.</p>
            <p className="font-semibold mt-6">Próximamente.</p>
          </ServiceCard>

        </div>
      </div>
    </section>
  );
};

export default Servicios;
