import React from 'react'
import {connect} from 'react-redux'
import Expense from './Expense'

function ExpenseList(props) {
    return (
        
        <div>
            {props.expenses.map((expense)=>{
                return (
                    <Expense
                    expense={expense}
                    key={expense.id}
                    />
                )
            })}
            
        </div>
    )
}

const mapState = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapState)( ExpenseList)
