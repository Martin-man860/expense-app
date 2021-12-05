import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenseAction";

function EditExpense(props) {
  const [name, setName] = useState(props.expense.name);
  const [date, setDate] = useState(props.expense.date);
  const [amount, setAmount] = useState(props.expense.amount);
  const [category, setCategory] = useState(props.expense.category);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  function handleSubmit() {
    let editedExpense = {
      name: name,
      date: date,
      amount: amount,
      category: category,
      id: props.expense.id,
    };

    props.editExpense(props.expense.id, editedExpense);
    props.toggleModal();
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            name="date"
            type="date"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => handleDateChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            name="amount"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => handleAmountChange(e)}
          />{" "}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category</Form.Label>
          <Form.Control
            name="text"
            placeholder="Category"
            value={category}
            onChange={(e) => handleCategoryChange(e)}
          />

          <Button onClick={() => handleSubmit()}>Save</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

const mapDispatch = {
  editExpense,
};

export default connect(null, mapDispatch)(EditExpense);
