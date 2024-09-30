'use client';

import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // การลงชื่อเข้าใช้
    console.log('Sign In', { email, password });
    // ทำการส่งข้อมูลไปที่ backend หรือ API ที่ต้องการ
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1>ลงชื่อเข้าใช้</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="อีเมล"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', width: '100%', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', width: '100%', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>ลงชื่อเข้าใช้</button>
      </form>
      <p>
        ยังไม่มีบัญชี? <a href="/signup">ลงทะเบียนที่นี่</a>
      </p>
    </div>
  );
};

export default SignIn;
