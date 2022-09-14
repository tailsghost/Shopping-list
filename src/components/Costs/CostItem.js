import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import { useState } from "react";

function CostItem({ cost }) {
  const [description, setDescription] = useState(cost.costDescription);

  function changeDescriptionHandler() {
    setDescription("Микроволновка");
  }

  return (
    <Card className="cost-item">
      <CostDate cost={cost} />
      <div className="cost-item__description">
        <h3>{description}</h3>
        <h3 className="cost-item__price">${cost.costAmout}</h3>
      </div>
      <button onClick={changeDescriptionHandler}>Изменить описание</button>
    </Card>
  );
}

export default CostItem;
