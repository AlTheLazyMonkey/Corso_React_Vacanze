import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const SingleHoliday = ({ titolo, durata, descrizione, prezzo, img, next, prev }) => {
  return <div className="holiday-container">
    <img src={img} alt={titolo} className="img" />
    <div className="holiday-info">
      <h4>{titolo}</h4>
      <p>{descrizione}</p>
      <div className="holiday-cost">
        <small>{durata}</small>
        <h5 style={{color: "var(--primary-blue)"}}>{(prezzo / 100).toFixed(2)} €</h5>
      </div>
      <div className="btn-group">
        <button className="btn btn-reset"><GrFormPreviousLink className="icon" onClick={prev}></GrFormPreviousLink></button>
        <button className="btn btn-reset"><GrFormNextLink className="icon" onClick={next}></GrFormNextLink></button>
      </div>
    </div>
  </div>;
};

export default SingleHoliday;
