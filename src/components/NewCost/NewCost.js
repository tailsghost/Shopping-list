import CostForm from "./CostForm";

function NewCost({ props, toggle }) {
  console.log(props);
  function saveCostDataHandler(inputCostData) {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  }
  return (
    <>
      <CostForm
        onSaveCostData={saveCostDataHandler}
        toggle={toggle}
      />
    </>
  );
}

export default NewCost;
