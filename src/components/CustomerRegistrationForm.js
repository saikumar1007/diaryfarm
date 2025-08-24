// Example: src/components/CustomerRegistrationForm.js

import React, { useState } from 'react';

const CustomerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    mobile_number: '',
    email: '',
    full_address: '',
    bottle_size: '1L',
    bottles_per_day: 1,
    delivery_days: '',
    start_date: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/customers/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        alert('✅ Registration successful!');
        console.log(data);
      } else {
        const error = await res.json();
        alert(`❌ Error: ${error.message || 'Something went wrong'}`);
      }
    } catch (err) {
      console.error('❌ Fetch Error:', err);
      alert('❌ Network Error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="full_name" placeholder="Full Name" onChange={handleChange} required />
      <input name="mobile_number" placeholder="Mobile Number" onChange={handleChange} required />
      <input name="email" placeholder="Email (optional)" onChange={handleChange} />
      <textarea name="full_address" placeholder="Address" onChange={handleChange} required />
      
      <select name="bottle_size" onChange={handleChange}>
        <option value="500ml">500ml</option>
        <option value="1L">1L</option>
        <option value="2L">2L</option>
      </select>
      
      <input type="number" name="bottles_per_day" onChange={handleChange} required />
      <input name="delivery_days" placeholder="Mon,Tue,Wed" onChange={handleChange} required />
      <input type="date" name="start_date" onChange={handleChange} required />

      <button type="submit">Register</button>
    </form>
  );
};

export default CustomerRegistrationForm;
