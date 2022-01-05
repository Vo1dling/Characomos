import React from "react";
import "./CharacterPage.styles.css";
const CharacterPage = ({ char }) => {
  return (
    <div className="create-page">
      <div className="grid">
        <div className="paragraph-container">
          <p>{char.paragraph1Title}</p>
          <p>{char.paragraph1Content}</p>
        </div>
        <div className="card-container">
          <img className="character-image" src={char.imageURL} alt="" />
          <p>{char.name}</p>
          <p>{char.origin}</p>
          <p>{char.region}</p>
          <p>{char.author}</p>
        </div>
        <div className="paragraph-container">
          <p>{char.paragraph2Title}</p>
          <p>{char.paragraph2Content}</p>
        </div>
        <div className="paragraph-container">
          <p>{char.paragraph3Title}</p>
          <p>{char.paragraph3Content}</p>
        </div>
      </div>
    </div>
  );
};
export default CharacterPage;
