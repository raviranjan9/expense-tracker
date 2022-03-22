import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import ExpenseItem from './components/ExpenseItem';
import ExpenseForm from './components/ExpenseForm';
import Title from './components/Title';


const App = () => {
  let expenseList = [
    {
      date: new Date(),
      title: "",
      amount: ""
    }
  ];
  const[newExpenseList, setExpenseList] = useState(expenseList);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const updatedExpenseList = [enteredExpenseData, ...expenseList];
    setExpenseList(updatedExpenseList);
  }
 
  console.log(newExpenseList.length);
  
  return (
    <div className='app'>
      <Title/>
      <ExpenseForm
        onSaveExpenseData = {saveExpenseDataHandler}
      />
      {
        
        newExpenseList.map(
          (expense) => (
              <ExpenseItem
              date = {expense.date}
              title = {expense.title}
              amount = {expense.amount}
          />
        )
      )
    }
    </div>
  );
}

export default App;
