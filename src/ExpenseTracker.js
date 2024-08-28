import React, { useState } from 'react';

const ExpenseTracker = () => {
    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('');
    const [expenses, setExpenses] = useState([]);

    const addExpense = () => {
        if (!input || !amount) return;

        const newExpense = {
            id: expenses.length + 1,
            title: input,
            amount: parseFloat(amount)
        };
        setExpenses([...expenses, newExpense]);
        setInput('');
        setAmount('');
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">EXPENSE TRACKER</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Expense"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button
                    onClick={addExpense}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Add Expense
                </button>
            </div>
            <ul className="expense-list">
                {expenses.map((expense) => (
                    <li key={expense.id} className="flex justify-between items-center mb-2">
                        <span>{expense.title}</span>
                        <span>${expense.amount.toFixed(2)}</span>
                        <button
                            onClick={() => deleteExpense(expense.id)}
                            className="bg-red-500 text-white p-1 rounded"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseTracker;