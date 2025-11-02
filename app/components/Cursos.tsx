const VideoPlaceholder = ({ title }: { title: string }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <div className="aspect-video bg-gray-300 flex items-center justify-center">
      <p className="text-gray-600 font-semibold">Video Próximamente</p>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
  </div>
);

const Cursos = () => {
  return (
    <section id="cursos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <VideoPlaceholder title="Curso de Introducción a la Ansiedad" />
          <VideoPlaceholder title="Técnicas de Mindfulness" />
          <VideoPlaceholder title="Comunicación Asertiva" />
        </div>
      </div>
    </section>
  );
};

export default Cursos;
