import React from 'react';

function NavBar({ user, doLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Mini Store</a>
        <div className="d-flex align-items-center gap-2">
          {user ? (
            <React.Fragment>
              <span className="text-muted">Hello, {user}</span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={doLogout}
              >
                Logout
              </button>
            </React.Fragment>
          ) : (
            <a href="/login" className="btn btn-sm btn-outline-primary">Login</a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
