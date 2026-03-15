// I'm a file for the header component

import { Link } from "react-router-dom";

const Header = function () {
  return (
    <>
      <header className="__page-header">
        <h1>Pastel do Sabor</h1>
        <div className="__navigation-list">
          <div className="__nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="__nav-item">
            <Link to="/products">Produtos</Link>
          </div>
          <div className="__nav-item">
            <Link to="/">Sobre nós</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
