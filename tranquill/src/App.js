import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Home/Header";
import Home from "./Home/Home";
import Login from "./Home/Login";
import Register from "./Home/Register";
import MainPage from "./Main/MainPage";
import Meditation from "./Main/Meditation";
import YogaCamp from "./Main/YogaCamp";
import LiveInNature from "./Main/LiveInNature";
import About from "./Main/About";
import MyPackage from "./Main/MyPackage";
import Contact from "./Main/Contact";
import Logout from "./Main/Logout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header></Header>
                <Home></Home>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header></Header>
                <Login></Login>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header />
                <Register></Register>
              </>
            }
          />
          <Route path="/main-page/:userId" element={<MainPage></MainPage>} />
          <Route path="main-page" element={<MainPage></MainPage>} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/yoga-camp" element={<YogaCamp></YogaCamp>} />
          <Route
            path="/live-in-nature"
            element={<LiveInNature></LiveInNature>}
          />
          <Route path="/myPackage" element={<MyPackage></MyPackage>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/logout" element={<Logout></Logout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
