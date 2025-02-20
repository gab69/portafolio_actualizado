"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Auxiliar de TI (Soporte Técnico)",
    description:
      "Como Auxiliar de TI, ofrezco servicios integrales para mantener sistemas tecnológicos eficientes y seguros. Esto incluye la instalación y configuración de hardware y software, mantenimiento preventivo y correctivo de equipos, y soporte técnico remoto y presencial para resolver incidencias rápidamente. También gestiono redes locales (LAN), asegurando conectividad estable, y realizo respaldo y recuperación de datos para proteger información crítica. Además, administro usuarios y permisos, y me encargo de la actualización de sistemas y parches para mantener los sistemas protegidos y actualizados. Estos servicios garantizan un entorno tecnológico optimizado y seguro.",
    href: "",
  },
  {
    num: "02",
    title: "Analisista de Datos",
    description:
      "Como Analisista de Datos, ofrezco servicios integrales para transformar datos en información valiosa. Comienzo con la limpieza y preparación de datos, donde depuro y organizo conjuntos de datos para garantizar su calidad y consistencia. Luego, realizo un análisis exploratorio de datos para identificar patrones, tendencias y relaciones clave. Con estos insights, diseño dashboards y reportes interactivos y visualmente atractivos, utilizando herramientas como Power BI, que facilitan la toma de decisiones. Además, desarrollo modelos de predicción mediante técnicas de machine learning para pronósticar tendencias y comportamientos futuros. Evalúo el rendimiento empresarial a través del análisis de KPIs, midiendo el éxito de estrategias y proponiendo mejoras.",
    href: "",
  },
  {
    num: "03",
    title: "Ciberseguridad",
    description:
      "Como especialista junior en Ciberseguridad, ofrezco servicios básicos para proteger sistemas y datos. Apoyo en la realización de auditorías de seguridad, ayudando a identificar vulnerabilidades en redes y sistemas. Colaboro en la protección de redes para prevenir accesos no autorizados. Participo en programas de concientización y capacitación en seguridad, enseñando a los usuarios prácticas seguras. Además, apoyo en la implementación de cifrado de datos para proteger información confidencial. También asisto en el análisis de malware, aprendiendo a detectar y eliminar amenazas, y colaboro en pruebas de penetración (Pentesting) bajo supervisión, para evaluar la seguridad de los sistemas.",
    href: "",
  },
  {
    num: "04",
    title: "SWITCHER",
    description:
      "Como profesional en switcher de televisión, ofrezco servicios de operación y gestión de mezcladores de video para producciones en vivo y grabadas. Especializado en realizar cortes, transiciones y efectos en tiempo real, coordino múltiples fuentes como cámaras, gráficos y videos para crear transmisiones dinámicas y de alta calidad. Trabajo en programas de TV, resolviendo problemas técnicos y asegurando producciones fluidas. Mi objetivo es elevar el nivel de cualquier proyecto audiovisual con resultados profesionales y sin interrupciones.",
    href: "",
  },
  {
    num: "05",
    title: "Restauración de Imágenes",
    description:
      "Como especialista en restauración de imágenes deterioradas, ofrezco servicios dedicados a recuperar y mejorar fotografías dañadas o envejecidas. Utilizo herramientas digitales avanzadas y técnicas de edición para reparar rasgaduras, manchas, decoloración y desenfoques, devolviendo a las imágenes su calidad original. Trabajo en la reconstrucción de áreas perdidas o dañadas, utilizando métodos de clonado para mantener la autenticidad de la imagen. Además, realizo corrección de colores y ajustes de iluminación para equilibrar y mejorar el aspecto general. También me especializo en la restauración de fotos antiguas o históricas, preservando su valor sentimental o cultural. Para imágenes digitales, ofrezco servicios de reducción de ruido y mejora de resolución, optimizando su calidad para impresión o uso digital. Mi objetivo es devolver vida a las imágenes, ya sea para uso personal, profesional o de archivo.",
    href: "",
  },
  
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
