import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <h2>Kashif Mehmood</h2>
      </div>
      <div className="nav-links">
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
