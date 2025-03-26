import { useState } from 'react';

const AuthForm = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => onSubmit(e, email, password)} className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">{type === 'login' ? 'Login' : 'Sign Up'}</h2>
      <input 
        type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded mb-4" required
      />
      <input 
        type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded mb-4" required
      />
      <button className="w-full p-2 bg-blue-600 text-white rounded">{type === 'login' ? 'Login' : 'Sign Up'}</button>
    </form>
  );
};

export default AuthForm;
