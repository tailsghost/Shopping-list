import Costs from "./components/Costs/Costs";
import { useState } from "react";
import NewListCost from "./components/NewCost/NewListCost";

const INISHINAL__START = [
  {
    id: "c1",
    costDate: new Date(2021, 7, 5),
    costDescription: "Машина",
    costAmout: 9919.99,
  },
  {
    id: "c2",
    costDate: new Date(2021, 5, 2),
    costDescription: "Носки",
    costAmout: 99.99,
  },
  {
    id: "c3",
    costDate: new Date(2021, 8, 11),
    costDescription: "Холодильник",
    costAmout: 999,
  },
  {
    id: "c4",
    costDate: new Date(2022, 8, 11),
    costDescription: "Холодильник",
    costAmout: 999,
  },
];

function App() {
  const [costs, setCosts] = useState(INISHINAL__START);

  function addCostHandler(cost) {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  }

  return (
    <div className="App">
      <NewListCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
