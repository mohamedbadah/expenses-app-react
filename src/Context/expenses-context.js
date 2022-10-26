import React from "react";
let ExpenseContext=React.createContext({
    DataExpenses:[],
    onNewExpense:function(){}
});
export default ExpenseContext;