import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
sticky top-0 z-50
backdrop-blur-2xl
bg-slate-900/50
border-b border-yellow-400/10
shadow-xl
"
    >
      <div className="
sticky top-0 z-50
backdrop-blur-2xl
bg-slate-900/50
border-b border-yellow-400/10
shadow-xl
">
        <h1
          className="
text-3xl
font-extrabold
bg-gradient-to-r
from-yellow-300
via-yellow-500
to-white
bg-clip-text text-transparent"
        >
          TRADE AI
        </h1>

        <div className="flex gap-8">
          <Link to="/">Dashboard</Link>

          <Link to="/market">Market</Link>

          <Link to="/portfolio">Portfolio</Link>

          <Link to="/trade">Trade</Link>

          <Link to="/basket">Basket</Link>

          <Link to="/automation">Automation</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
