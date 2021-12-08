import React, { useState} from 'react'
import {v4 as uuid} from "uuid"
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenseAction'

function ExpenseForm(props) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault();
      
      if(name && date && amount) {
        let newExpense = {
          name: name,
          date: date,
          amount: amount,
          category: category,
          id: uuid()
          
        };

      //console.log(newExpense);
      props.addExpense(newExpense);
  
        setName("");
        setDate("");
        setAmount("");
        setCategory("")
      }
  
    }
    return (
        <div>
          <Container>
            <Form onSubmit={(e)=>handleSubmit(e)}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name Here" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
                </Form.Group>
              </Row>
    <br/>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Date Purchased :</Form.Label>
                <Form.Control type="date" placeholder="Date Here"  name="date" value={date} onChange={(e)=> setDate(e.target.value)} />
              </Form.Group>
    <br/>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Amount(GH$) :</Form.Label>
                  <Form.Control type="number" placeholder="Amount Here"  name="amount" value={amount} onChange={(e)=> setAmount(e.target.value)} />
                </Form.Group>
    <br/>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Category :</Form.Label>
                  <Form.Select defaultValue="Food and Drinks" value={category} onChange={(e)=> setCategory(e.target.value)} >
                    <option>Food and Drinks</option>
                    <option>Accomdation</option>
                    <option>Transportation</option>
                    <option>Housing and Rent</option>
                    <option>MIscellaneous</option>
                  </Form.Select>
                </Form.Group>
              </Row>
    <br/>
              <Button className="add" type="submit">
                Add Expenses
              </Button>
            </Form>
          </Container>
        </div>
      );
}

const mapDispatch = {
  addExpense
}

export default connect(null, mapDispatch) (ExpenseForm)
