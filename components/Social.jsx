import Link from "next/link";

import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/gab69" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/cristhian-gabriel-revollar-7a3713272/" },
  { icon: <FaWhatsapp />, path: "https://wa.me/qr/JPLEWLKJFNNDN1" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/gabrc6979/" },
  
 
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
