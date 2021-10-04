import React from "react";
import { Image } from "antd";
import useLang from "../Providers/LangContext";
import { Select } from "antd";
import { useRouter } from "next/router";
const NavBar = () => {
  const [lang, setLang] = useLang();
  const router = useRouter();
  return (
    <header className="wrapper">
      <div className="navBar">
        <Image
          className="logo"
          preview={false}
          src="/logo.png"
          onClick={() => router.push("/")}
        />
        <ul className="navContainer">
          <li>
            <Select className="selectItem" onChange={(value) => setLang(value)}>
              <Select.Option value="ES">ES</Select.Option>
              <Select.Option value="EN">EN</Select.Option>
            </Select>
          </li>
          <li className="navItem" onClick={() => router.push("/")}>
            {lang === "ES" ? "Inicio" : "Home"}
          </li>
          <li className="navItem" onClick={() => router.push("/stations")}>
            {lang === "ES" ? "Galeria" : "Gallery"}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
