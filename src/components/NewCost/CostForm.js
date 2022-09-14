import "./CostForm.css";
import { useState } from "react";

function CostForm(props) {
  //   const [userInput, setUserInput] = useState({
  //     name: "",
  //     amount: "",
  //     date: "",
  //   });
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(" ");

  function nameChangeHandler(e) {
    setName(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   name: e.target.value,
    // });
  }
  function amountChangeHandler(e) {
    setAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
  }

  function dateChangeHaldler(e) {
    setDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
  }

  function subnitHalder(e) {
    e.preventDefault();

    const costData = {
      name: name,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveCostData(costData);
    setName("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={subnitHalder}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={name}
          />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHaldler}
            value={date}
          />
        </div>
        <div className="new-cost__actions">
          <button type="subnit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
