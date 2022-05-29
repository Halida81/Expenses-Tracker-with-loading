import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const AddData = (data) => {
    const objectWithId = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddDataToArray(objectWithId)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddData={AddData} />
    </div>
  );
};
export default NewExpense;
