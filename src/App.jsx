import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PersonalityTypes from "./pages/PersonalityTypes";
import PersonalityDetail from "./pages/PersonalityDetail";
import Test from "./pages/Test";
import UserInfo from "./pages/UserInfo";
import Result from "./pages/Result";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personality-types" element={<PersonalityTypes />} />
          <Route path="/personality/:id" element={<PersonalityDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>
    </div>
  );
}
