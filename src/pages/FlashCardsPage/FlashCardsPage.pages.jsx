import React, { useRef, useState } from "react";
import Card from "../../components/Card/Card.components";
import "./FlashCardsPage.styles.css";
import CustomButton from "../../components/CustomButton/CustomButton.components";
const FlashPage = (props) => {
  const confirmationMenuRef = useRef();
  const cardRef = useRef();
  const [currentCard, setCurrentCard] = useState({});
  const [completed, setCompleted] = useState(0);
  const revealAnswer = () => {
    cardRef.current.classList.add("flipped");
    confirmationMenuRef.current.classList.remove("hidden");
    cardRef.current.children[1].classList.remove("text-hidden");
  };
  const hideAnswer = () => {
    cardRef.current.classList.remove("flipped");
    confirmationMenuRef.current.classList.add("hidden");
    cardRef.current.children[1].classList.add("text-hidden");
  };
  const getNewCard = () => {
    if (cardRef.current !== null)
      if (!cardRef.current.classList.contains("flipped")) {
        const filteredCards = props.data.filter(
          (card) => card.isAnswered === false
        );
        if (filteredCards.length > 0) {
          let randomNum = Math.floor(Math.random() * filteredCards.length);
          let randomCard = filteredCards[randomNum];
          while (randomNum === filteredCards.indexOf(currentCard)) {
            randomNum = Math.floor(Math.random() * filteredCards.length);
            randomCard = filteredCards[randomNum];
          }
          setCurrentCard(randomCard);
        }
      }
  };
  const confirmAnswer = () => {
    if (completed < props.data.length) {
      currentCard.isAnswered = true;
      setCompleted(completed + 1);
    }
  };

  return (
    <div className="main-container">
      <Card
        question={currentCard.normalQuestion}
        answer={currentCard.normalAnswer}
        cardRef={cardRef}
      />
      <div className="button-container">
        <CustomButton
          text="New Card"
          onClick={getNewCard}
          className="new-card-btn"
        />
        <CustomButton
          text="Reveal Answer"
          onClick={revealAnswer}
          className="reveal-btn"
        />
      </div>
      <div className="answer-confirmation hidden" ref={confirmationMenuRef}>
        <p className="answer-header">Did you get that one?</p>
        <div className="button-container">
          <CustomButton
            text="Yes"
            onClick={() => {
              hideAnswer();
              confirmAnswer();
            }}
            className="confirm-btn"
          />
          <CustomButton
            text="No"
            onClick={() => {
              hideAnswer();
              getNewCard();
            }}
            className="cancel-btn"
          />
        </div>
      </div>
      <p className="correct-text">
        Correct Answers: {completed}/{props.data.length}
      </p>
      <p className="difficulty">Choose Difficulty</p>
      <CustomButton
        text="Easy"
        onClick={() => {
          hideAnswer();
          confirmAnswer();
        }}
        className="confirm-btn"
      />
    </div>
  );
};
export default FlashPage;
