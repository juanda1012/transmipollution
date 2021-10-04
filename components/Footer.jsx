import { Image } from "antd";
import React from "react";
import useLang from "../Providers/LangContext";

const Footer = () => {
  const [lang] = useLang();
  return (
    <footer className="footerContainer">
      <Image className="footer__image" preview={false} src="/logo.png" />
      <div className="footer__text">
        <p className="footer__info">
          {lang === "ES" ? "Hecho por" : "Powered by"} Juan Suarez.{" "}
          {lang === "ES"
            ? "Todos los derechos reservados"
            : "All rights reserved"}
        </p>
        <p>Universidad Distrital Francisco José De Caldas</p>
      </div>
    </footer>
  );
};

export default Footer;
