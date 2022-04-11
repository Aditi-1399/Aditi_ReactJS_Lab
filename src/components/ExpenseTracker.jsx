import React, { useState } from 'react'
import { pushData } from '../services/fetch';

export default function ExpenseTracker() {
    const [payee,setPayee]=useState('ramesh');
    const [price,setPrice]=useState(20);
    const [product,setProduct]=useState();
    const [date,setDate]=useState();
    const submitHandler=async(e)=>{
        e.preventDefault();
        const data=await pushData(payee,date,price,product);
        console.log(data);
    }
  return (

    <div id='addNewForm'>

        <h1>Add New Item</h1>

        <form onSubmit={e=>{submitHandler(e)}}>

        <p id='instruction'>All fields are mandatory.</p>    
        <p id='instruction'>Please click Close button after submitting to return to home page.</p>

            <div className='userInput'>
            <p>Name : </p>
            
            <select name="payee" value={payee} onChange={e=>setPayee(e.target.value)} required>
                <option></option>
                <option value="Ramesh">Ramesh</option>
                <option value="Rahul">Rahul</option>
            </select>
            </div>
            <div className='userInput'>
                <p>Product Purchased :</p>
                <input type="text" name="product" value={product} onChange={e=>setProduct(e.target.value)} required/>
            </div>
            <div className='userInput'>
                <p>Price :</p>
                <input type="text" name="price" value={price} onChange={e=>setPrice(parseInt(e.target.value))} required/>
            </div>
            <div className='userInput'>
                <p>Date :</p>
                <input type="date" name="date" value={date} onChange={e=>setDate(e.target.value)} required/>
            </div>
            <div id='buttons' >
            <input type="submit"/> <a href='http://localhost:3001'>Close</a>
            </div>
        </form>
        
    </div>
  )
}
