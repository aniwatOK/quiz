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
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>บันทึกข้อมูลรายรับรายจ่าย</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="number"
          placeholder="จำนวน"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')} style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
          <option value="income">รายรับ</option>
          <option value="expense">รายจ่าย</option>
        </select>
        <input
          type="text"
          placeholder="โน้ต"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
          บันทึก
        </button>
      </form>

      <h2 style={{ marginTop: '20px', color: '#333' }}>รายการที่บันทึก</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {transactions.map((transaction, index) => (
          <li key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
            {transaction.date} - {transaction.type === 'income' ? '+' : '-'} {transaction.amount} บาท ({transaction.note})
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: '20px', color: '#333' }}>ยอดรวม</h2>
      <p>รายรับรวม: {totalIncome} บาท</p>
      <p>รายจ่ายรวม: {totalExpense} บาท</p>
      <p>ยอดสุทธิ: {totalIncome - totalExpense} บาท</p>
    </div>
  );
};

export default Page;
