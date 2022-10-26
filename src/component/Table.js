import { useContext } from "react";
import ExpenseContext from "../Context/expenses-context";
import TableRow from "./TableRow";

function Table(props){
  let onDeleteHandler=(id)=>{
    // alert("id "+id);
    props.deleteExpenseHandler(id);
  }
  let expenses=useContext(ExpenseContext);
    return (
        <div className="row mt-5 mb-5">
      <div className="custom-card ">
        <table className="table ">
          <thead>
            <tr>
              <th> Title</th>
              <th> Date</th>
              <th>value</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {/* {props.expense.map((element)=>(
             <TableRow
             key={element.id}
             id={element.id}
             title={element.title}
             date={element.date}
             price={element.price}
             description={element.description}
             deleteHandler={onDeleteHandler}
             />
           ))} */}
           {
            expenses.DataExpenses.map((element)=>(
              <TableRow
              key={element.id}
              id={element.id}
              title={element.title}
              date={element.date}
              price={element.price}
              description={element.description}
              deleteHandler={onDeleteHandler}
              />
            ))
           }
          </tbody>
        </table>
      </div>
    </div>
    )
}
export default Table;