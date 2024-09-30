'use client';
import React, { useState } from 'react';

const Page = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [note, setNote] = useState('');
  const [transactions, setTransactions] = useState<{ amount: number; date: string; type: string; note: string; }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction = {
      amount: parseFloat(amount),
      date,
      type,
      note,
    };
    setTransactions([...transactions, newTransaction]);
    resetForm();
  };

  const resetForm = () => {
    setAmount('');
    setDate('');
    setType('income');
    setNote('');
  };

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalExpense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div>
      <h1>บันทึกข้อมูลรายรับรายจ่าย</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="จำนวน"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
          <option value="income">รายรับ</option>
          <option value="expense">รายจ่าย</option>
        </select>
        <input
          type="text"
          placeholder="โน้ต"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">บันทึก</button>
      </form>

      <h2>รายการที่บันทึก</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date} - {transaction.type === 'income' ? '+' : '-'} {transaction.amount} บาท ({transaction.note})
          </li>
        ))}
      </ul>

      <h2>ยอดรวม</h2>
      <p>รายรับรวม: {totalIncome} บาท</p>
      <p>รายจ่ายรวม: {totalExpense} บาท</p>
      <p>ยอดสุทธิ: {totalIncome - totalExpense} บาท</p>
    </div>
  );
};

export default Page;
