import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import Portfolio from "./pages/Portfolio";
import Trade from "./pages/Trade";
import Basket  from "./pages/Basket";
import Automation from "./pages/Automation";
import StockTicker from "./components/StockTicker";

function App() {
  return (
    <BrowserRouter>
    <AnimatedBackground/>
    <StockTicker/>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/market" element={<Market />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/trade" element={<Trade />} />

        <Route path="/basket" element={<Basket />} />

        <Route path="/automation" element={<Automation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
