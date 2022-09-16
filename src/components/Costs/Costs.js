import CostsFilter from "../CostFilter/CostsFilter";
import Card from "../UI/Card";
import "./Costs.css";
import { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs({ costs }) {
  const [date, setDate] = useState("2022");
  const onChangeYearHandler = (year) => {
    setDate(year);
  };

  const filterCosts = costs.filter(
    (item) => item.costDate.getFullYear().toString() === date
  );

  return (
    <li>
      <Card className="costs">
        <CostsFilter
          onChangeYear={onChangeYearHandler}
          costDate={date}
        />
        <CostsDiagram costs={filterCosts} />
        <CostList cost={filterCosts} />
      </Card>
    </li>
  );
}

export default Costs;
