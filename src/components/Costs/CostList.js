import CostItem from "./CostItem";
import "./CostList.css";

function CostList({ cost }) {
  if (cost.length === 0) {
    return <h2 className="cost-list__fallback">В этом году расходов нет</h2>;
  }

  return (
    <ul className="cost-list">
      {cost.map((item) => (
        <CostItem
          key={item.id}
          cost={item}
        />
      ))}
    </ul>
  );
}

export default CostList;
