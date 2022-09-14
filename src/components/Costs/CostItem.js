import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

function CostItem({ cost }) {
  return (
    <Card className="cost-item">
      <CostDate cost={cost} />
      <div className="cost-item__description">
        <h3>{cost.description}</h3>
        <h3 className="cost-item__price">${cost.costAmout}</h3>
      </div>
    </Card>
  );
}

export default CostItem;
