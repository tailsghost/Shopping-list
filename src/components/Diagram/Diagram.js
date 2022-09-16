import DiagramBar from "./DiagramBar";
import "./Diagram.css";

function Diagram(props) {
  const dataSetsValues = props.dataSets.map((dataSet) => dataSet.value);

  const maxMonthCost = Math.max(...dataSetsValues);

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCost}
          label={dataSet.label}
        />
      ))}
    </div>
  );
}

export default Diagram;
