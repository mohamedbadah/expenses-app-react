import { useContext, useRef } from "react";
import ExpenseContext from "../Context/expenses-context";
import ExpenseModel from "../Models";
import FormInput from "./FormInput";

function FormMainLayout(props){
  let titleRef=useRef();
  let dataRef=useRef();
  let priceRef=useRef();
  let descriptionRef=useRef();
  let expenseContext=useContext(ExpenseContext)
  let onSubmitHandler=(event)=>{
    event.preventDefault();
    // let newExpense={
    //   title:titleRef.current.value,
    //   data:dataRef.current.value,
    //   price:priceRef.current.value,
    //   description:descriptionRef.current.value,
    // }
    let newExpense=new ExpenseModel(
      titleRef.current.value,
       dataRef.current.value,
       priceRef.current.value,
       descriptionRef.current.value);
      //  props.onNewExpense(newExpense);
      expenseContext.onNewExpense(newExpense);
       console.log(newExpense);
                                    
  }
return (
    <form className="row" onSubmit={onSubmitHandler}>
          {/* <div className="mb-3 col-md-6">
            <label className="form-label">Title</label>
            <input type="text" className="form-control addTitle" aria-describedby="" ref={titleRef}/>
          </div> */}
          <FormInput title="Title" type="text" inputClass="addTitle" ref={titleRef}/>
          <FormInput title="Date" type="date" inputClass="addDate" ref={dataRef}/>
          <FormInput title="Value" type="number" inputClass="addValue" ref={priceRef}/>
          <FormInput title="Description" type="text" inputClass="addDescrption" ref={descriptionRef}/>
          <div className="mb-3 col-md-12 text-right">
            <button type="submit" className="btn btn-primary addBtn">Add</button>
          </div>
        </form>
)
}
export default FormMainLayout;