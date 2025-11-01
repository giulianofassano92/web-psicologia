import Image from 'next/image';

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[var(--title-color)] mb-12">Sobre mí</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative w-full h-96 bg-gray-200 rounded-lg shadow-lg">
              {/* Placeholder for the photo */}
              <Image src="https://via.placeholder.com/400x500" alt="Carla Snopek" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4">Hola! Soy <strong>Carla Snopek</strong>, Licenciada en Psicología.</p>
            <p className="mb-6">Mi pasión y enfoque se centran en acompañar a las personas a construir relaciones más saludables consigo mismas y con los demás, un camino que he tenido el privilegio de recorrer desde hace más de 5 años.</p>
            
            <h3 className="text-2xl font-semibold text-[var(--title-color)] mb-4">Mis Especialidades</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Trastornos de Ansiedad:</strong> Ayudando a gestionar y transformar la preocupación excesiva, los miedos y los ataques de pánico.</li>
              <li><strong>Problemáticas Vinculares:</strong> Trabajando en patrones de relación que generan malestar, mejorando la comunicación y la conexión.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[var(--title-color)] mb-4">Mi Formación y Enfoque Terapéutico</h3>
            <p className="mb-6">Para ofrecerte el mejor tratamiento posible, mi práctica se basa en enfoques con sólida evidencia científica como las <strong>Terapias Conductuales</strong> y <strong>EMDR</strong> (Desensibilización y Reprocesamiento por Movimientos Oculares).</p>

            <h3 className="text-2xl font-semibold text-[var(--title-color)] mb-4">Así Funciona la Terapia</h3>
            <p>Mi objetivo es que finalices el tratamiento con la certeza de haber adquirido el conocimiento y las habilidades necesarias para responder a tus emociones de manera más eficaz, acercándote a una vida más significativa y valiosa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
