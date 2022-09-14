import "./CostDate.css";

function CostDate({ cost }) {
  const month = cost.costDate.toLocaleString("ru-RU", { month: "long" });
  const day = cost.costDate.toLocaleString("ru-RU", { day: "2-digit" });
  const year = cost.costDate.getFullYear();

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
}

export default CostDate;
