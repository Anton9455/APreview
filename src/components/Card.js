import "../scss/card.scss";

function Card({ cardColor }) {
  return <div className={`content__card content__card_${cardColor}`}></div>;
}

export default Card;
