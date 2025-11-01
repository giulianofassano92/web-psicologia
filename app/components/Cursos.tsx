const VideoPlaceholder = ({ title }: { title: string }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="aspect-video bg-gray-200 flex items-center justify-center">
      <p className="text-gray-500">Video de YouTube/Vimeo</p>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-[var(--title-color)]">{title}</h3>
    </div>
  </div>
);

const Cursos = () => {
  return (
    <section id="cursos" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[var(--title-color)] mb-12">Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoPlaceholder title="Curso de Introducción a la Ansiedad" />
          <VideoPlaceholder title="Técnicas de Mindfulness" />
          <VideoPlaceholder title="Comunicación Asertiva" />
        </div>
      </div>
    </section>
  );
};

export default Cursos;
