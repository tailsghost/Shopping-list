import Costs from "./components/Costs/Costs";

import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
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
      id: "c3",
      costDate: new Date(2022, 8, 11),
      costDescription: "Холодильник",
      costAmout: 999,
    },
  ];

  function addCostHandler(cost) {
    console.log(cost);
    console.log("Я в App");
  }

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
