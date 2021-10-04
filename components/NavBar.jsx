import React from "react";
import { Image } from "antd";
import { Select } from "antd";
import useLang from "../Providers/LangContext";
import { useRouter } from "next/router";

const { Option } = Select;

const NavBar = (props) => {
  const { softwareRef, topRef } = props.scroll;
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
              <Option value="ES">ES</Option>
              <Option value="EN">EN</Option>
            </Select>
          </li>
          <li
            className="navItem"
            onClick={() =>
              topRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            {lang === "ES" ? "Inicio" : "Home"}
          </li>
          <li
            className="navItem"
            onClick={() =>
              softwareRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Software
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
