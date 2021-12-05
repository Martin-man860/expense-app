import React, { useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import {connect} from 'react-redux'
import {deleteExpense} from '../actions/expenseAction'
import EditExpense from "./EditExpense";

function Expense(props) {
  const expense = props.expense;

  //state to handle modal
 const [showModal, setShowModal] = useState(false);

  //function to toggle modal
function toggleModal() {

    setShowModal(!showModal);
  }

  //console.log(props);

  return (
    
    <div>
      <Container>
      <h1>Name: {expense.name}</h1>
      <h3>Date Purchased: {expense.date}</h3>
      <h3>Amount: {expense.amount}</h3>
      <h3>Category: {expense.category}</h3>

      <Button variant="primary" onClick={() => toggleModal()}>
        Edit
      </Button>
      
      <Button variant="danger" onClick={()=> props.deleteExpense(expense.id)}>
        Delete
      </Button>

      

      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Please Edit Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <EditExpense
            expense={expense}
            // editNote={props.editNote}
            toggleModal={toggleModal}
          />
        </Modal.Body>

      </Modal>
</Container>
    </div>
  );
}

const mapDispatch = {
  deleteExpense
}

export default connect(null, mapDispatch) (Expense);