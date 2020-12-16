import { Route } from "react-router-dom";
import "../scss/content.scss";
import Card from "./Card";

const cards = [{ color: "red" }, { color: "green" }, { color: "blue" }];

function Content() {
  return (
    <div className="layout-container__content content">
      {cards &&
        cards.map((card, index) => {
          let pathCard = "/".concat(card.color);
          return (
            <Route
              key={index}
              path={pathCard}
              render={() => <Card cardColor={card.color} />}
            />
          );
        })}
    </div>
  );
}

export default Content;
