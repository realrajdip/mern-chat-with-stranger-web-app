import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Chats from "./pages/Chats";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <>
      <AppContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/chats" element={<Chats />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContextProvider>
    </>
  );
};

export default App;
