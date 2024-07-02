import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account/Account";
import Event_detail from "./pages/Event_detail/Event_detail";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <AuthContextProvider >

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20945.044392749984!2d2.2579626999999998!3d48.989073000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e667ba7576b8b5%3A0x40b82c3688b3320!2s95120%20Ermont!5e0!3m2!1sfr!2sfr!4v1661221365385!5m2!1sfr!2sfr" width="600" height="450"></iframe> */}
      {/* <iframe src="https://www.google.fr/maps/place/95120+Ermont/@48.989073,2.2579627,14z/data=!3m1!4b1!4m5!3m4!1s0x47e667ba7576b8b5:0x40b82c3688b3320!8m2!3d48.989071!4d2.258451" frameborder="0" width="500px" height="500px"></iframe> */}
      <Header />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/event/:id" element={<Event_detail />} />
        <Route path="/Account" element={
                                <Protected>
                                  <Account />
                                </Protected>
                                } 
                              />
        <Route path="*" element={<PageNotFound />} />
      </Routes>


      </AuthContextProvider>
    </div>
  );
}

export default App;
