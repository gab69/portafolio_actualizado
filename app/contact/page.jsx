"use client"; // Asegúrate de que este componente se renderice en el cliente

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Celular",
    description: "(+51) 916 386 651",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gabrielrc6979@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Ubicación",
    description: "Huancayo - Pilcomayo - Junin",
  },
];

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura los parámetros de EmailJS
    const templateParams = {
      from_name: e.target.firstname.value + " " + e.target.lastname.value,
      from_email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    // Envía el correo utilizando EmailJS
    emailjs
      .send(
        "service_iumdcce", // Reemplaza con tu Service ID de EmailJS
        "template_8l7oz8b", // Reemplaza con tu Template ID de EmailJS
        templateParams,
        "M6h1sjrFlj5vvxm6K" // Reemplaza con tu Public Key de EmailJS
      )
      .then(
        (response) => {
          console.log("Correo enviado con éxito!", response.status, response.text);
          setMessageSent(true);
          e.target.reset(); // Limpia el formulario después del envío
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulario */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent text-center">CONTACTAME</h3>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Nombre" required />
                <Input type="text" name="lastname" placeholder="Apellidos" required />
                <Input type="email" name="email" placeholder="Correo Electronico" required />
                <Input type="tel" name="phone" placeholder="Número de Celular" required />
              </div>
              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Escribe tu mensaje aqui."
                required
              />
              {/* Botón de envío */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" size="md" className="max-w-40">
                  Enviar Mensaje
                </Button>
              </div>
              {/* Notificación de mensaje enviado */}
              {messageSent && (
                <p className="text-green-500 text-center mt-4">
                  ¡Mensaje enviado con éxito!
                </p>
              )}
            </form>
          </div>
          {/* Información de contacto */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;