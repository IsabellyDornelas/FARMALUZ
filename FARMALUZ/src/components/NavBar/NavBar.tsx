import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white font-bold text-xl">Farmácia</h1>
        <div>
          <Link to="/" className="text-white mr-4">Home</Link>
          <Link to="/categorias" className="text-white">Categorias</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;