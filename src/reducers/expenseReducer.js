const initialState = {
    expenses: [],
  };
  
  
  const expenseReducers = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_EXPENSE":
        //   console.log(action.payload);
        return { ...state, expenses: [...state.expenses, action.payload] };
  
  
  
      case "DELETE_EXPENSE":
        const filteredExpenses = state.expenses.filter(
          (expense) => expense.id !== action.payload
        );
        return { ...state, expenses: filteredExpenses };
  
  
  
  
      case "EDIT_EXPENSE":
        const updatedExpense = state.expenses.map((expense) => {
          if (expense.id === action.payload.expenseId) {
            return action.payload.updatedExpense;
          }
          return expense;
        });
  
        return { ...state, expenses: updatedExpense };
  
      default:
        return state;
    }
  }
  
  
  
  export default expenseReducers;
  