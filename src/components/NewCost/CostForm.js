import "./CostForm.css";
import { useState } from "react";

function CostForm(props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(" ");

  function nameChangeHandler(e) {
    setName(e.target.value);
  }
  function amountChangeHandler(e) {
    setAmount(e.target.value);
  }

  function dateChangeHaldler(e) {
    setDate(e.target.value);
  }

  function subnitHalder(e) {
    e.preventDefault();

    const costData = {
      costDescription: name,
      costAmout: amount,
      costDate: new Date(date),
    };
    props.onSaveCostData(costData);
    setName("");
    setAmount("");
    setDate("");
    props.toggle();
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
          <button type="submit">Добавить расход</button>

          <button onClick={props.toggle}>Отмена</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
