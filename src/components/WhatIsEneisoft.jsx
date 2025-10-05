import React from "react";
import { motion } from "framer-motion";
import mascota from "../assets/pet.webp";

export function WhatIsEneisoft() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Texto a la izquierda */}
          <div className="max-w-[600px]">

            {/* Sobre el evento */}
            <motion.p
              className="font-comic -mb-2"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="secondary">[</span> Sobre el evento <span className="secondary">]</span>
            </motion.p>

            {/* Título */}
            <motion.h3
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Encuentro nacional de estudiantes de Ingeniería de Software
            </motion.h3>

            {/* Párrafo */}
            <motion.p
              className="text-gray-700 text-lg mb-6"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Únete a ENEISOFT Perú 2025 para conectar con estudiantes, desarrolladores
              y profesionales del sector tecnológico. Talleres, charlas y hackathons
              para inspirarte y aprender nuevas tecnologías.
            </motion.p>

            {/* Estadísticas */}
            <motion.div
              className="flex flex-wrap gap-6 mt-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+40</p>
                <p className="text-gray-600">Instituciones</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+15</p>
                <p className="text-gray-600">Speakers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+20</p>
                <p className="text-gray-600">Actividades prácticas</p>
              </div>
            </motion.div>

          </div>

          {/* Imagen a la derecha */}
          <div className="flex justify-end">
            <motion.img
              src={mascota}
              alt="Mascota ENEISOFT"
              className="w-full max-w-[400px]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
