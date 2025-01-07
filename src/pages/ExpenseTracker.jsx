import React, { useState } from "react";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);
    const [expense, setExpense] = useState({ title: "", amount: "" });
    const [currency, setCurrency] = useState({ amount: "", from: "USD", to: "EUR" });
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleExpenseChange = (e) => {
        const { name, value } = e.target;
        setExpense({ ...expense, [name]: value });
    };

    const handleAddExpense = (e) => {
        e.preventDefault();
        if (expense.title && expense.amount) {
            setExpenses([...expenses, expense]);
            setExpense({ title: "", amount: "" }); // Clear input
        }
    };

    const totalExpense = expenses.reduce((total, item) => total + parseFloat(item.amount || 0), 0);

    const handleCurrencyChange = (e) => {
        const { name, value } = e.target;
        setCurrency({ ...currency, [name]: value });
    };

    const handleConvertCurrency = async () => {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency.from}`);
        const data = await response.json();
        const rate = data.rates[currency.to];
        setConvertedAmount((currency.amount * rate).toFixed(2));
    };

    return (
        <div className="expense-tracker">
            <h2>Expense Tracker</h2>

            {/* Add Expense Form */}
            <form className="expense-form" onSubmit={handleAddExpense}>
                <h3>Add Expense</h3>
                <input
                    type="text"
                    name="title"
                    value={expense.title}
                    onChange={handleExpenseChange}
                    placeholder="Expense Title"
                    required
                />
                <input
                    type="number"
                    name="amount"
                    value={expense.amount}
                    onChange={handleExpenseChange}
                    placeholder="Amount"
                    required
                />
                <button type="submit">Add Expense</button>
            </form>

            {/* Expense List */}
            <div className="expense-list">
                <h3>Expenses</h3>
                <ul>
                    {expenses.map((item, index) => (
                        <li key={index}>
                            {item.title}: ${parseFloat(item.amount).toFixed(2)}
                        </li>
                    ))}
                </ul>
                <h3>Total Expense: ${totalExpense.toFixed(2)}</h3>
            </div>

            {/* Currency Conversion Card */}
            <div className="currency-converter">
                <h3>Currency Converter</h3>
                <input
                    type="number"
                    name="amount"
                    value={currency.amount}
                    onChange={handleCurrencyChange}
                    placeholder="Amount"
                />
                <select name="from" value={currency.from} onChange={handleCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                <select name="to" value={currency.to} onChange={handleCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
                <button onClick={handleConvertCurrency}>Convert</button>
                {convertedAmount && (
                    <h4>Converted Amount: {convertedAmount} {currency.to}</h4>
                )}
            </div>
        </div>
    );
};

export default ExpenseTracker;
