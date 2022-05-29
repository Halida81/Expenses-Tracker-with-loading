import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {SpinnerDotted } from 'spinners-react';


const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [array, setArray] = useState(expenses);
const [isLoading,setIsLoading]=useState(false)
const[error,setError] = useState(null)

const notify =(title)=> toast(title)

 async function addDataToArray(objectWithId){
   setIsLoading(true)
   try{
    const response = await fetch('https://expensesdatee-default-rtdb.firebaseio.com/expenses.json',{
      method:"POST",
      body:JSON.stringify(objectWithId),
      headers:{
        "Content-type":"application/json",
      },
    },
    )
    
    if(response.ok){notify('данные успешно отравлено')}
    else{
      throw new Error('неправильный адрес')
    }
   }catch(error){
     setError(error.message)
     notify(error.message)
   }
   setIsLoading(false)
    setArray((prevState) => [...prevState, objectWithId]);
   
  };



 
  let content = <p>Found no movies.</p>;

  if (array.length > 0) {
    content = <Expenses expenses={array} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <SpinnerDotted />
  }

  return (
    <div 
  className="App">
      <NewExpense onAddDataToArray={addDataToArray} />
      {content}
      <ToastContainer/>
    </div>
  );
}

export default App;


