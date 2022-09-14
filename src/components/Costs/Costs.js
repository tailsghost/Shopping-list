import CostItem from "./CostItem";
import CostsFilter from "../CostFilter/CostsFilter";
import Card from "../UI/Card";
import "./Costs.css";
import { useState } from "react";

function Costs({ costs }) {
  const [date, setDate] = useState("2022");
  const onChangeYearHandler = (year) => {
    setDate(year);
  };
  return (
    <div>
      <Card className="costs">
        <CostsFilter
          onChangeYear={onChangeYearHandler}
          date={date}
        />
        {costs.map(
          (item) =>
            // eslint-disable-next-line
            date == item.costDate.getFullYear() && (
              <CostItem
                key={item.id}
                cost={item}
              />
            )
        )}
      </Card>
    </div>
  );
}

export default Costs;
