export const addExpense = (newExpense) => {

    return {
        type: "ADD_EXPENSE",
        payload: newExpense
    };
};


export const deleteExpense = (expenseId) => {
    return {
        type: "DELETE_EXPENSE",
        payload: expenseId
    }
};


export const editExpense = (expenseId, updatedExpense) => {
    return {
        type: "EDIT_EXPENSE", 
        payload: {expenseId, updatedExpense}
    }
}