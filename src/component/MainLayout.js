import { useEffect, useState } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Swal from "sweetalert2";
import ExpenseContext from '../Context/expenses-context';
import '../custom.css';
import ExpenseImage from "../img/m1.png";
import ExpenseModel from '../Models';
import FormMainLayout from './FormMainLayout';
import Header from './Header';
import Table from './Table';
function MainLayout(){
  // const expense=[];
  let [expenses,setExpenses]=useState([]);
    let onNewEexpenseHandler=(newExpense)=>{
      // console.log(newExpense);
      // expense.push(newExpense);
      // console.log(expense.length);
      // newExpense.id=expenses.length+1;
      // setExpenses((prevExpenses)=>{
      //   return [newExpense,...prevExpenses];
      // })
      saveExpenseOnFirebase(newExpense);
    }
    let onDeleteExpenseHandler=(id)=>{
      // let deleteExp=expenses.filter(element=>element.id!=id);
      // setExpenses(deleteExp);
      onDeletefireBase(id);
    }
    let saveExpenseOnFirebase=(newExpense)=>{
      fetch('https://reacr-test-default-rtdb.firebaseio.com/expense.json',{
        method:"POST",
        body:JSON.stringify(newExpense),
        headers:{
          'Content-Type':"application/json"
        }
      }).then((response)=>{
        return response.json();
      }).then((result)=>{
        newExpense.id=result.name;
        setExpenses((prevExpenses)=>{
          return [newExpense,...prevExpenses];
        })
        console.log(result['name']);
      }).catch((error)=>{

      })
    }

    let fetchExpenseFromFirebase=()=>{
      let fbExpenses=[];
      fetch('https://reacr-test-default-rtdb.firebaseio.com/expense.json',{
        method:"GET"
      }).then((response)=>{
        return response.json();
      }).then((result)=>{
        console.log(result);
        for(let key in result){
          let expense=new ExpenseModel(result[key].title,result[key].date,result[key].price,result[key].description);
          expense.id=key;
          fbExpenses.push(expense);
          setExpenses(fbExpenses);
        }

      })
    }
    useEffect(fetchExpenseFromFirebase,[]);
    // fetchExpenseFromFirebase();
   let onDeletefireBase=(id)=>{
    fetch(`https://reacr-test-default-rtdb.firebaseio.com/expense/${id}.json`,{
      method:'DELETE'
    }).then((response)=>{
      return response.json();
    }).then((result)=>{
      let expDelete=expenses.filter(el=>el.id!=id);
      setExpenses(expDelete);
    })
   }
    return(
      <ExpenseContext.Provider 
      value={{
        DataExpenses:expenses,
        onNewExpense:onNewEexpenseHandler,
        onDeleteExpenseHandler:onDeleteExpenseHandler}}>
         <div className="container mt-5">
    <div className="row">
      <div className="col-sm-6">
        <img src={ ExpenseImage} className="img-fluid" alt=""/>
      </div>
      <div className="col-sm-6 mt-5">
        <Header/>
        {/* <FormMainLayout onNewExpense={onNewEexpenseHandler}/> */}
        <FormMainLayout/>

      </div>
    </div>
    {/* <Table 
    expense={expenses}
    deleteExpenseHandler={onDeleteExpenseHandler}
    /> */}
    <Table/>
        </div>
        </ExpenseContext.Provider>
    )
}
export default MainLayout;