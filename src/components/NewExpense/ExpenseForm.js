import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (event) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const titleChangeHandler = ()=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = ()=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = ()=>{
        setEnteredDate(event.target.value);
    }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-04-4" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
          <button type="submit">ADD EXPENSE</button>
      </div>
    </form>
  );
}

export default ExpenseForm