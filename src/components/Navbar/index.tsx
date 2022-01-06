import { ReactComponent as MainImage } from 'assets/images/acessibilidade.svg';
import { ReactComponent as LogImage } from 'assets/images/logo.svg';
import './styles.css';
import 'bootstrap/js/src/collapse.js';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
        <div className="container-fluid">
          {' '}
          {/* previne quebra de linha entre logo e itens */}
          <div>
            <Link to="/" className="nav-logo-text">
              <LogImage />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ticsocial-navbar"
            aria-controls="ticsocial-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="ticsocial-navbar">
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <NavLink to="/" activeClassName="active" exact>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" activeClassName="active">
                  EM CONSTRUÇÃO
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
