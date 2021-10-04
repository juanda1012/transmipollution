import { createContext, useContext, useState } from "react";
import React from "react";

const LangContext = createContext({});

export const LangProvider = (props) => {
  const { children } = props;
  const [lang, setLang] = useState("ES");

  return (
    <LangContext.Provider value={[lang, setLang]}>
      {children}
    </LangContext.Provider>
  );
};

export default function useLang() {
  return useContext(LangContext);
}
