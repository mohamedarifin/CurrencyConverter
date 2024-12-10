import React, { useEffect, useState } from 'react'
import './currency.css'
export const Currency = () => {
    const [formvalue, setformvalue] = useState('INR');
    const [tovalue, settovalue] = useState('INR');
    const [convertValue, setconvertValue] = useState();
    const [input, setinput] = useState(1);
    const [resultValue, setresultValue] = useState(1);
    const getdata = async ()=>{
        const link = `https://api.exchangerate-api.com/v4/latest/${formvalue}`;
        const fetchdata = await fetch(link);
        const data = await fetchdata.json();
        console.log(data)
        let covert = data.rates[tovalue];
        setconvertValue(covert);
    }
    useEffect(()=>{
        getdata();
    },[formvalue,tovalue])
    const finalamount = () =>{
        let result = (input*convertValue).toFixed(2);
        setresultValue(result)
    }
  return (
    <>
    <div className="container">
        <h1>Currency Coverter</h1>
        <div className="input_grp">
            <label htmlFor="">Amount</label>
            <input type="number" placeholder='Enter the Amount eg : 1' className='input_value' onChange={(e)=>{
                setinput(e.target.value)
            }}/>
        </div>
        <select name="" id="" onChange={(e)=>{
            setformvalue(e.target.value);
        }}>
            <option value="INR">Indian Rupee</option>
            <option value="USD">United State Dollor</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="AUD">Australian Dollar</option>
            <option value="JPY">Japan Pound Yen</option>
        </select>

        <select name="" id="" onChange={(e)=>{
            settovalue(e.target.value)
        }}>
            <option value="INR">Indian Rupee</option>
            <option value="USD">United State Dollor</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="AUD">Australian Dollar</option>
            <option value="JPY">Japan Pound Yen</option>
        </select>

        <button onClick={()=>{
            finalamount();
        }}>Convert</button>
        <div className="result">
            <p>{input} {formvalue} = {resultValue} {tovalue}</p>
        </div>
    </div>
    </>
  )
}
