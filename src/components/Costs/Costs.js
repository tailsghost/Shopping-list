import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
function Costs({ costs }) {
  return (
    <Card className="costs">
      <CostItem cost={costs[0]} />
      <CostItem cost={costs[1]} />
      <CostItem cost={costs[2]} />
    </Card>
  );
}

export default Costs;
