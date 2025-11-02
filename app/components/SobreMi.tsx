import Image from 'next/image';

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <div className="relative w-full h-[500px] rounded-lg shadow-2xl overflow-hidden">
              <Image src="/images/Carla.png" alt="Carla Snopek" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Sobre mí</h2>
            <p className="text-xl mb-6 text-gray-600">Hola! Soy <strong>Carla Snopek</strong>, Licenciada en Psicología.</p>
            <p className="text-lg mb-8 text-gray-600">Mi pasión y enfoque se centran en acompañar a las personas a construir relaciones más saludables consigo mismas y con los demás, un camino que he tenido el privilegio de recorrer desde hace más de 5 años.</p>
            
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Mis Especialidades</h3>
            <ul className="list-disc list-inside mb-8 space-y-3 text-lg text-gray-600">
              <li><strong>Trastornos de Ansiedad:</strong> Ayudando a gestionar y transformar la preocupación excesiva, los miedos y los ataques de pánico.</li>
              <li><strong>Problemáticas Vinculares:</strong> Trabajando en patrones de relación que generan malestar, mejorando la comunicación y la conexión.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Mi Formación y Enfoque Terapéutico</h3>
            <p className="text-lg mb-8 text-gray-600">Para ofrecerte el mejor tratamiento posible, mi práctica se basa en enfoques con sólida evidencia científica como las <strong>Terapias Conductuales</strong> y <strong>EMDR</strong> (Desensibilización y Reprocesamiento por Movimientos Oculares).</p>

            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Así Funciona la Terapia</h3>
            <p className="text-lg text-gray-600">Mi objetivo es que finalices el tratamiento con la certeza de haber adquirido el conocimiento y las habilidades necesarias para responder a tus emociones de manera más eficaz, acercándote a una vida más significativa y valiosa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
