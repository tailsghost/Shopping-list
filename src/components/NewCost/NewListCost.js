import NewCost from "./NewCost";
import "./NewCost.css";
import { useState } from "react";

function NewListCost(props) {
  const [activeCost, setActiveCost] = useState(false);
  function toggleActiveButtonHandler() {
    setActiveCost(!activeCost);
  }
  return (
    <div className="new-cost">
      {activeCost ? (
        <NewCost
          props={props}
          toggle={toggleActiveButtonHandler}
        />
      ) : (
        <button onClick={toggleActiveButtonHandler}>
          Добавить Новый Расход
        </button>
      )}
    </div>
  );
}

export default NewListCost;
