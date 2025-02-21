"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Videos-Gab",
    title: "Descarga Videos",
    description:
      "Aplicativo creado para el fin de descargar publicaciones de noticias de youtube, para la rapida incorporación a Vmix (PUBLICADO EN UN SERVIDOR GRATUITO).",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "Python" },, { name: "Bootstrap" }],
    image: "/assets/work/descarga-videos.png",
    live: "https://videos-gab.onrender.com/",
    github: "https://github.com/gab69/DescargaDeVideos.git",
  },
  
  {
    num: "02",
    category: "Peliculas GAB",
    title: "pagina de peliculas",
    description:
      "Aplicativo creado para mostrar el consumo de una Api de Peliculas",
    stack: [{ name: "React" },{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/pelicula.png",
    live: "https://peliculas-react-gab.netlify.app/",
    github: "https://github.com/gab69/peliculas-react.git",
  },
  {
    num: "03",
    category: "Halo-Video",
    title: "Portafolio Gab",
    description:
      "Aplicativo creado para presentacion de una PlayList (PUBLICADO EN UN SERVIDOR GRATUITO)",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/halo.png",
    live: "https://halo-trailer-gab.netlify.app/",
    github: "https://github.com/gab69/halo.git",
  },
  
  {
    num: "04",
    category: "Freelancer",
    title: "Gabriel Freelancer",
    description:
      "Aplicativo creado de manera estatica y responsivo, con un diseño amigable (PUBLICADO EN UN SERVIDOR GRATUITO)",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }],
    image: "/assets/work/freelancer.png",
    live: "https://freelancer-gabrc.netlify.app/",
    github: "https://github.com/gab69/freelancer.git",
  },
  {
    num: "05",
    category: "Portafolio Universitario",
    title: "Portafolio Gab",
    description:
      "Aplicativo creado para presentacion de trabajos realizados en la universidad, de manera ordenada y optimizada (PUBLICADO EN UN SERVIDOR GRATUITO)",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/portafolio.png",
    live: "https://portafolio-gab.netlify.app/",
    github: "https://github.com/gab69/portafolio.git",
  },
  {
    num: "06",
    category: "Camara de Comercio",
    title: "pagina de CCH",
    description:
      "Aplicativo creado para entorno a las practicas pre-profesionales",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/CCH.png",
    live: "https://camara-comercio-huancayo-gab.netlify.app/",
    github: "https://github.com/gab69/Blog-de-Cafe.git",
  },
  {
    num: "07",
    category: "Fotos de Trabajos",
    title: "Pagina de Fotos",
    description:
      "Aplicativo creado para publicitar una pequeña empresa, con el objetivo de aumentar los clientes y mostrar la calidad del trabajo (PUBLICADO EN UN SERVIDOR GRATUITO)",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }],
    image: "/assets/work/fotos.png",
    live: "https://servicio-restauracion-imagenes-gab.netlify.app/",
    github: "https://github.com/gab69/imagenes.git",
  },
  {
    num: "08",
    category: "Soporte-DRTC",
    title: "pagina de soporte",
    description:
      "Aplicativo creado para facilitar las solicitudes de los usuarios para la creacion de Tickets con el objetivo de que los usuarios soliciten el servicio de Soporte Técnico (PUBLICADO EN UN SERVIDOR GRATUITO)",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }, { name: "PHP" }, { name: "MySql" }],
    image: "/assets/work/soporte.png",
    live: "https://tailor-made-roads.000webhostapp.com/login.php",
    github: "https://github.com/gab69/DRTC",
  },
  {
    num: "09",
    category: "Fronted-Store",
    title: "Portafolio Gab",
    description:
      "Aplicativo creado para presentacion de productos disponible para la venta online (PUBLICADO EN UN SERVIDOR GRATUITO)",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/fronted-store.png",
    live: "https://front-store-gab.netlify.app/",
    github: "https://github.com/gab69/frontend-store.git",
  },
  {
    num: "10",
    category: "Blog-Cafe",
    title: "pagina de cafe",
    description:
      "Aplicativo creado para mostrar la descripción de la empresa y los servicios que ofrece (PUBLICADO EN UN SERVIDOR GRATUITO)",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/cafe.png",
    live: "https://blog-cafe-gab.netlify.app/",
    github: "https://github.com/gab69/Blog-de-Cafe.git",
  },
  
  
  
  
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
