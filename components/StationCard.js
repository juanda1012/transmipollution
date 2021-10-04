import { Image } from "antd";
import React from "react";
import useLang from "../Providers/LangContext";

const StationCard = ({ data }) => {
  const [lang] = useLang();
  return (
    <div className="cardContainer">
      <Image src={`/Stations/${data.id}.jpg`} className="card__text" />
      <h2>{data.title}</h2>
      <p>
        <b>{lang === "ES" ? "Descripción" : "Description"}:</b>{" "}
        {data.description}
      </p>
      <p>
        <b>{lang === "ES" ? "Ubicación" : "Location"}:</b> {data.location}
      </p>
      <p>
        <b>{lang === "ES" ? "Contaminación" : "Pollution"}:</b> {data.pollution}
      </p>
      <p>
        <b>{lang === "ES" ? "Recomendaciones" : "Recommendations"}:</b>{" "}
        {data.tips}
      </p>
    </div>
  );
};

export default StationCard;
