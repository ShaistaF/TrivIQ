import React from 'react';

function AuthButton({ isAuthenticated, onLogin, onLogout }) {
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={onLogout} className="bg-red-500 text-white py-2 px-4 rounded">
          Logout
        </button>
      ) : (
        <button onClick={onLogin} className="bg-blue-500 text-white py-2 px-4 rounded">
          Login
        </button>
      )}
    </div>
  );
}

export default AuthButton;
