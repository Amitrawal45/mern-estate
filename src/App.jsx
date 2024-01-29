import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import SignOut from "./Pages/Signup";
import About from "./Pages/About";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignOut />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
