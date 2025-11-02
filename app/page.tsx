'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Cursos from './components/Cursos';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';

import Image from 'next/image';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Inicio = () => (
  <section id="inicio" className="py-48 text-center">
    <div className="container mx-auto">
      <h1 className="text-6xl font-bold text-gray-800 leading-tight">Acompañamiento Psicológico para tu Bienestar</h1>
      <p className="text-2xl mt-8 max-w-3xl mx-auto text-gray-600 font-light">Un espacio de calidez y comprensión para construir relaciones más saludables contigo y con los demás.</p>
      <div className="flex justify-center space-x-10 mt-12">
      </div>
    </div>
  </section>
);

export default function Home() {
  const [activeView, setActiveView] = useState('inicio');

  return (
    <div className="flex flex-col min-h-screen">
      <Header setActiveView={setActiveView} activeView={activeView} />
      <main className="flex-grow">
        {activeView === 'inicio' && <Inicio />}
        {activeView === 'sobre-mi' && <SobreMi />}
        {activeView === 'servicios' && <Servicios />}
        {activeView === 'cursos' && <Cursos />}
        {activeView === 'testimonios' && <Testimonios />}
        {activeView === 'contacto' && <Contacto />}
      </main>
      <Footer />
    </div>
  );
}
