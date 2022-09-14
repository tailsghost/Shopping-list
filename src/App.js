import Costs from "./components/Costs/Costs";

import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      costDate: new Date(2021, 7, 5),
      costDescription: "Машина",
      costAmout: 9919.99,
    },
    {
      costDate: new Date(2021, 5, 2),
      costDescription: "Носки",
      costAmout: 99.99,
    },
    {
      costDate: new Date(2021, 8, 11),
      costDescription: "Холодильник",
      costAmout: 999,
    },
  ];
  return (
    <div className="App">
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
