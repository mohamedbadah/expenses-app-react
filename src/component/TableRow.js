import { useContext } from "react";
import Swal from "sweetalert2";
import ExpenseContext from "../Context/expenses-context";

function TableRow(props){
  let expenseHandler=useContext(ExpenseContext);
  let onDeleteHandler=()=>{
    // props.deleteHandler(props.id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        // props.deleteHandler(props.id);
        expenseHandler.onDeleteExpenseHandler(props.id);
      }
    })
  }
return (
    <tr>
    <td>{props.title}</td>
    <td>{props.date}</td>
    <td>{props.price}</td>
    <td colSpan="2">{props.description}</td>
    <td className="text-right"><a href="#" className="delete" onClick={onDeleteHandler}><i className="fa fa-trash-o"
          aria-hidden="true"></i></a></td>
  </tr>
)
}
export default TableRow;