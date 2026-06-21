import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore"; // 1. Import your Zustand store

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login); // 2. Extract the login action

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9090/auth/login", {
        username,
        password,
      });

      // 3. Trigger the Zustand login action.
      // This automatically runs localStorage.setItem() AND syncs your global state.
      login(response.data, username);

      // 4. Safely navigate to the dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#071120]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-[450px] bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
      >
        <h1 className="text-4xl text-center text-[#D4AF37] font-bold">
          TradeX
        </h1>

        <input
          placeholder="Username"
          className="w-full mt-8 p-4 rounded-xl bg-white/10 outline-none text-white border border-white/5 focus:border-[#D4AF37]/50 transition-all"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 p-4 rounded-xl bg-white/10 outline-none text-white border border-white/5 focus:border-[#D4AF37]/50 transition-all"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full mt-6 bg-[#D4AF37] text-black p-4 rounded-xl font-bold hover:bg-[#F5C542] transition-colors"
          onClick={handleLogin}
        >
          Login
        </button>
      </motion.div>
    </div>
  );
}
